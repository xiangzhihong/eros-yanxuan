<template>
    <bmContainer :touchBarShow="true" touchBarColor="#fafafa">
        <div class="flex">
            <div class="app-wrapper flex">
                <embed v-for="(item,index) in items" :src="item.src" type="weex" class="content" :style="{ visibility: item.visibility }"></embed>
                <tab-bar @tabTo="onTabTo" :items="items"></tab-bar>
                <div class="touch-bar"></div>
            </div>
        </div>
    </bmContainer>
</template>
<script>
    import util from './utils/util';
    import tabBar from './components/tabBar';
    import bmContainer from './components/bmContainer'
    import {tabConfig} from './config'
    export default {
        bmRouter: {
            viewWillAppear() {
                console.log('home-index-viewWillAppear');
            },
            viewWillBackAppear(params) {
                console.log('home-index-viewWillBackAppear');
            }
        },
        components: {
            'tab-bar': tabBar,
            bmContainer
        },
        created() {
            util.initIconFont()
        },
        data() {
            return {
                items: tabConfig,
            }
        },
        methods: {
            onTabTo(result) {
                let _key = result.data.key || '';
                this.items.forEach((val) => {
                    if (val.key === _key) {
                        val.visibility = 'visible'
                        return
                    }
                    val.visibility = 'hidden'
                })
            },
        }
    }
</script>
<style>
    .container {
        margin-top: 20px;
        flex: 1;
        flex-direction:column
    }
    .flex{
        flex: 1;
    }
    .wrapper {
        background-color: #f4f4f4;
    }
</style>
