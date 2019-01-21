<template>
    <div class="wrapper">
        <div class="m-container" v-for="i in msg" @click="jumpWeb(i.url)">
            <image class="m-image" resize="cover" :src="i.image"></image>
            <div class="m-t">
                <text class="m-title">{{i.name}}</text>
                <text class="m-sub">{{i.subName}}</text>
            </div>
            <text class="m-msgs">{{i.msgs}}</text>
            <text class="m-arrow iconfont">&#xe600;</text>
        </div>
    </div>
</template>
<script>
    import {MSG} from './config'

    export default {

        created() {
            this.init()
        },
        data(){
           msg:[]
        },
        methods: {
            init() {
                this.getMsg()
            },
            getMsg() {
                this.msg = MSG
            },
            jumpWeb(url) {
                if (!url) return;
                this.$router.toWebView({
                    url: url,
                    title: '',
                    navShow: true,
                })
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background-color: #F2F2F3;
        width: 750px;
    }

    .iconfont {
        font-family: iconfont;
    }

    .m-container {
        margin-top: 15px;
        padding: 20px;
        height: 98px;
        background-color: #fff;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
    }
    .m-msgs {
        position: absolute;
        font-size: 14px;
        right: 55px;
        color: #ffffff;
        background-color: #b4282d;
        padding: 5px;
        border-radius: 130px;
        margin-top: 18px;
        overflow: hidden;
    }
    .m-arrow {
        position: absolute;
        top: 34px;
        right: 30px;
        color: #777777;
    }

    .m-image {
        position: absolute;
        left: 30px;
        height: 60px;
        width: 60px;
        align-items: center;
    }

    .m-t {
        align-content: flex-start;
        flex: 1;
        margin-left: 80px;
    }

    .m-title {
        font-size: 28px;
        color: #000000;
    }

    .m-sub {
        font-size: 20px;
        color: #777;
    }
</style>

