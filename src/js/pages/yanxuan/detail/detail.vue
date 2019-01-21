<template>
    <div class="wrapper">
        <scroller class="main-list" :style="{'height':screenHeight}">
            <video class="video" src="http://yanxuan.nosdn.127.net/0c5fbabf8752dfc8cb7aba025489708d.mp4"></video>

            <div class="d-tags">
                <div class="d-c">
                    <image class="d-tag-image" resize="contain" src="bmlocal://assets/detail-tag-1.png"></image>
                    <div class="d-c-c">
                        <text class="d-tag-txt">严选原料</text>
                        <text class="d-tag-txt">品质保证</text>
                    </div>
                </div>

                <div class="d-c">
                    <image class="d-tag-image" resize="contain" src="bmlocal://assets/detail-tag-2.png"></image>
                    <div class="d-c-c">
                        <text class="d-tag-txt">9种口味</text>
                        <text class="d-tag-txt">咸甜有味</text>
                    </div>
                </div>

                <div class="d-c">
                    <image class="d-tag-image" resize="contain" src="bmlocal://assets/detail-tag-3.png"></image>
                    <div class="d-c-c">
                        <text class="d-tag-txt">精致之选</text>
                        <text class="d-tag-txt">礼赠亲友</text>
                    </div>
                </div>
            </div>

            <div class="d-price">
                <div class="d-p-c">
                    <text class="d-p-txt">¥149</text>
                    <text class="d-o-txt">¥109</text>
                    <text class="d-o-p">购买可获得14积分</text>
                </div>
                <div class="d-tag-c">
                    <text class="d-o-p-tag">年货节特卖 ></text>
                </div>
            </div>

            <div class="d-desc">
                <div class="d-desc-c">
                    <text class="d-desc-name">糕饼礼盒 1.15kg</text>
                    <text class="d-desc-sub">严选精致礼盒，盛情礼赠，不容错过</text>
                </div>

                <div class="d-desc-r">
                    <text class="d-desc-r-txt">100%</text>
                    <text class="d-desc-sub">好评率</text>
                </div>
            </div>

            <div class="d-sidy">
                <text class="d-sidy-name">领津贴 每满300元减15元</text>
                <text class="d-sidy-tag">去领取</text>
            </div>

            <div class="d-box border-bottom" :style="{'margin-top': 15+'px'}">
                <text class="d-txt-a">已结</text>
                <text class="d-txt">2019春节限定款</text>
                <text class="i-box-in iconfont">&#xe600;</text>
            </div>
            <div class="d-box border-bottom">
                <text class="d-txt-a">限制</text>
                <text class="d-txt">特价商品优惠券不能叠加</text>
            </div>
            <div class="d-box">
                <text class="d-txt-a">配送</text>
                <text class="d-txt">上海市徐家汇区枫林路110号</text>
                <text class="i-box-in iconfont">&#xe600;</text>
            </div>

            <div class="d-box-p">
                <div class="d-s-box">
                    <div class="d-p-box">
                        <text class="d-s-p">.</text>
                        <text class="d-s-gray">支持7天无理由退款</text>
                    </div>
                    <div class="d-p-box">
                        <text class="d-s-p">.</text>
                        <text class="d-s-gray">满88免费包邮</text>
                    </div>
                </div>
                <text class="i-box-in iconfont">&#xe600;</text>
            </div>


            <image class="d-image" resize="cover" src="bmlocal://assets/detail-ad.png"></image>

            <div class="d-box" :style="{'margin-top': 15+'px'}">
                <text class="d-txt">用户评价(1000)</text>
                <text class="p-p-rate">99.99%</text>
                <text class="p-p-rate-txt">好评率</text>
                <text class="i-box-in iconfont">&#xe600;</text>
            </div>
            <div class="d-box">
                <image class="d-rate-image" resize="contain" src="bmlocal://assets/detail-tag-2.png"></image>
                <text class="d-star-txt">1300****110</text>
            </div>
            <!--<score class="d-star" starNum="5" defaultRating="2"></score>-->
            <web class="web-style" src="https://m.you.163.com/webview/itemDetail.html?id=3436022"></web>

        </scroller>
        <bottom></bottom>
        <!--<popup></popup>-->
    </div>
</template>
<script>
    import score from '../components/scroe'
    import bottom from '../detail/bottom'
    import popup from '../detail/popup'

    export default {
        components: {
            'score': score,
            'bottom': bottom,
            'popup': popup,
        },
        mounted() {
        },
        created() {
            this.getConfig()
        },
        data() {
            return {}
        },
        methods: {
            getConfig() {
                this.screenHeight = this.$getConfig().env.deviceHeight;
            },
            jumpWeb(url) {
                this.$router.toWebView({
                    url: url,
                    title: '活动',
                    navShow: true,
                })
            },
        }
    }
</script>

<style lang="sass" src="./detail.scss"></style>
