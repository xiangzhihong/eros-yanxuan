<template>
    <div class="wrapper">
        <scroller class="main-list" offset-accuracy="300px">
            <refresher @loadingDown="loadingDown"></refresher>
            <div class="cell-button" @click="jumpWeb('http://m.you.163.com/topic/v1/look/list')">
                <block-1 :topics="topics"></block-1>
            </div>
            <div v-for="ar in articles" class="cell-button">
                <block-2 :article="ar"></block-2>
            </div>
        </scroller>
    </div>
</template>
<script>
import refresher from '../components/refresh';
import block1 from './block1';
import block2 from './block2';
import { TOPICS, ARTICLES } from './config'

export default {
    components: {
        'refresher': refresher,
        'block-1': block1,
        'block-2': block2,
    },
    created() {
        this.init()
    },
    data() {
        return {
            topics: [],
            articles: [],
            statusHeight: Number.parseInt(this.statusBarHeight || weex.config.env.statusBarHeight || 40)
        }
    },
    methods: {
        jumpWeb(_url) {
            this.$router.toWebView({
                url: _url,
                title: '',
                navShow: true,
            })
        },
        loadingDown() {

        },
        init() {
            this.getTopics()
            this.getArticles()
        },
        getTopics() {
            this.topics = TOPICS
        },
        getArticles() {
            this.articles = ARTICLES
        }
    }
}
</script>
<style scoped>
.iconfont {
    font-family: iconfont;
}
.status-bar{
    width: 750px;
    height: 40px;
    background-color:#fafafa;
}
.wrapper {
    background-color: #f4f4f4;
}
.main-list {
    margin-bottom: 90px;
    height: 1334px;
}
.cell-button {
    padding-bottom: 18px;
}
</style>
