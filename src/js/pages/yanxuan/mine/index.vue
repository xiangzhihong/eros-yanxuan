<template>
    <div class="wrapper">
        <div class="status-bar" :style="{'height': statusHeight}"></div>
        <scroller class="main-list" :style="{'height':screenHeight}">
        <div class="header" @click="jumpPerson()">
            <div class="header-bg"></div>
            <image class="i-photo" resize="cover" src="https://avatar.csdn.net/E/D/2/3_xiangzhihong8.jpg"></image>
            <text class="i-name">大笨钟</text>
            <div class="m-sign">
                <text class="txt-tag">每日签到 ></text>
            </div>
            <image class="b-qrcode" resize="cover" src="bmlocal://assets/profile_qr_code_ic.png"></image>
            <div class="d-vip">
                <image class="i-gift" resize="contain" src="bmlocal://assets/profile_topgift_ic.png"></image>
                <text class="d-vip-txt">超级会员</text>
            </div>
        </div>

        <div class="s-box cell-button" @click="jumpOrder()">
            <div class="box-tlt border-bottom">
                <text class="box-txt">我的订单</text>
                <text class="i-box-in iconfont">&#xe600;</text>
            </div>
            <div class="box-line">
                <div class="i-box-l">
                    <text class="i-box-icon iconfont">&#xe673;</text>
                    <text class="i-box-tlt">待付款</text>
                </div>
                <div class="i-box-l">
                    <text class="i-box-icon iconfont">&#xe675;</text>
                    <text class="i-box-tlt">待发货</text>
                </div>
                <div class="i-box-l">
                    <text class="i-box-icon iconfont">&#xe671;</text>
                    <text class="i-box-tlt">已发货</text>
                </div>
                <div class="i-box-l">
                    <text class="i-box-icon iconfont">&#xe672;</text>
                    <text class="i-box-tlt">待评价</text>
                </div>
                <div class="i-box-l">
                    <text class="i-box-icon iconfont">&#xe6ac;</text>
                    <text class="i-box-tlt">退换/售后</text>
                </div>
            </div>
        </div>

        <div class="s-box cell-button">
            <div class="box-tlt border-bottom">
                <text class="box-txt">网易严选合伙人</text>
                <text class="i-box-in iconfont">&#xe600;</text>
            </div>
            <div class="partner" @click="jumpWeb('https://act.you.163.com/act/pub/sRu9Cnnvqm.html')">
                <image class="partner-image" resize="cover" src="bmlocal://assets/partner_ic.png"></image>
            </div>
        </div>

        <div class="s-box">
            <div class="box-tlt border-bottom">
                <text class="box-txt">我的服务</text>
            </div>
            <div class="box-line line-serve" :class="[index < (serviceLength - 1) ? 'border-bottom' : '']" v-for="(item,index) in serviceLength">
                <div class="i-box-l">
                    <text class="i-box-icon iconfont" :class="['i-c-'+services[index*4 + 0].color]">{{services[index*4 + 0].icon | myFilter}}</text>
                    <text class="i-box-tlt">{{services[index*4 + 0].name}}</text>
                </div>
                <div class="i-box-l">
                    <text class="i-box-icon iconfont" :class="['i-c-'+services[index*4 + 1].color]">{{services[index*4 + 1].icon | myFilter}}</text>
                    <text class="i-box-tlt">{{services[index*4 + 1].name}}</text>
                </div>
                <div class="i-box-l">
                    <text class="i-box-icon iconfont" :class="['i-c-'+services[index*4 + 2].color]">{{services[index*4 + 2].icon | myFilter}}</text>
                    <text class="i-box-tlt">{{services[index*4 + 2].name}}</text>
                </div>
                <div class="i-box-l">
                    <text class="i-box-icon iconfont" :class="['i-c-'+services[index*4 + 3].color]">{{services[index*4 + 3].icon | myFilter}}</text>
                    <text class="i-box-tlt">{{services[index*4 + 3].name}}</text>
                </div>
            </div>
        </div>

        <recommend class="recommend" :goods="goods"></recommend>
        </scroller>
    </div>
</template>
<script>
import he from '../utils/he';
import recommend from './recommend';
import { SERVICES,RECOMMEND} from './config'

Vue.filter('myFilter', function(value) {
    return he.decode(value);
})

export default {
    components: {
        'recommend': recommend,
    },
    mounted() {
        this.getService()
        this.getRecommend()
    },
    created(){
        this.getConfig()
    },
    data() {
        return {
            services: [],
            serviceLength: 0,
            statusHeight: Number.parseInt(this.statusBarHeight || weex.config.env.statusBarHeight || 40),
            goods: [],
        }
    },
    methods: {
        getConfig(){
            var config = this.$getConfig();
            this.screenHeight = config.env.deviceHeight;
        },
        getRecommend() {
            this.goods = RECOMMEND
        },
        getService() {
            this.services = SERVICES
            this.getLength()
        },
        jumpWeb(url) {
            this.$router.toWebView({
                url: url,
                title: ' ',
                navShow: true,
            })
        },
        jumpPerson() {
            this.$router.open({
                name: 'person'
            })
        },
        jumpOrder() {
            this.$router.open({
                name: 'order'
            })
        },
        getLength() {
            this.serviceLength = Math.ceil(this.services.length / 4)
        },

    }
}
</script>
<style lang="sass" src="./index.scss"></style>
