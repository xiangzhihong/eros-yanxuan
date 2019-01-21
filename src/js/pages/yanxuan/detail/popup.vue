<template>
    <div class="wxc-demo">
        <wxc-popup :have-overlay="isShow"
                   popup-color="#ffffff"
                   :show="isBottomShow"
                   @wxcPopupOverlayClicked="popupClick"
                   pos="bottom"
                   height="500">
            <div class="p-t-box" @click="popupClick()">
                <text class="p-t-t">服务</text>
                <image class="p-close" resize="contain" src="bmlocal://assets/popup_close_ic.png"></image>
            </div>

            <scroller class="scroller">
                <div class="p-content">
                    <div class="p-box">
                        <text class="p-p">.</text>
                        <text class="p-t">支持7天无理由退款</text>
                    </div>
                    <text class="p-des">食品、贴身衣物、积分兑换等特殊商品，无质量问题不支持退换货。</text>

                    <div class="p-box">
                        <text class="p-p">.</text>
                        <text class="p-t">48小时快速退款</text>
                    </div>
                    <text class="p-des">收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账。</text>

                    <div class="p-box">
                        <text class="p-p">.</text>
                        <text class="p-t">网易自营品牌</text>
                    </div>
                    <text class="p-des">网易原创生活类电商品牌，所有商品均为网易自营，品质保证。</text>
                </div>
            </scroller>
        </wxc-popup>
    </div>
</template>

<script>
    import {WxcPopup} from 'weex-ui';

    export default {
        components: {WxcPopup},

        props: ["isShow"],

        data: () => ({
            isBottomShow: true,
            isShow: false,
            height: 400
        }),
        created() {

        },
        methods: {
            popupClick() {
                this.isBottomShow = false;
            },
            onHideClick() {
                this.$refs.wxcPopup.hide();
            }
        }
    };
</script>

<style scoped>
    .wxc-demo {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.5;
        background-color: #FFFFFF;
    }
    .scroller {
        flex: 1;
    }
    .p-t-box {
        background-color: #fff;
        width: 750px;
        height: 80px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .p-t-t {
        font-size: 38px;
        color: #000000;
        text-align: center;
    }

    .p-content {
        padding: 30px;
    }

    .p-close {
        position: absolute;
        right: 30px;
        height: 85px;
        width: 85px;
        align-self: center;
    }

    .p-box {
        background-color: #fff;
        width: 750px;
        height: 40px;
        align-items: center;
        flex-direction: row;
    }

    .p-p {
        font-size: 32px;
        color: #b4282d;
        border-radius: 130px;
    }

    .p-t {
        font-size: 32px;
        color: #000000;
        margin-left: 5px;
    }

    .p-des {
        font-size: 28px;
        color: #777777;
        margin-top: 5px;
    }
</style>
