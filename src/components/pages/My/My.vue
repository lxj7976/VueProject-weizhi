<template>
	<div id="my">
		<div class="header">
			<span	@click='goback'>&lt;</span>
			<span>登录</span>
		</div>
		<div class="banner">
			<img src="https://image.hongbeibang.com/FoBGm71FF5SYiTw0Wc0xkeiL3eQz?imageMogr2/strip/thumbnail/510x510" alt="" />
		</div>
		<div class="main">
			<div>使用微信登录</div>
			<p>其他登录方式</p>
			<span>登录即代表阅读并同意</span><label for="">服务条款</label>
		</div>
	</div>
</template>

<script>
export default{
	name:'My',
	data(){
		return{
			
		}
	},
	prop:[],
	methods:{
		goback(){
			this.$router.back()
		}
	}
}
</script>

<style lang="less" scoped="">
@import url(../../../style/main.less);
#my{
	.w(375);
	.h(667);
	.header{
		.w(375);
		.h(44);
		span:nth-child(1){
			display: block;
			float: left;
			font-size: 30px;
			line-height: 44px;
			color: #666;
			padding: 0 20px 0 15px;
		}
		span:nth-child(2){
			font-size: 18px;
			text-align: center;
			height: 100%;
			line-height: 44px;
			display: block;
			text-indent: -50px;
			font-weight: 700;
		}
	}
	.banner{
		
		img{
			.w(300);
			.h(167);
			display: block;
			margin: 110px auto 50px;
			}
	}
	.main{
		text-align: center;
		div{
			.w(295);
			.h(44);
			background: #2ac277;
			border-radius: 8px;
			margin:5px auto;
			font-size: 15px;
			color: white;
			text-align: center;
			line-height: 44px;
		}
		p{
			.w(90);
			.h(20);
			padding:10px 0;
			margin: 15px auto;
			color: rgba(233,139,113);
			font-size: 15px;
		}
		span{
			
			.w(120);
			.h(16);
			margin: 30px auto;
		}
		label{
			color:rgba(233,139,113) ;
		}
	}
	
	
	
}

</style>
