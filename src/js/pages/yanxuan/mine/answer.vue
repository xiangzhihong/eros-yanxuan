

<template>
    <div class="app bg-color">
        <!--<div class="header bg-fff a-right">-->
            <!--<div class="h44 flex l-center a-center c-fff pr">-->
                <!--<div class="h-left a-center l-center" @click="goBack">-->
                    <!--<text class="iconfont f20 c-main">&#xe606;</text>-->
                <!--</div>-->
                <!--<text class="header-title f18 c-blue bold">我的问答</text>-->
            <!--</div>-->
        <!--</div>-->
        <list>
            <header>
                <div class="navtab flex l-center a-center bg-fff border-t border-b pr">
                    <div class="nt-item flex-column l-center a-center pr" @click="changeNav(1)">
                        <text class="f16 " :class="[navtype===1?'c-blue':'c-333']">已回答</text>
                        <div class="nt-line" v-if="navtype === 1"></div>
                    </div>
                    <div class="nt-item flex-column l-center a-center pr" @click="changeNav(2)">
                        <text class="f16 " :class="[navtype===2?'c-blue':'c-333']">未回答</text>
                        <div class="nt-line" v-if="navtype === 2"></div>
                    </div>
                    <div class="nt-item flex-column l-center a-center pr" @click="changeNav(3)">
                        <text class="f16 " :class="[navtype===3?'c-blue':'c-333']">已拒绝</text>
                        <div class="nt-line" v-if="navtype === 3"></div>
                    </div>
                </div>
            </header>
            <cell>
                <div class="box plr10 pt10 bg-fff mb10">
                    <div>
                        <text class="f12 c-vice ">7月25日 晚上 19:00-21:00</text>
                        <div class="flex l-start ptb10">
                            <div class="label l-center a-center mt5 mr10">
                                <text class="f14  c-fff">问</text>
                            </div>
                            <div class="flex1">
                                <text class="c-main f16  lh-24">在实际操作中，很多人并不喜欢用指标，应为在卖点把握上，指标相对于K线图，有一定的滞后性，但是指标一般能先于K线图发出？</text>
                            </div>
                        </div>
                    </div>
                    <div class="box-info flex plr10 ptb10 bg-color">
                        <image class="box-info-img mr10" src="https://img5.duitang.com/uploads/item/201409/26/20140926190238_sdZHL.thumb.700_0.jpeg"></image>
                        <div class="flex1">
                            <div class="mb5">
                                <text class="f16 c-333 ">张老师</text>
                            </div>
                            <div class="mb10">
                                <text class="f12 c-vice ">浙江大学计算机学院教授</text>
                            </div>
                            <text class="f12 c-vice ">20人赞 30人观看</text>
                        </div>
                        <div class="a-left">
                            <text class="f14 c-main ">已回答</text>
                        </div>
                    </div>
                    <div class="box-info-answer" v-if="false">
                        <div class="flex l-start plr10 ptb10 bg-color border-t">
                            <div class="label l-center a-center mt5 mr10">
                                <text class="f14  c-fff">答</text>
                            </div>
                            <div class="flex1">
                                <text class="c-main f16  lh-24"> 大鹏老师打造了 “大鹏教你玩数据”等多门数据分析网红课程，付费学员人数超过7000人，创立了 “数据团学社”、 “城市数据研习社”等数据学习社群， 运营有“面向规划实践的数据能力综合应用课程”“数据达人培养计划等课程。</text>
                            </div>
                        </div>
                        <div class="l-end">
                            <div class="btn-assess mt10 a-center l-center">
                                <text class="f14 c-fff ">立即评价</text>
                            </div>
                        </div>
                    </div>
                    <div class="icon-more l-center a-center">
                        <text class="iconfont f14  c-main">&#xe673;</text>
                    </div>
                </div>
            </cell>
            <cell>
                <div class="box plr10 pt10 bg-fff mb10">
                    <div>
                        <text class="f12 c-vice ">7月25日 晚上 19:00-21:00</text>
                        <div class="flex l-start ptb10">
                            <div class="label l-center a-center mt5 mr10">
                                <text class="f14  c-fff">问</text>
                            </div>
                            <div class="flex1">
                                <text class="c-main f16  lh-24">在实际操作中，很多人并不喜欢用指标，应为在卖点把握上，指标相对于K线图，有一定的滞后性，但是指标一般能先于K线图发出？</text>
                            </div>
                        </div>
                    </div>
                    <div class="box-info flex plr10 ptb10 bg-color">
                        <image class="box-info-img mr10" src="https://img5.duitang.com/uploads/item/201409/26/20140926190238_sdZHL.thumb.700_0.jpeg"></image>
                        <div class="flex1">
                            <div class="mb5">
                                <text class="f16 c-333 ">张老师</text>
                            </div>
                            <div class="mb10">
                                <text class="f12 c-vice ">浙江大学计算机学院教授</text>
                            </div>
                            <text class="f12 c-vice ">20人赞 30人观看</text>
                        </div>
                        <div class="a-left">
                            <text class="f14 c-main ">已回答</text>
                        </div>
                    </div>
                    <div class="box-info-answer" v-if="true">
                        <div class="flex l-start plr10 ptb10 bg-color border-t">
                            <div class="label l-center a-center mt5 mr10">
                                <text class="f14  c-fff">答</text>
                            </div>
                            <div class="flex1">
                                <text class="c-main f16  lh-24"> 大鹏老师打造了 “大鹏教你玩数据”等多门数据分析网红课程，付费学员人数超过7000人，创立了 “数据团学社”、 “城市数据研习社”等数据学习社群， 运营有“面向规划实践的数据能力综合应用课程”“数据达人培养计划等课程。</text>
                            </div>
                        </div>
                        <div class="l-end">
                            <div class="btn-assess mt10 a-center l-center">
                                <text class="f14 c-fff ">立即评价</text>
                            </div>
                        </div>
                    </div>
                    <div class="icon-more l-center a-center">
                        <text class="iconfont f14  c-main">&#xe673;</text>
                    </div>
                </div>
            </cell>
        </list>
        <div class="mask l-center a-center" v-if="showMask">
            <div class="mask-dialog l-center pt15">
                <div class="stargroup mb5 flex">
                    <div class="mr5"><text class="iconfont f20 star-on">&#xec1e;</text></div>
                    <div class="mr5"><text class="iconfont f20 star-on">&#xec1e;</text></div>
                    <div class="mr5"><text class="iconfont f20 star-on">&#xec1e;</text></div>
                    <div class="mr5"><text class="iconfont f20 star-on">&#xec1e;</text></div>
                    <div><text class="iconfont f20  star-off">&#xec1e;</text></div>
                </div>
                <div class="grade flex a-between mb15">
                    <text class="f14 c-main">差</text>
                    <text class="f14 c-main">一般</text>
                    <text class="f14 c-main">很好</text>
                </div>
                <textarea class="textarea c-main f14 bg-fff" rows="5" placeholder="发布留言" :value="message" @input="oninput"></textarea>
                <div class="mask-btngroup flex border-t mt15">
                    <div class="flex1 mask-btngroup-item a-center l-center border-r">
                        <text class="f16 c-blue">取消</text>
                    </div>
                    <div class="flex1 mask-btngroup-item a-center l-center">
                        <text class="f16 c-blue bold">确认</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                navtype: 1,
                message: '',
                showMask: false
            }
        },
        created() {
            this.initIconFont()
        },
        methods: {
            goBack() { },
            oninput(e) {
                this.message = e.value
            },
            changeNav(idx) {
                this.navtype = idx
            },
            initIconFont() {
                let domModule = weex.requireModule('dom')
                domModule.addRule('fontFace', {
                    'fontFamily': 'iconfont',
                    'src': "url('http://at.alicdn.com/t/font_1028673_vs1slhfmpy.ttf')"
                })
            }
        }
    }
</script>
<style scoped>
    /*------------ header------------ */
    .header {
        width: 750px;
    }
    .h44 {
        height: 88px;
    }
    .h-left {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 88px;
        height: 88px;
    }
    .text-right {
        position: absolute;
        right: 30px;
        top: 27px;
    }
    .text-left {
        position: absolute;
        left: 30px;
        top: 24px;
        right: initial;
    }
    .header-right {
        position: absolute;
        top: 30px;
        right: 30px;
    }

    /*------------ page------------  */
    .navtab {
        width: 750px;
    }
    .nt-item {
        width: 250px;
        height: 88px;
    }
    .nt-line {
        position: absolute;
        height: 4px;
        width: 100px;
        bottom: 0;
        left: 125px;
        transform: translateX(-50px);
        background-color: #419dfb;
    }
    .label {
        width: 50px;
        height: 50px;
        background-color: #419dfb;
        border-radius: 4px;
    }
    .lh-24 {
        line-height: 48px;
    }
    .box-info-img {
        width: 68px;
        height: 68px;
        border-radius: 60px;
    }
    .icon-more {
        height: 60px;
    }
    .btn-assess {
        width: 200px;
        height: 80px;
        border-radius: 10px;
        background-color: #419dfb;
    }

    .mask {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 999;
    }
    .mask-dialog {
        width: 540px;
        border-radius: 28px;
        background-color: #eeeeee;
    }
    .grade {
        width: 230px;
    }
    .star-on {
        color: #ffd900;
    }
    .star-off {
        color: #cfd9e6;
    }
    .textarea {
        width: 480px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        placeholder-color: #a4b6cc;
    }
    .mask-btngroup {
        width: 540px;
        height: 88px;
    }
    .mask-btngroup-item {
        height: 88px;
    }

    /*------------ common------------ */
    .c-fff {
        color: #ffffff;
    }

    .c-333 {
        color: #172e4d;
    }

    .c-666 {
        color: #666666;
    }

    .c-999 {
        color: #999999;
    }

    .c-green {
        color: #1bc34a;
    }

    .c-yellow {
        color: #ffef69;
    }

    .c-orange {
        color: #ff8f3d;
    }

    .c-red {
        color: #ff4444;
    }

    .c-blue {
        color: #419dfb;
    }

    .c-main {
        color: #5c7799;
    }

    .c-vice {
        color: #a4b6cc;
    }

    .bg-color {
        background-color: #f5f7fa;
    }

    .bg-fff {
        background-color: #fff;
    }

    .bg-main {
        background-color: #625ef9;
    }

    .bg-warning {
        background-color: #ffefd6;
    }

    .pf {
        position: fixed;
    }

    .pr {
        position: relative;
    }

    .pb {
        position: absolute;
    }

    .mo-spacing {
        height: 20px;
    }

    .ta-c {
        text-align: center;
    }

    .ta-l {
        text-align: left;
    }

    .ta-r {
        text-align: right;
    }

    .flex {
        flex-direction: row;
    }

    .flex1 {
        flex: 1;
    }

    .flex2 {
        flex: 2;
    }

    .flex3 {
        flex: 3;
    }

    .flex4 {
        flex: 4;
    }

    .flex5 {
        flex: 5;
    }

    .flex-wrap {
        flex-wrap: wrap;
    }

    .l-start {
        align-items: flex-start;
    }

    .l-center {
        align-items: center;
    }

    .l-end {
        align-items: flex-end;
    }

    .a-center {
        justify-content: center;
    }

    .a-left {
        justify-content: flex-start;
    }

    .a-right {
        justify-content: flex-end;
    }

    .a-between {
        justify-content: space-between;
    }

    .f10 {
        font-size: 20px;
    }

    .f12 {
        font-size: 24px;
    }

    .f14 {
        font-size: 28px;
    }

    .f16 {
        font-size: 32px;
    }

    .f18 {
        font-size: 36px;
    }

    .f20 {
        font-size: 40px;
    }

    .bold {
        font-weight: bold;
    }

    .ta-l {
        text-align: left;
    }

    .ta-c {
        text-align: center;
    }

    .ta-r {
        text-align: right;
    }

    /* 常用 margin */
    .mt5 {
        margin-top: 10px;
    }
    .mb5 {
        margin-bottom: 10px;
    }
    .ml5 {
        margin-left: 10px;
    }
    .mr5 {
        margin-right: 10px;
    }

    .mt10 {
        margin-top: 20px;
    }
    .mb10 {
        margin-bottom: 20px;
    }
    .ml10 {
        margin-left: 20px;
    }
    .mr10 {
        margin-right: 20px;
    }

    .mt15 {
        margin-top: 30px;
    }
    .mb15 {
        margin-bottom: 30px;
    }
    .ml15 {
        margin-left: 30px;
    }
    .mr15 {
        margin-right: 30px;
    }

    .mt20 {
        margin-top: 40px;
    }
    .mr20 {
        margin-right: 40px;
    }
    .ml20 {
        margin-left: 40px;
    }
    .mb20 {
        margin-bottom: 40px;
    }

    .mt25 {
        margin-top: 50px;
    }
    .mb25 {
        margin-bottom: 50px;
    }
    .ml25 {
        margin-left: 50px;
    }
    .mt25 {
        margin-right: 50px;
    }

    .mt30 {
        margin-top: 60px;
    }
    .mb30 {
        margin-bottom: 60px;
    }
    .mll0 {
        margin-left: 60px;
    }
    .mr30 {
        margin-right: 60px;
    }

    .mtb10 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .mlr10 {
        margin-left: 20px;
        margin-right: 20px;
    }

    .mlr15 {
        margin-left: 30px;
        margin-right: 30px;
    }
    .mtb15 {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .mlr20 {
        margin-left: 40px;
        margin-right: 40px;
    }
    .mtb20 {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    /* 常用 padding */
    .pt5 {
        padding-top: 10px;
    }
    .pb5 {
        padding-bottom: 10px;
    }
    .pl5 {
        padding-left: 10px;
    }
    .pr5 {
        padding-right: 10px;
    }

    .pt10 {
        padding-top: 20px;
    }
    .pb10 {
        padding-bottom: 20px;
    }
    .pl10 {
        padding-left: 20px;
    }
    .pr10 {
        padding-right: 20px;
    }

    .pt15 {
        padding-top: 30px;
    }
    .pb15 {
        padding-bottom: 30px;
    }
    .pl15 {
        padding-left: 30px;
    }
    .pr15 {
        padding-right: 30px;
    }

    .pt20 {
        padding-top: 40px;
    }
    .pb20 {
        padding-bottom: 40px;
    }
    .pl20 {
        padding-left: 40px;
    }
    .pr20 {
        padding-right: 40px;
    }

    .pt25 {
        padding-top: 50px;
    }
    .pb25 {
        padding-bottom: 50px;
    }
    .pl25 {
        padding-left: 50px;
    }
    .pr25 {
        padding-right: 50px;
    }

    .pt30 {
        padding-top: 60px;
    }
    .pb30 {
        padding-bottom: 60px;
    }
    .pl30 {
        padding-left: 60px;
    }
    .pr30 {
        padding-right: 60px;
    }

    .ptb10 {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .plr10 {
        padding-left: 20px;
        padding-right: 20px;
    }

    .plr15 {
        padding-left: 30px;
        padding-right: 30px;
    }
    .ptb15 {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .plr20 {
        padding-left: 40px;
        padding-right: 40px;
    }
    .ptb20 {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .radius-50 {
        border-radius: 100px;
    }

    .radius-5 {
        border-radius: 10px;
    }

    .border-line {
        border-width: 1px;
        border-color: #cfd9e6;
    }

    .border-t {
        border-top-width: 1px;
        border-top-color: #cfd9e6;
    }

    .border-b {
        border-bottom-width: 1px;
        border-bottom-color: #cfd9e6;
    }

    .border-r {
        border-right-width: 1px;
        border-right-color: #cfd9e6;
    }

    .border-l {
        border-left-width: 1px;
        border-left-color: #cfd9e6;
    }

    .line-10 {
        width: 750px;
        height: 20px;
        background-color: #f7f7f7;
    }

    .iconfont {
        font-family: iconfont;
    }

    .has-header {
        margin-top: 100px;
    }

    .has-childHeader {
        margin-top: 200px;
    }

    .has-footer {
        margin-bottom: 100px;
    }

    .w-full {
        width: 750px;
    }

    .overflow-line-1 {
        lines: 1;
    }

    .overflow-line-2 {
        lines: 2;
    }

    .overflow-line-3 {
        lines: 3;
    }

    input {
        border: 0;
        outline: none;
    }

    .h50 {
        height: 100px;
    }
    .w-full {
        width: 750px;
    }
</style>
