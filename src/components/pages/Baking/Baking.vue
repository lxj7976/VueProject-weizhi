<template>
    <div>
        <div class="navBox">
            <Nav class="nav"/>
        </div>
        <router-view></router-view>
        <TabBar />
    </div>
</template>
<script>
import Nav from './nav'
import TabBar from '../../common/TabBar'
export default {
    components:{
        Nav,TabBar
    }
}
</script>
<style lang="less" scoped>
@import url(../../../style/main.less);
.navBox{
}   
</style>
