<template>
    <div>
        <div id="add">
            <img src="" alt="">
        </div>
        <div>
            <ul>
                <router-link v-for="(item,index) in title" :key="index" tag='li' :to='item.path'>{{item.name}}</router-link>
            </ul>
        </div>
        <div id="msg">
            <img src="" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:[{name:'关注',path:'/focus'},{name:'最新',path:'./new'},{name:'达人',path:'/excellent'}]
        }
    }
}
</script>
<style lang="less" scoped>

</style>
