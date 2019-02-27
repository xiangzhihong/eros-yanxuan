<template>
    <div class="wrapper">
        <div class="container">
            <text class="txt">意见反馈</text>
            <textarea class="feed-back" placeholder="输入您的建议！"  @change="onchange" @input="oninput"></textarea>
        </div>

        <div class="feed-container" @click="submit()">
            <div class="feed-btn ">
                <text class="txt-w">提交</text>
            </div>
        </div>
    </div>
</template>
<script>

    var modal = weex.requireModule('modal')

    export default {
        mounted() {

        },
        data() {
           return{
               txtInput: '',
               txtChange: '',
           }
        },
        methods: {
            onchange(event) {
                this.txtChange = event.value;
                console.log('onchange', event.value);
            },
            oninput(event) {
                this.txtInput = event.value;
                console.log('oninput', event.value);
            },
            submit() {
                modal.toast({
                    message: this.txtInput,
                    duration: 0.5
                })
            },
        }
    }
</script>
<style>
    .iconfont {
        font-family: iconfont;
    }

    .wrapper {
        background-color: #f4f4f4;
        flex: 1;
    }

    .container {
        background-color: #ffffff;
        padding: 20px;
    }

    .txt {
        flex: 1;
        font-size: 30px;
        color: #5C7799;
    }

    .feed-back {
        height: 200px;
        width: 710px;
        margin-bottom: 50px;
        margin-top: 15px;
        font-size: 26px;
        text-align:start;
        align-items: center;
        placeholder-color: #A4B6CC;
        background-color: #F5F7FA;
        vertical-align: top;
    }

    .feed-container {
        flex: 1;
        justify-content: flex-end;
        padding-bottom: 150px;
    }

    .feed-btn {
        background-color: #fb4141;
        width: 680px;
        height: 90px;
        align-self: center;
        justify-content: center;
        border-radius: 8px;
    }

    .txt-w {
        font-size: 36px;
        color: #ffffff;
        text-align: center;
    }


</style>
