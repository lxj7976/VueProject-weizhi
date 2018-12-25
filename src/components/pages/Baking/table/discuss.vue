<template>
    <div>
        <div class="box" v-for="(item,index) in list" :key="index">
             <div class="top">
                <div class="userimg">
                    <img :src="item.clientImage" alt="">
                </div>
                <div class="text">

                    <p>{{item.clientName}}</p>
                    <div>
                        <span></span>
                        <span>{{item.coverTitle}}</span>
                    </div>
                </div>
            </div>
            <div class="imgbox" v-for="(subitem,index) in item.image" :key="index">
                <img :src="subitem" alt="">
            </div>
            <div class="bottom">
                <div class="bottomBox" v-for="(item,index) in comments" :key="index">
                    <p class="imgbox">
                        <img alt="" title="" :src="item.imgPath">
                    </p>
                    <div>{{item.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[],
            comments:[
                {'text':'点赞','imgPath':'https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&amp;imageView2/1/w/38/h/38'},
                {'text':'打赏','imgPath':'https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&amp;imageView2/1/w/38/h/38'},
                {'text':'评论','imgPath':'https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&amp;imageView2/1/w/38/h/38'}
            ]
        }
    },
    methods:{
        initData(){
            let comments = 'https://api.hongbeibang.com/v2/feed/getNew?_t=1545740538469&pageIndex=0&pageSize=10';
             // 评论
            this.$axios.get(comments)
            .then((res)=>{
                console.log(res.data.content);
                this.list=res.data.content;
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    created(){
        this.initData();
    }
}
</script>
<style lang="less" scoped>
@import url(../../../../style/main.less);
.box{
    .top{
        .m_t(10);
        .m_b(10);
        display: flex;
        .userimg{
            .w(40);
            .h(40);
            img{
                width:100%;
            }
        }
        .text{
            .m_l(5);
            p{
                .m_b(5);
            }
        }
    }
    .imgbox{
        .w(355);
        img{
            width:100%;
        }
        
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        .h(30);
        box-sizing: border-box;
        margin: 20px 15px;
        padding: 10px;
        border-top: 1px solid;
        border-top-color: #E7E2E5;

        .bottomBox{
            display: flex;
            justify-content: center;
            width: 33%;
            text-align: center;
            .imgbox{
                .w(19);
                .h(19);
            }
        }
        div:first-child{
            .h(20);
            border-right:1px solid #E7E2E5; 
        }
        div:nth-of-type(2){
            .h(20);
            border-right:1px solid #E7E2E5; 
        }
    }
}

</style>
