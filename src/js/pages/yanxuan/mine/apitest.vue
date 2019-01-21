<template>
    <div class="wrapper">
        <div class="l-btn" @click="getData()">
            <text class="l-txt">API请求测试</text>
        </div>

        <text class="l-r">{{result}}</text>
    </div>
</template>
<script>
    var stream = weex.requireModule('stream')
    export default {
        data() {
            return {
                result: '',
            }
        },
        methods: {
            getData() {
                stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'https://api.github.com/repos/vuejs/vue'
                }, res => {
                    if (res.ok) {
                        this.result = JSON.stringify(res.data)
                    } else {
                        this.result = '- unkonwn -'
                    }
                })
            },
        }
    }

</script>

<style scoped>
    .wrapper {
        background-color: #F2F2F3;
        width: 750px;
    }

    .l-btn {
        height: 80px;
        width: 680px;
        margin-top: 50px;
        background-color: #ffffff;
        border-radius: 4px;
        border-color: #B02A2F;
        border-width: 1px;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        align-self: center;
        text-align: center;
        align-content: center;
    }

    .l-txt {
        color: #B02A2F;
        font-size: 38px;
        padding: 5px;
        text-align: center;
    }

    .l-r {
        font-size: 24px;
        padding: 20px;
    }
</style>
