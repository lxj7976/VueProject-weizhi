<template>
    <div id='new'>
        <div class="bakingActivities">
            <div class="imgbox" v-for="(item,index) in list" :key="index">
                <img :src="item.image" alt="">
            </div>
        </div>
        <div class="titles">
            <div class="titlesBox"  v-for="(item,index) in titles" :key="index">
                <!-- <div class="titlesBox" v-for="(item,index) in bgcolor" :key="index"> -->
                    <span>{{item.name}}</span>
                <!-- </div> -->
            </div>
        </div>
        <Discuss />
    </div>
</template>
<script>
import Discuss from './discuss'
export default {
    data(){
        return {
            list:[],
            titles:[],
            comments:[],
            bgcolor:['#94BFBB','#927472','#E5AA9C','#5BADA6','#b78b9f','#acbcc9','#8f7671','#acb99b','#aca6bb','#c3d0ad']
        }
    },
    components:{
        Discuss
    },
    methods:{
        initData(){
            let url = 'https://api.hongbeibang.com/feed/getCategory?_t=1545733197565&'
            let titles = 'https://api.hongbeibang.com/community/getByLimit?isShow=4&_t=1545733197642&pageIndex=0&pageSize=99';
            
            this.$axios.get(url)
            .then((res)=>{
                // console.log(res.data.category[0].item);
                this.list=res.data.category[0].item
            })
            .catch((err)=>{
                console.log(err);
            })
            // 标题
            this.$axios.get(titles)
            .then((res)=>{
                // console.log(res.data.data)
                this.titles=res.data.data;
            })
            .catch((err)=>{
                console.log(err)
            })
            
        }
    },
    
    created(){
        this.initData()
    }
    
}
</script>
<style lang="less" scoped>
@import url(../../../../style/main.less);
#new{
    .p_l(10);  
    .p_r(10);
    .w(355);  
    .bakingActivities{
    display: flex;
    overflow: auto;
    .imgbox{
        .w(150);
        .h(85);
        .m_t(10);
        .m_b(10);
        .m_l(3);
        .m_r(3);
        img{
            .w(150);
             border-radius: 5px;
        }
    }
}
.titles{
    display: flex;
    overflow: auto;
    .p_t(10);
    .p_b(10);
    .titlesBox{
        white-space: nowrap;
        .w(70);
        .h(20);
        .lh(20);
        .p_t(5);
        .p_b(5);
        .p_l(5);
        .p_r(5);
        .m_l(5);
        .m_r(5);
        color: white;
        background: red;
        border-radius: 5px;
        span{
            display: block;
        }
    }
}
}

</style>
