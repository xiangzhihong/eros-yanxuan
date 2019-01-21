<template>
    <div class="wrapper">
        <scroller class="scroller">
            <refresher></refresher>
            <div v-for="item in orders" class="i-c" @click="jumpOrderDetail()">
                <div class="o-t-c">
                    <text class="o-t-n-f">订单号：{{item.num}}</text>
                    <text class="o-t-n-sub">清单取消</text>
                </div>
                <div class="o-c-c">
                    <image class="o-i-i" resize="contain" src="bmlocal://assets/item_order.png"></image>
                    <div class="o-c-center">
                        <text class="o-t-t">{{item.title}}</text>
                        <text class="o-t-n-s">{{item.sub}}</text>
                    </div>
                    <div class="s-c">
                        <text class="o-t-n">包裹 x1</text>
                        <text class="o-t-r">待支付</text>
                    </div>
                </div>

                <div class="o-t-c">
                    <text class="o-t-n-f">应付：¥{{item.price}}</text>
                    <text class="i-pay">付款</text>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>

    import refresher from '../components/refresh';
    import {ORDERS} from './config'

    export default {
        components: {'refresher': refresher,},
        created() {
            this.getOrders()
        },
        data() {
            orders:[]
        },
        methods: {
            getOrders() {
                this.orders = ORDERS
            },
            jumpOrderDetail() {
                this.$router.open({
                    name: 'orderdetail'
                })
            },
        }
    }

</script>

<style scoped>
    .wrapper {
        background-color: #f2f3f4;
        flex: 1;
    }

    .scroller {
        flex: 1;
        display: flex;
        flex-wrap: nowrap;
        height: 1334px
    }

    .o-t-c {
        width: 750px;
        height: 70px;
        background-color: #fff;
        flex-direction: row;
        align-items: center;
    }

    .o-t-n-f {
        font-size: 26px;
        align-items: center;
        flex: 1;
        color: #666666;
    }

    .o-t-n {
        font-size: 26px;
        align-items: center;
        color: #666666;
    }

    .o-t-t {
        font-size: 32px;
        align-items: center;
        color: #666666;
    }

    .o-t-n-sub {
        font-size: 26px;
        align-items: center;
        margin-right: 30px;
        color: #666666;
    }

    .o-t-r {
        font-size: 26px;
        align-items: center;
        color: #b4282d;
    }

    .o-t-n-s {
        font-size: 24px;
        align-items: center;
        margin-top: 5px;
        color: #bababa;
    }

    .o-i-i {
        height: 120px;
        width: 120px;
        align-self: center;
        justify-content: center;
    }

    .o-c-c {
        width: 720px;
        height: 150px;
        justify-content: center;
        flex-direction: row;
    }

    .o-c-center {
        flex: 1;
        height: 150px;
        margin-left: 20px;
        justify-content: center;
    }

    .s-c {
        width: 150px;
        height: 150px;
        justify-content: center;
    }

    .i-c {
        margin-top: 15px;
        padding: 15px;
        flex: 1;
        background-color: #fff;
    }

    .i-pay {
        height: 40px;
        width: 90px;
        margin-right: 50px;
        background-color: #b4282d;
        border-radius: 4px;
        text-align: center;
        justify-items: center;
        align-items: center;
        color: #fff;
        font-size: 28px;
    }
</style>
