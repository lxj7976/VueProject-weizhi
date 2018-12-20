<template>
    <div id="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='(item ,index) in banners' :key="index">
                <img :src="rootPath+item.imagePath" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return {
            rootPath:'http://47.95.207.1:3000',
            banners:[]
        }
    },
    props:['list'],
	methods:{
		initswiper(){
            this.banners=this.list	
            console.log(this.banners)	
		}
	},
	watch:{
		list(){
			this.initswiper()
		}
	}
}
</script>
<style lang="less" scoped>
@import url("../../style/main.less");

#banner{
    .h(200);
    img{
        width: 100%;
    }
    
}
</style>
