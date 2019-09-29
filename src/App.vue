<template>
  <div id="app">
    <div class="loading-bar" :class="nowStatus">
      <span class="press"></span>
    </div>

    <div class="app-init">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Rem from './plugin/rem'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'app',
    computed: {
      ...mapGetters([
        'nowStatus'
      ])
    },
    data () {
      return {
        transitionName : 'slide-go',
        nowUrl: '/'
      }
    },
    watch: {
      '$route' (to, from) {
        if (from.query.time) {
          if (to.query.time > from.query.time) {
            this.transitionName = 'slide-go'
          } else {
            this.transitionName = 'slide-back'
          }
        } else {
          this.transitionName = 'slide-go'
        }
        this.nowUrl = to.fullPath
      }
    },
    mounted() {
      new Rem()
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/base";
  @import "./assets/scss/iconfont.css";
</style>
