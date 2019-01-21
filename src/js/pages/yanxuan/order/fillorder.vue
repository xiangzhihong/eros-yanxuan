<template>
    <div class="wrapper">
        <scroller class="main-list" :style="{'height':screenHeight}">
            <div class="n-c">
                <image class="n-c-i" resize="contain" src="bmlocal://assets/notice_ic.png"></image>
                <text class="n-c-t">春节期间大件物品暂停物流服务</text>
            </div>

            <image class="a-l" resize="stretch" src="bmlocal://assets/address_envelope_bg.png"></image>

            <div class="a-c">
                <div class="a-c-l">
                    <text class="o-t">大笨种</text>
                    <text class="a-d-t">默认</text>
                </div>
                <div class="a-c-c">
                    <text class="o-t">1500****221</text>
                    <text class="o-t-a">上海市徐家汇区枫林路110号</text>
                </div>
                <text class="o-a-r iconfont">&#xe600;</text>
            </div>

            <div class="o-c" :style="{'margin-top': '15px'}">
                <text class="o-c-t">优惠券（暂无可用）</text>
                <text class="o-a-t">4张</text>
                <text class="o-a-r iconfont">&#xe600;</text>
            </div>
            <div class="line"></div>
            <div class="o-c" >
                <checkbox class="o-check" :has-bottom-border="false"></checkbox>
                <text class="o-a-g">礼品卡余额</text>
                <text class="o-a-r iconfont">&#xe600;</text>
            </div>
            <div class="line"></div>
            <div class="o-c" >
                <checkbox class="o-check" :has-bottom-border="false"></checkbox>
                <text class="o-a-g">可使用津贴¥1.00</text>
                <text class="o-a-t">余额¥1.00</text>
            </div>


            <div class="o-c" :style="{'margin-top': '15px'}">
                <text class="o-c-t">商品价格</text>
                <text class="o-a-t">¥100.00</text>
            </div>
            <div class="o-c">
                <text class="o-c-t">运费</text>
                <text class="o-a-t">¥10.00</text>
            </div>

            <div class="o-c-c">
                <image class="o-i-i" resize="contain" src="bmlocal://assets/item_order.png"></image>
                <div class="o-c-center">
                    <text class="o-t-t">日本制造巧克力 45g</text>
                    <text class="o-a-g">15.9元</text>
                </div>
                <div class="s-c">
                    <text class="o-t-n">包裹  x1</text>
                </div>
            </div>

            <div class="o-p-c" >
                <checkbox class="o-check-g" :has-bottom-border="false"></checkbox>
                <text class="o-a-g">我已同意《网易严选服务协议》</text>
            </div>
        </scroller>
        <paybar></paybar>
    </div>
</template>
<script>
    import { WxcCheckbox } from 'weex-ui'
    import paybar from './paybar'

    export default {
        components: {
            'paybar': paybar,
            'checkbox':WxcCheckbox,
        },
    }
</script>

<style lang="sass" src="./fillorder.scss"></style>
