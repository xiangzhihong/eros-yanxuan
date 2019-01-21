<template>
    <div class="wrapper">
        <scroller class="main-list" offset-accuracy="300px">
            <refresher></refresher>
            <div v-for="item in recommend" class="cell-box" @click="jumpDetail()">
                <div class="auther-box">
                    <image class="auther-img" resize="cover" src="bmlocal://assets/yx-logo.png"></image>
                    <text class="auther-name">{{item.auther}}</text>
                </div>

                <text class="item-name">{{item.title}}</text>
                <image class="item-img" resize="stretch" :src="item.img"></image>

                <div class="re-bottom-box">
                    <image class="item-star-img" resize="stretch" src="bmlocal://assets/eye_ic.png"></image>
                    <text class="re-star-txt">{{item.star}}看过</text>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>

    import refresher from '../components/refresh';
    import {RECOMMEND} from './config'

    export default {
        components: {'refresher': refresher,},
        created() {
            this.getOrders()
        },
        data() {
            recommend:[]
        },
        methods: {
            getOrders() {
                this.recommend = RECOMMEND
            },
            jumpDetail() {
                this.$router.open({
                    name: 'detail'
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

    .main-list {
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-bottom: 90px;
        height: 1334px;
    }

    .scroller {
        flex: 1;
        display: flex;
        flex-wrap: nowrap;
        height: 1334px
    }

    .auther-box {
        height: 75px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }

    .auther-img {
        height: 55px;
        width: 55px;
        border-radius: 100px;
    }

    .auther-name {
        flex: 1;
        font-size: 26px;
        height: 58px;
        padding-left: 20px;
        padding-top: 10px;
    }

    .item-name {
        font-size: 30px;
        align-items: center;
    }

    .item-img {
        width: 720px;
        height: 340px;
        margin-top: 10px;
        align-self: center;
        justify-content: center;
        border-radius: 6px;
    }

    .re-bottom-box {
        width: 720px;
        height: 70px;
        flex-direction: row;
        align-items: center;
    }

    .re-star-txt {
        font-size: 26px;
        align-items: center;
        color: #666666;
    }

    .item-star-img {
        width: 30px;
        height: 25px;
        justify-content: center;
    }

    .cell-box {
        margin-bottom: 15px;
        padding: 15px;
        flex: 1;
        background-color: #fff;
    }
</style>
