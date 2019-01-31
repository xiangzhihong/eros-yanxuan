<template>
    <div class="wrapper">
        <div class="status-bar" style="background-color:#fafafa;" :style="{'height': statusHeight}"></div>
        <home-header></home-header>
        <scroller class="main-list" offset-accuracy="300px">
            <refresher @loadingDown="loadingDown"></refresher>
            <div class="cell-button">
                <banner></banner>
                <div class="slogan">
                    <text class="i-slg iconfont">&#xe63a; 网易自营品牌</text>
                    <text class="i-slg iconfont">&#xe63a; 30天无忧退货</text>
                    <text class="i-slg iconfont">&#xe63a; 48小时快速退款</text>
                </div>
            </div>
            <div class="cell-button">
                <block-1 :title="block1.title" :items="block1.items" :url="block1.url"></block-1>
            </div>
            <div class="cell-button">
                <block-2 hasMore=true newGoods=true :head="head1" :goods="goods1"></block-2>
            </div>
            <div class="cell-button">
                <block-2 hasMore=true hotGoods=true :head="head2" :goods="goods2"></block-2>
            </div>
            <div class="cell-button">
                <block-3 :goods="goods3"></block-3>
            </div>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">加载中...</text>
            </loading>
        </scroller>

        <div class="d-sign" @click="jumpLogin()">
            <image class="i-sign-image" resize="center" src="bmlocal://assets/home_ic_sign.png"></image>
            <text class="i-sign-txt">签到</text>
        </div>
        <image class="i-gift" resize="contain" src="bmlocal://assets/gift_ic.png"
               @click="jumpWeb('http://m.you.163.com/gift/newWapUserGift')"></image>
        <!--<mask></mask>-->
        <!-- <bmmask animation="center" position="center" class="mask" :duration="300" ref="channel" disableMaskEvent="true"> -->
        <channel @change="onchange" ref="topChannel" :activeIndex="activeIndex"></channel>
        <!-- </bmmask> -->

        <div class="mask" v-if="showMask">
            <wxc-mask height="700"
                      width="560"
                      border-radius="30"
                      duration="300"
                      :has-overlay="true"
                      :show-close="true"
                      :show="show"
                      :has-animation="hasAnimation"
                      @wxcMaskSetHidden="wxcMaskSetHidden">
                <div>
                    <image class="mask-image" resize="cover" src="bmlocal://assets/home_mask.png"></image>
                </div>
            </wxc-mask>
        </div>
    </div>
</template>
<script>
    import header from './header';
    import refresher from '../components/refresh';
    import topChannel from './topChannel';
    import banner from './banner';
    import block1 from './block1';
    import block2 from './block2';
    import block3 from './block3';
    import {BLOCK1, GOODS1, GOODS2, GOODS3} from './config'
    import {WxcMask} from 'weex-ui';

    export default {
        components: {
            'home-header': header,
            'refresher': refresher,
            'channel': topChannel,
            'banner': banner,
            'block-1': block1,
            'block-2': block2,
            'block-3': block3,
            'wxc-mask': WxcMask
        },
        created() {
            this.init()
        },
        data() {
            return {
                showMask: true,
                show: true,
                block1: {
                    title: '',
                    url: '',
                    items: []
                },
                head1: {
                    tlt: '周一周四 · 新品发布',
                    tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-new.png',
                    url: 'http://m.you.163.com/item/newItem'
                },
                head2: {
                    tlt: '人气推荐 · 好物精选',
                    tltBg: 'http://doc.zwwill.com/yanxuan/imgs/bg-hot.png',
                    url: 'http://m.you.163.com/item/recommend'
                },
                goods1: [],
                goods2: [],
                goods3: [],
                showLoading: 'hide',
                activeIndex: 0,
                statusHeight: Number.parseInt(this.statusBarHeight || weex.config.env.statusBarHeight || 40)
            }
        },
        methods: {
            init() {
                this.getBlock1()
                this.getGoods1()
                this.getGoods2()
                this.getGoods3()
            },
            onloading() {
                this.$notice.loading.show()
                this.showLoading = 'show';
                setTimeout(() => {
                    this.$notice.loading.hide()
                    this.goods3.push(...this.goods1);
                    this.showLoading = 'hide'
                }, 600)
            },
            loadingDown() {
                this.goods3 = [];
                this.goods3.push(...this.goods2);
                this.goods3.push(...this.goods1);
            },
            getBlock1() {
                this.block1.title = BLOCK1.title
                this.block1.url = BLOCK1.url
                this.block1.items = BLOCK1.items
            },
            getGoods1() {
                this.goods1 = GOODS1
            },
            getGoods2() {
                this.goods2 = GOODS2
            },
            getGoods3() {
                this.goods3 = GOODS3
            },
            onchange(index) {
                console.log(index);
            },
            wxcMaskSetHidden() {
                this.show = false;
                this.showMask = false;
            },
            jumpWeb(url) {
                this.$router.toWebView({
                    url: url,
                    title: '领取奖品'
                })
            },
            jumpLogin() {
                this.$router.open({
                    name: 'login'
                })
            },
        }
    }
</script>
<style lang="sass" src="./index.scss"></style>
