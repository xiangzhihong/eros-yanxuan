<template>
    <div class="wrapper">
        <list class="lists">
            <cell v-for="item in learn_list" :key="item.id">
                <text class="title">即将开课</text>
                <div class="items">
                    <image :src="item.course_img" class="img"></image>
                    <text class="i-title">{{item.course_title}}</text>
                    <text class="f-title">{{item.update_time}}</text>
                    <text class="g-title">已学{{item.plenty}}</text>
                    <div class="outter">
                        <div class="inner" :style="{width:item.rop}"></div>
                    </div>
                </div>
            </cell>
        </list>
        <!--<div class="tops">-->
            <!--<image class="imgs" src="//pic.iidingyun.com//file/20181227/76519.png"></image>-->
            <!--<text class="words">我的学习</text>-->
        <!--</div>-->
    </div>
</template>



<script>
    import {config} from '../utils/common.js'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');

    export default {
        data(){
            return {
                rop:"20%",
                learn_list:[],
            }
        },
        mounted(){
            this.init_list();
        },
        methods:{
            //初始化列表
            init_list(){
                var _this = this;
                var url = "http://s3.iidingyun.com/user/center/uc_lesson.vm";
                var param = {siteid:"71704",op:"list"};
                stream.fetch(config(url,param),function(res){
                    console.log('***************'+JSON.stringify(res))
                    _this.learn_list = res.data.list;
                    for(var i=0; i < _this.learn_list.length;i++){
                        _this.learn_list[i].plenty = (parseInt(JSON.parse(_this.learn_list[i].section_list).length)/parseInt(_this.learn_list[i].section_total))*100+"%";
                        _this.learn_list[i].rop = _this.learn_list[i].plenty;
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .wrapper {
        width:750px;
    }
    .tops {
        width:750px;
        height:88px;
        position:fixed;
        left:0px;
        top:0px;
        background-color:rgba(255,255,255,1);
        border-bottom-width:2px;
        border-bottom-style:solid;
        border-bottom-color:rgba(207,217,230,1);
    }
    .imgs {
        width:52px;
        height:52px;
        position:absolute;
        left:40px;
        top:18px;
    }
    .words {
        margin-top:22px;
        margin-bottom:22px;
        text-align:center;
        font-size:36px;
        color:rgba(65,157,251,1);
        font-weight:600;
        line-height:44px;
    }
    .lists {
        width:750px;
        /*margin-top:88px;*/
    }
    .title {
        margin-top:18px;
        margin-left:20px;
        font-size:24px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(251,65,65,1);
        line-height:32px;
    }
    .items {
        margin-top:8px;
        margin-bottom:40px;
        width:750px;
        height:188px;
        position:relative;
    }
    .img {
        width:328px;
        height:188px;
        position:absolute;
        left:20px;
        top:0px;
    }
    .i-title {
        margin-left:364px;
        font-size:30px;
        font-weight:500;
        color:rgba(92,119,153,1);
        line-height:38px;
    }
    .f-title {
        margin-left:364px;
        font-size:24px;
        font-weight:500;
        color:rgba(164,182,204,1);
        line-height:32px;
    }
    .g-title {
        position:absolute;
        right:20px;
        bottom:20px;
        font-size:28px;
        font-weight:500;
        color:rgba(65,157,251,1);
        line-height:36px;
    }
    .outter {
        width:366px;
        height:12px;
        position:absolute;
        left:364px;
        bottom:0px;
        background-color:rgba(245,247,250,1);
    }
    .inner {
        height:12px;
        background-color:rgba(65,157,251,1);
    }
</style>
