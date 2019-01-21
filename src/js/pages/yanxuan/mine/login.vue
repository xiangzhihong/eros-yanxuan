<template>
    <div class="wrapper">
        <image class="l-logo" resize="contain" src="bmlocal://assets/login_logo_ic.png"></image>

        <div class="l-container">
            <div class="l-phone" @click="jumpAPI()">
                <image class="l-image" resize="contain" src="bmlocal://assets/login_phone.png"></image>
                <text class="txt-tag">手机号登录</text>
            </div>

            <div class="l-email">
                <image class="l-image" resize="contain" src="bmlocal://assets/login_mail.png"></image>
                <text class="txt-tag" :style="{'color':'#B02A2F'}">邮箱账号登录</text>
            </div>
            <text class="txt-reg" >手机号快速注册</text>
        </div>

        <div class="l-third">
            <div class="l-t">
                <image class="l-t-image" resize="contain" src="bmlocal://assets/login_weibo_ic.png"></image>
                <text class="l-t-txt">微博</text>
            </div>

            <text class="l-line">|</text>

            <div class="l-t">
                <image class="l-t-image" resize="contain" src="bmlocal://assets/login_qq_ic.png"></image>
                <text class="l-t-txt">QQ</text>
            </div>

            <text class="l-line">|</text>

            <div class="l-t">
                <image class="l-t-image" resize="contain" src="bmlocal://assets/login_wx_ic.png"></image>
                <text class="l-t-txt">微信</text>
            </div>
        </div>

    </div>
</template>
<script>
  export default {
      methods:{
          jumpAPI() {
              this.$router.open({
                  name: 'api'
              })
          },
      }
  }
</script>

<style lang="sass" src="./login.scss"></style>
