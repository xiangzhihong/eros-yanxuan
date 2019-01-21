<template>
    <div class="wrapper">
        <scroller class="main-list" :style="{'height':screenHeight}">

            <image class="order-line" resize="stretch" src="bmlocal://assets/address_envelope_bg.png"></image>
            <div class="address-box">
                <div class="address-left">
                    <text class="address-t">大笨种</text>
                </div>
                <div class="address-center-box">
                    <text class="address-t">1500****221</text>
                    <text class="address-t-a">上海市徐家汇区枫林路110号</text>
                </div>
                <image class="address-edit-image" src="bmlocal://assets/edit_nor_ic.png"></image>
            </div>

            <div class="order-title-box">
                <text class="order-name">包裹 x1</text>
                <text class="order-state">已支付</text>
            </div>
            <div class="line"></div>
            <div class="order-box">
                <image class="order-i" resize="contain" src="bmlocal://assets/item_order.png"></image>
                <div class="order-item-center">
                    <text class="address-t">日本制造巧克力 45g</text>
                    <text class="address-t-a">15.9元</text>
                </div>
                <div class="order-item-right">
                    <text class="address-t">x1</text>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>

</script>

<style scoped>
    .wrapper {
        background-color: #F2F2F3;
        width: 750px;
    }

    .main-list {
        flex: 1;
    }
    .order-line {
        width: 750px;
        height: 5px;
    }
    .address-box{
        width: 750px;
        height: 140px;
        background-color: #FEFCEA;
        padding: 25px;
        justify-content: center;
        flex-direction: row;
    }
    .address-left {
        width: 120px;
        height: 180px;
    }

    .order-name{
        flex: 1;
        justify-content: start;
        font-size: 28px;
        color: #000000;
    }

    .order-state{
        width: 100px;
        justify-content: center;
        font-size: 28px;
        color: #b4282d;
    }

    .address-t{
        align-items: center;
        font-size: 28px;
        color: #000000;
    }
    .address-center-box {
        flex: 1;
        align-items: start;
        height: 180px;
    }

    .address-t-a{
        align-items: center;
        font-size: 24px;
        margin-top: 8px;
        color: #777777;
    }

    .address-edit-image {
        height: 40px;
        width: 40px;
        justify-content: center;
        align-items: center;
        align-self: center;
        color: #777777;
    }

    .order-title-box {
        width: 750px;
        height: 80px;
        background-color: #fff;
        margin-top: 15px;
        padding: 15px;
        justify-content: center;
        align-items: center;
        flex-direction:row;
    }

    .order-box {
        width: 750px;
        height: 180px;
        background-color: #fff;
        justify-content: center;
        padding: 20px;
        flex-direction:row;
    }

    .order-i {
        height: 140px;
        width: 140px;
        align-self: center;
        justify-content: center;
    }

    .order-item-center {
        flex: 1;
        height: 150px;
        margin-left: 20px;
    }

    .order-item-right {
        width: 150px;
        height: 150px;
        justify-content: center;
    }

    .line {
        width: 730px;
        align-items: end;
        margin-left: 20px;
        color: rgba(0, 0, 0, .15);
        height: 1px;
    }

</style>
