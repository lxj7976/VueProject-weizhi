<template>
  <div class="home">
    home
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import url(../../../style/main.less);
.home{
  .w(375);
  .h(100);
  background: @bgcolor;
}
</style>
