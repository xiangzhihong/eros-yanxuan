<template>
    <div class="wrapper">
        <text class="tlt">发现</text>
        <text class="rightTxt">甄选家</text>
    </div>
</template>
<script>
export default {
    props: ['title', 'leftBtn', 'rightBtn'],
}
</script>
<style scoped>
.wrapper {
    height: 70px;
    background-color: #fafafa;
    opacity: .99;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
}

.tlt {
    font-size: 36px;
    color: #b4282d;
}

.rightTxt {
    font-size: 28px;
    margin-left: 20px;
    color: #777777;
}
</style>
