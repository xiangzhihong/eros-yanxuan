<template>
    <div class="bottom-c">
        <div class="p-b-c">
            <text class="p-b-t">应付：¥100.00</text>
        </div>

        <div class="p-btn-c" @click="jumpPay()">
            <text class="d-txt">去付款</text>
        </div>

    </div>
</template>
<script>
export default {
    methods: {
        jumpPay() {
            this.$router.open({
                name: 'order'
            })
        },
        jumpWeb(url) {
            if (!url) url = 'http://m.you.163.com/search';
            this.$router.toWebView({
                url: url,
                title: '搜索商品',
            })
        }
    }
}
</script>
<style scoped>
.iconfont {
    font-family: iconfont;
}
.bottom-c {
    height: 95px;
    width: 750px;
    display: flex;
    flex-direction: row;
}
.p-b-c {
    height: 95px;
    min-width: 550px;
    background-color: #fff;
    justify-content: center;
}


.p-b-t {
    font-size: 32px;
    margin-left: 30px;
    color: #B02A2F;
    align-items: center;
}

.p-btn-c {
    height: 95px;
    flex: 1;
    background-color: #B02A2F;
    justify-content: center;
}

.d-txt {
    font-size: 32px;
    color: #fff;
    text-align: center;
}
</style>
