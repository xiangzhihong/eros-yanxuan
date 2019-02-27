<template>
    <div class="wrapper">

        <div class="box">
            <text class="txt">送出的礼物</text>
            <text class="txt-blue">0577-1234567</text>

        </div>
        <div class="line"></div>
        <div class="box">
            <text class="txt">送出的礼物</text>
            <text class="txt-blue">12345678</text>

        </div>
        <div class="line"></div>
        <div class="box" @click="jumpFeedback()">
            <text class="txt">意见反馈</text>
            <text class="arrow iconfont">&#xe600;</text>
        </div>

    </div>
</template>
<script>

export default {

    mounted() {

    },
    data() {

    },
    methods: {
        jumpFeedback() {
            this.$router.open({
                name: 'feedback'
            })
        },
    }
}
</script>
<style>
    .iconfont {
        font-family: iconfont;
    }
    .wrapper {
        background-color: #f4f4f4;
        padding-top: 15px;
    }
    .box {
        padding: 20px;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 98px;
    }
    .line {
        width: 730px;
        align-items: end;
        margin-left: 20px;
        color: rgba(0, 0, 0, .15);
        height: 2px;
    }
    .txt {
        flex: 1;
        font-size: 30px;
        color: #5C7799;
    }
    .txt-blue {
        font-size: 30px;
        color: #419DFB;
    }
    .arrow {
        width: 50px;
        color: #777777;
    }

</style>
