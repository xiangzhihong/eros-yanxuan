<template>
    <div class="wrapper">
            <div class="p-box border-bottom">
                <text class="p-txt">个人信息</text>
                <image class="p-photo" resize="cover" src="https://avatar.csdn.net/E/D/2/3_xiangzhihong8.jpg"></image>
                <image class="p-msg-point" resize="cover" src="bmlocal://assets/msg_notify.png"></image>
                <text class="i-box-in iconfont">&#xe600;</text>
            </div>
        <div class="p-box border-bottom">
            <text class="p-txt">我的二维码</text>
            <text class="i-box-in iconfont">&#xe600;</text>
        </div>
        <div class="p-box border-bottom">
            <text class="p-txt">我的尺寸</text>
            <text class="i-box-in iconfont">&#xe600;</text>
        </div>
        <div class="p-box border-bottom">
            <text class="p-txt">账号安全</text>
            <text class="i-box-in iconfont">&#xe600;</text>
        </div>
        <div class="p-box">
            <text class="p-txt">会员俱乐部</text>
            <text class="i-box-in iconfont">&#xe600;</text>
        </div>

        <div class="l-o-c" @click="loginOut()">
            <text class="p-txt">退出登录</text>
        </div>
    </div>
</template>
<script>


export default {
    mounted() {

    },
    data() {
        return {
            statusHeight: Number.parseInt(this.statusBarHeight || weex.config.env.statusBarHeight || 40)
        }
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
<style lang="sass" src="./person.scss"></style>
