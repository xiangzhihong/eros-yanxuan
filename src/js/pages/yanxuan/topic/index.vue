<template>
    <div class="wrapper">
        <div class="status-bar" :style="{'height': statusHeight+'px'}"></div>
        <topic-header></topic-header>
        <wxc-tab-page :tab-titles="tabTitles"
                      :tab-styles="tabStyles"
                      :needSlider="needSlider"
                      :is-tab-view="isTabView"
                      :tab-page-height="tabPageHeight"
                      @wxcTabPageCurrentTabSelected="wxcTabPageSelected">

            <list v-for="(v,index) in tabTitles"
                  :key="index"
                  class="item-container"
                  :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <cell class="cell" v-if="index!==1">
                    <recommend></recommend>
                </cell>

                <cell class="cell" v-if="index===1">
                    <doyen></doyen>
                </cell>
            </list>
        </wxc-tab-page>
    </div>
</template>
<script>
    import {WxcTabPage, WxcPanItem, Utils} from 'weex-ui';
    import header from './header';
    import Config from './config'
    import recommend from './recommend'
    import doyen from './doyen'

    export default {
        components: {
            WxcTabPage, WxcPanItem,
            'topic-header': header,
            'recommend': recommend,
            'doyen': doyen,
        },
        data: () => ({
            // statusHeight: Number.parseInt(this.statusBarHeight || weex.config.env.statusBarHeight || 40),

            tabTitles: Config.tabTitles,
            tabStyles: Config.tabStyles,
            tabList: [],
            needSlider: true,
            demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            supportSlide: true,
            isTabView: true,
            tabPageHeight: 1334,
        }),
        created() {
            this.tabPageHeight = Utils.env.getPageHeight();
            this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
            Vue.set(this.tabList, 0, this.demoList);

            this.statusHeight = this.$getConfig().env.statusBarHeight;
        },
        methods: {
            wxcTabPageSelected(e) {
                const self = this;
                const index = e.page;

                if (!Utils.isNonEmptyArray(self.tabList[index])) {
                    setTimeout(() => {
                        Vue.set(self.tabList, index, self.demoList);
                    }, 100);
                }
            },

        }
    };
</script>

<style>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
    }

    .status-bar {
        width: 750px;
        height: 40px;
        background-color: #fafafa;
    }

    .cell {
        background-color: #ffffff;
        height: 1334px;
        flex: 1;
        justify-content: center;
    }

    .o-e {
        justify-content: center;
        align-self: center;
    }

    .o-t {
        font-size: 36px;
        text-align: center;
        height: 1334px;
        width: 750px;
    }

</style>
