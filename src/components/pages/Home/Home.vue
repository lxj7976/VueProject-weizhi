<template>
  <div class="home">
    <Banner :list="banners"></Banner>
    <TabBar />
  </div>
</template>

<script>
import Banner from '../../common/Banner'
import TabBar from '../../common/TabBar'
export default {
  data () {
    return {
      rootPath:'http://47.95.207.1:8080',
      banners:[]
    }
  },
  components:{
    Banner,TabBar
  },
  methods:{
    initData(){
			// Indicator.open({
			//   text: '加载中...',
			//   spinnerType: 'double-bounce'
			// })
			let url='/banner/api/getHome'
	
			this.$axios.get(url)
			.then((res)=>{
				console.log(res);
				this.banners=res.data.banners

				// Indicator.close()
			})
			.catch((err)=>{
				// Indicator.close()
				console.log(err);
			})
		}
  },
  created(){
    this.initData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import url(../../../style/main.less);
.home{
  
}
</style>
