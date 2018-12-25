<template>
	<ul>
		<li v-for="(item,index) in list" :key="index">
			<img :src="item.coverImage" alt="" />
			<div>{{item.coverTitle}}</div>
		</li>
	</ul>
</template>

<script>

export default{
	data(){
		return{
			imgList:"https://api.hongbeibang.com/recommend/getRandContent?_t=1545740358443&type=3&pageSize=10",
			list:[],
			
		}
	},
	props:[],
	methods:{
		
	},
	watch:{
		
	},
	created(){
		this.$axios.get(this.imgList)
		.then((res)=>{
			this.list=res.data.data
		}).catch(err=>{
			console.log(err)
		})
	}
}


</script>

<style	lang="less" scoped>
@import url("../../style/main.less");
ul{
	.w(375);
	.h(275);
	display:flex;
	overflow-x:auto;
	li{
		margin:0 5px;
		white-wrap:nowrap;
		.w(160);
		.h(225);
		img{
			.w(160);
			.h(225);
			border-radius:8px;
		}
		div{
			.w(160);
			.h(40);
			overflow:hidden;
			font-size:14px;
			color:#000
		}
	}
}

</style>