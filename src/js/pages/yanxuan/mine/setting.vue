<template>
    <div class="wrapper">

        <div class="box">
            <text class="txt">检查更新</text>
            <text class="txt-blue">已经是最新版本2.0</text>
            <text class="arrow iconfont">&#xe600;</text>
        </div>
        <div class="line"></div>
        <div class="box">
            <text class="txt">清除缓存</text>
            <text class="txt-blue">2.5M</text>
            <text class="arrow iconfont">&#xe600;</text>
        </div>
        <div class="line"></div>
        <div class="box">
            <text class="txt">关于我们</text>
            <text class="arrow iconfont">&#xe600;</text>
        </div>


        <div class="s-container">
            <div class="s-btn ">
                <text class="txt-w">退出登录</text>
            </div>
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
        loginOut(url) {
            this.$router.open({
                name: 'login'
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
        height: 95px;
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
        font-size: 26px;
        color: #419DFB;
    }
    .arrow {
        width: 50px;
        justify-content: center;
        color: #777777;
    }
    .s-container {
        flex: 1;
        justify-content: flex-end;
        padding-bottom: 150px;
    }

    .s-btn {
        background-color: #fb4141;
        width: 680px;
        height: 90px;
        align-self: center;
        justify-content: center;
        border-radius: 8px;
    }

    .txt-w {
        font-size: 36px;
        color: #ffffff;
        text-align: center;
    }

</style>
