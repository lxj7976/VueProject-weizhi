<template>
    <div id="nav">
        <div class="navBox">
            <div id="left">
                <img src="https://image.hongbeibang.com/FuJof8xufLvs1qA3KdA2n1bGDvEQ?48X48&imageView2/1/w/48/h/48" alt="">
            </div>
            <div id="center">
                <ul>
                    <router-link v-for="(item,index) in title" :key="index" tag='li' :to='item.path'>
                        <span>{{item.name}}</span>
                    </router-link>
                </ul>
            </div>
            <div id="right">
                <img src="https://image.hongbeibang.com/FnuB0vCfzLhV-aolTl0hdoaTCZMJ?48X48&imageView2/1/w/48/h/48" alt="">
            </div>
        </div>
        <div class="kong"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:[{name:'关注',path:'/baking/focus'},{name:'最新',path:'/baking/new'},{name:'达人',path:'/baking/excellent'}]
        }
    }
}
</script>
<style lang="less" scoped>
@import url(../../../style/main.less);
#nav{
    .h(45);
    
    
.navBox{
    background: white;
    .h(45);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    .fs(16);
     display: flex;
     justify-content: space-between;
    margin: 0 10px;
    #left{
        .w(25);
        img{
            .w(25);
            .m_t(10);
        }
    }
    #center{
        flex: 1;
        ul{
            text-align: center;
            display:flex;
            .lh(45);
            justify-content: center;
            li{
                .p_l(12.5);
                .p_r(12.5);
            }
        }
    }
    #right{
        .w(25);
        img{
            .w(25);
            .m_t(10);
        }
    }
    .router-link-active{
        font-weight: bolder;
        span{
            .p_b(10);
            border-bottom: 2px solid @bakingColor;
        }
    }
}
.class{
    .h(45);
    background: green;
}
}
</style>
