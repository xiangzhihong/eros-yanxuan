<template>
    <div class="bottom-c">
        <div class="d-image-c">
            <div class="d-c">
            <image class="d-image" resize="contain" src="bmlocal://assets/detail_service.png"></image>
            </div>
            <div class="d-c">
                <image class="d-image" resize="contain" src="bmlocal://assets/detail_shopping_cart.png"></image>
            </div>
            <div class="d-c">
                <image class="d-image" resize="contain" src="bmlocal://assets/detail_star.png"></image>
            </div>
        </div>

        <div class="d-btn-b" @click="jumpBuy()">
            <text class="d-txt-b">立即购买</text>
        </div>

        <div class="d-btn-c" @click="jumpBuy()">
            <text class="d-txt">加入购物车</text>
        </div>

    </div>
</template>
<script>
export default {
    methods: {
        jumpBuy() {
            this.$router.open({
                name: 'fillorder'
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
.d-image-c {
    height: 95px;
    min-width: 350px;
    flex-direction:row;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.d-c {
    height: 95px;
    width: 100%;
    flex-direction:row;
    justify-content: center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}

.d-image {
    height: 50px;
    width: 50px;
    align-self: center;
    background-color: #ffffff;
}

.d-btn-b {
    height: 95px;
    width: 200px;
    background-color: #fff;
    justify-content: center;
}

.d-txt-b {
    font-size: 32px;
    color: #777;
    text-align: center;
}

.d-btn-c {
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
