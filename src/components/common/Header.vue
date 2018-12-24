<template>
	<div id="header">
		<span>+</span>
		<input type="text" id="inp" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" />
		<img class="btn" src="https://image.hongbeibang.com/FnuB0vCfzLhV-aolTl0hdoaTCZMJ?48X48&imageView2/1/w/48/h/48" alt="" />
	</div>
</template>

<script>
export default{
	name:'Header',
	data(){
		return {
			
		}
	},
	props:[],
	methods:{
		
	}
}
</script>

<style lang="less" scoped="">
@import url(../../style/main.less);
#header{
	.w(375);
	.h(44);
	background:#fff;
	span:nth-child(1){
		display: block;
		float: left;
		font-size: 30px;
		line-height: 44px;
		color: #666;
		padding: 0 20px 0 15px;
	};
	#inp{
		display: inline-block;
		float: left;
		width: 250px;
		height: 22px;
		border-radius:5px ;
		padding: 5px 0 5px 0;
		margin-top:5px ;
		background: #f5f7f9;
	};
	.btn{
		display: block;
		width: 30px;
		height: 30px;
		padding: 5px 10px 5px 15px;
	}
}
</style>