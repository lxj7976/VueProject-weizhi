<template>
    <div id="tabbar">
        <mt-tabbar v-model="selected">
        <mt-tab-item v-for="(item,index) in tab" :key="index">
            <router-link tag='li' :to='item.path'>
                <div class="imgbox" >
                    <img :src="item.imgPath">
                </div>
                {{item.name}}
             </router-link>
        </mt-tab-item>
        </mt-tabbar>
        <div id='kong'></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:'1',
            tab:[
                {name:'首页', path:'/home', imgPath:'https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50'},
                {name:'学堂', path:'/school', imgPath:'https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50'},
                {name:'烘焙圈', path:'/baking', imgPath:'https://image.hongbeibang.com/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50'},
                {name:'我', path:'/my',imgPath:'https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50'}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../../style/main.less");
#tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .h(55);
    li{
        .imgbox{
            img{
                .w(25);
                .h(25);
            }
        }
    }
    .router-link-active{
        color: #E98B71;
    }
    #kong{
        .h(55);
    }
}
</style>
