<template>
    <div id="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item>1dddd</mt-swipe-item>
            <mt-swipe-item>2dddd</mt-swipe-item>
            <mt-swipe-item>3dddd</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@import url("../../style/main.less");

#banner{
    .w(375);
    .h(100);
    background: red;
}
</style>
