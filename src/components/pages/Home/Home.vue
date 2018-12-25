<template>
  <div class="home">
  	<Header></Header>
    <Banner :list="banners" class="banner"></Banner>
    <p>学堂精选</p>
    <imgList></imgList>
    <p>中式面点</p>
    <imgList1></imgList1>
    <p>学堂精选</p>
    <imgList></imgList>
    <p>中式面点</p>
    <imgList1></imgList1>
    <p>学堂精选</p>
    <imgList></imgList>
    <p>中式面点</p>
    <imgList1></imgList1>
    <TabBar />
  </div>
</template>

<script>
import Header from '../../common/Header'
import Banner from '../../common/Banner'
import TabBar from '../../common/TabBar'
import ImgList from '../../common/ImgList'
import ImgList1 from '../../common/ImgList1'
export default {
  data () {
    return {
      rootPath:'http://47.95.207.1:8080',
      banners:[]
    }
  },
  components:{
    Banner,TabBar,Header,ImgList,ImgList1
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
  .banner{
  	margin-top: 44px;
  }
  p{
  	margin: 8px ;
  	font-size:16px;
  }
}
</style>
