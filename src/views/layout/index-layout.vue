<template>
    <div class="full-box page-index-layout">

        <div class="content-controller">
            <router-view></router-view>
        </div>

        <div class="tabs-controller">
            <div class="tabs-item home" :class="{active: nowTabIndex === 0}" @click="changeTabEvent(0)">
                <div class="icon">
                    <div class="icon-target">
                    </div>
                </div>
                <p class="name">home</p>
            </div>
            <div class="tabs-item ask" :class="{active: nowTabIndex === 1}" @click="changeTabEvent(1)">
                <div class="icon">
                    <div class="icon-target">
                    </div>
                </div>
                <p class="name">ask</p>
            </div>
            <div class="tabs-item home" :class="{active: nowTabIndex === 2}" @click="changeTabEvent(2)">
                <div class="icon">
                    <div class="icon-target">
                    </div>
                </div>
                <p class="name">mine</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index-layout.vue",
    data(){
      return {
        tabIndexArray: [
          {
            index: 0,
            mathString: 'index-home',
            path: 'home'
          },
          {
            index: 1,
            mathString: 'index-qa',
            path: 'qa'
          },
          {
            index: 2,
            mathString: 'index-mine',
            path: 'mine'
          }
        ],
        nowTabIndex: 0
      }
    },
    methods: {
      changeTabEvent(index){
        this.nowTabIndex = index

        let target = this.tabIndexArray.find(val=>{
          return val.index === index
        })

        this.$router.openPage('/index/' + target.path)

      },


      compTargetRouter(pathName){
        let initRouterName = pathName
        this.tabIndexArray.forEach(val=>{
          if(initRouterName.indexOf(val.mathString) !== -1) {
            this.nowTabIndex = val.index
          }
        })
      }
    },
    watch: {
      '$route' (to) {
        this.compTargetRouter( to.name )
      }
    },
    mounted() {
      // 刚 进来 时候 匹配 一次 初始化 路由
      this.compTargetRouter( this.$router.currentRoute.name )
    }
  }
</script>

<style lang="scss">
    @import "../../assets/scss/util";
    @import "../../assets/scss/tabs-layout";

    .content-controller {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: getPx($tabControllerHeight);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>
