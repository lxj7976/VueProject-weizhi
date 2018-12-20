<template>
	<div id="search">
		<div class="header">
			<span>&lt;</span>
			<input type="text" id="inp" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" />
			<span class="btn">搜索</span>
		</div>
		<p>热门搜索</p>
		<ul>
			<li v-for='(item,index) in list' :key="index">
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>

export default{
	name:'Search',
	data(){
		return{
			list:["戚风","蛋挞","生日蛋糕","披萨","吐司","曲奇","牛轧糖","蛋黄酥","雪花酥"]
		}
	},
	props:['',''],
	methods:{
		
	},
}



</script>

<style type="text/css">
	#search{width: 100%;}
	.header{
		width: 100%;
		height: 44px;
		background: #fff;
		margin-bottom: 10px;
	}
	.header>span:nth-child(1){
		display: block;
		float: left;
		font-size: 30px;
		line-height: 44px;
		color: #666;
		margin: 0 20px 0 15px;
	}
	.header #inp{
		display: inline-block;
		float: left;
		width: 250px;
		height: 22px;
		border-radius:5px ;
		padding: 5px 0 5px 0;
		margin-top:5px ;
		background: #f5f7f9;
	}
	.header .btn{
		display: block;
		
		float: left;
		font-size: 20px;
		line-height: 44px;
		color: #666;
		margin: 0 0px 0 10px;
	}
	#search ul{
/*		width: 96%;*/
		height: 200px;
	}
	#search ul li{
		font-size: 18px;
		float: left;
		padding: 0 10px 0 10px;
		margin: 0 10px 10px 0;
		background:#f5f7f9 ;
		border-radius:100px ;
	}
	p{
		font-size: 16px;
		margin-left: 10px;
		color: #bbb;
		margin-bottom: 16px;
	}
</style>
<style lang="less" scoped>
/*@import url("../../style/main.less");
#search{
	width:100%
	.header{
		.w(37.5)
	}
}*/
</style>