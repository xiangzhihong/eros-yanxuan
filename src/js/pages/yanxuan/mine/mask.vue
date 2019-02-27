<template>
    <div>
        <div class="comment-btn" @click="showAd()">
            <text class="comment-text">广告</text>
        </div>

        <div class="comment-btn" @click="showStar()">
            <text class="comment-text">评论</text>
        </div>

        <!--广告弹框-->
        <div class="mask" v-if="show">
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

        <!--评分组件-->
        <div class="mask" v-if="showMask">
            <div class="mask-dialog">
                <div class="star-group">
                    <div class="mr5" @click="setScore(1)"><text class="iconfont f20" :class="[score>0 ?'star-on':'star-off']">&#xec1e;</text></div>
                    <div class="mr5" @click="setScore(2)"><text class="iconfont f20" :class="[score>1?'star-on':'star-off']">&#xec1e;</text></div>
                    <div class="mr5" @click="setScore(3)"><text class="iconfont f20" :class="[score>2?'star-on':'star-off']">&#xec1e;</text></div>
                    <div class="mr5" @click="setScore(4)"><text class="iconfont f20" :class="[score>3?'star-on':'star-off']">&#xec1e;</text></div>
                    <div  @click="setScore(5)"><text class="iconfont f20" :class="[score>4?'star-on':'star-off']">&#xec1e;</text></div>
                </div>
                <div class="grade-box">
                    <text class="grade-txt">差</text>
                    <text class="grade-txt">一般</text>
                    <text class="grade-txt">很好</text>
                </div>
                <textarea class="textarea" rows="5" placeholder="发布留言" v-model="message"></textarea>
                <div class="mask-btngroup">
                    <div class="mask-btngroup-item" @click="cancel()">
                        <text class="mask-item-txt">取消</text>
                    </div>
                    <div class="line"></div>
                    <div class="mask-btngroup-item" @click="confirm()">
                        <text class="mask-item-txt">确认</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {WxcMask} from 'weex-ui';
    let domModule = weex.requireModule('dom')

    export default {
        components: {'wxc-mask': WxcMask},
        data: () => ({
            show: false,
            showMask: false,
            score:5,
            hasAnimation: true
        }),
        methods: {
            created() {
                this.initIconFont();
            },
            initIconFont() {
                domModule.addRule('fontFace', {
                    'fontFamily': 'iconfont',
                    'src': "url('http://at.alicdn.com/t/font_1028673_vs1slhfmpy.ttf')"
                })
            },
            setScore(v){
                if(v===this.score){
                    this.score = v-1;
                }else{
                    this.score = v;
                }
            },
            wxcMaskSetHidden() {
                this.show = false;
            },
            showAd(){
                this.show = true;
            },
            showStar(){
                this.showMask = true;
            },
            cancel(){
                this.showMask = false;
            },
            confirm(){
                this.showMask = false;
            },
        }
    };
</script>

<style scoped>
    .iconfont {
        font-family: iconfont;
    }
    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #e0000000;
    }

    .comment-btn {
        background-color: #419DFB;
        width: 176px;
        height: 60px;
        margin-top: 40px;
        align-self: center;
        justify-content: center;
        border-radius: 8px;
    }

    .comment-text {
        font-size: 28px;
        color: #ffffff;
        text-align: center;
    }

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .4);
        align-items: center;
        justify-content: center;
        flex: 1;
    }
    .mask-image {
        height: 700px;
        width: 560px;
        align-items: center;
        border-radius: 30px;
    }
    .mask-dialog {
        width: 540px;
        border-radius: 28px;
        background-color: #eeeeee;
        align-items: center;
        padding-top: 30px;
    }
    .star-on {
        color: #ffd900;
    }
    .star-off {
        color: #cfd9e6;
    }
    .grade-box {
        width: 230px;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .grade-txt {
        font-size: 28px;
        color: #5c7799;
    }
    .star-group{
        flex-direction: row;
        height: 30px;
        width: 480px;
        margin-bottom:10px;
        justify-content: center;
    }
    .textarea {
        width: 480px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        color: #5c7799;
        placeholder-color: #a4b6cc;
        font-size: 28px;
        background-color: #fff;
    }
    .mask-btngroup {
        width: 540px;
        height: 88px;
        flex-direction: row;
        border-top-width: 1px;
        border-top-color: #cfd9e6;
        margin-top: 30px;
    }
    .mask-btngroup-item {
        height: 88px;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
    }
    .mask-item-txt{
        font-size: 32px;
        color: #419dfb;
    }
    .line {
        height: 88px;
        width: 1px;
        background-color: #cfd9e6;
    }
    .mr5 {
        margin-right: 10px;
    }
    .bold {
        font-weight: bold;
    }

</style>

