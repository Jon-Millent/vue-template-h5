<template>
    <div class="page-index-home">
        <h1>page-index-home</h1>
        <h2 @click="openPage">information</h2>
    </div>
</template>

<script>

  export default {
    name: "index-home",
    data(){
      return {

      }
    },
    components: {

    },
    methods: {
      openPage(){
        this.$router.openPage('/information')
      }
    }
  }
</script>

<style lang="scss">

</style>
