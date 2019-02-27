<template>
    <div class="modal">
        <!-- 自定义内容 -->
        <div class="content-container">
            <div class="start-modify-container">
                <text class="start-modify-title">预约老师：</text>
                <image class="start-teacher-icon" :src="this.item.icon"></image>
                <div class="start-teacher-box">
                    <text class="start-title-blue">{{this.item.name || '张老师'}}</text>
                    <text class="start-teacher-vocation">{{this.item.intro || '浙江大学计算机学院教授'}}</text>
                </div>
            </div>
            <!--预约时间列表-->
            <div class="table-th">
                <text class="table-td">星期</text>
                <text class="table-td">日期</text>
                <text class="table-td">状态</text>
                <text class="table-tds">操作</text>
            </div>
            <list class="lists">
                <cell v-for="item in weeks">
                    <div class="table-ths">

                        <text class="table-it-td">{{item.dayname}}</text>
                        <text class="table-it-td">{{item.day}}</text>
                        <text class="table-it-td">可预约</text>
                        <text class="table-it-tds" @click="appointMent(item)">预约</text>
                    </div>
                </cell>
            </list>

            <div class="select-time">
                <text :class="['radio',radio===0?'isSelect':'']" @click="changRadio(0)">19:00-20:00</text>
                <text :class="['radio',radio===1?'isSelect':'']" @click="changRadio(1)">20:00-21:00</text>
                <text :class="['radio',radio===2?'isSelect':'']" @click="changRadio(2)">21:00-22:00</text>
            </div>

            <text class="description">问题描述</text>
            <textarea class="description-content" placeholder="输入您要咨询的问题！" v-model='description'></textarea>
            <div class="start-modyfy-btn" @click="modifyAppoint()">
                <text class="start-modyfy-text">确认修改</text>
            </div>
        </div>
    </div>
</template>
<script>

    import {config} from '../utils/common.js'

    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');

    export default {
        name: 'model',
        props: {},
        data() {
            return {
                showModal: true,
                radio: 0,       //时间切换
                item: {},        //itemBean
                weeks: [],
                selectWeek: '',
                selectDay: '',
                selectTime: '19:00-20:00',
                description: ''
            }
        },
        mounted() {
            this.getData();
            this.getParam();
        },
        methods: {
            //获取传递过来的参数
            getParam() {
                this.$router.getParams().then(resData => {
                    this.item = JSON.stringify(resData);
                    console.log('*******getParam********' + this.item)
                })
            },
            changRadio(v) {
                this.radio = v;
                this.getTime(v);
            },
            getTime(v) {
                if (v === 0) {
                    this.selectTime = '19:00-20:00'
                } else if (v === 1) {
                    this.selectTime = '20:00-21:00'
                } else {
                    this.selectTime = '21:00-22:00'
                }
            },
            getData() {
                var that = this;
                var url = "http://s3.iidingyun.com/expert/anchor/column.vm";
                var param = {host_id: '9795474', op: 'oneOnone', next_week: 'Y'};
                stream.fetch(config(url, param), function (res) {
                    that.weeks = res.data.data.list;
                })
            },
            appointMent(item) {
                var that = this;
                var week = JSON.parse(JSON.stringify(item.dayname));
                var day = JSON.parse(JSON.stringify(item.day));
                that.selectWeek = week;
                that.selectDay = day;
                modal.toast({
                    message: '已成功预约【' + week + day + '】课程',
                    duration: 0.5
                })
            },
            //提交修改
            modifyAppoint() {
                var content = this.description;
                var day = this.selectDay || '2019-02-10';
                var time = this.selectTime;
                var url = "http://s3.iidingyun.com/anchor/point_to_point/hostor_book_update.vm";
                var param = {
                    id: '9957111',
                    booking_content: content,
                    possible_book_date: day,
                    possible_book_time: time
                };
                stream.fetch(config(url, param), function (res) {
                    console.log('***************' + JSON.stringify(res))
                    modal.toast({
                        message: '提交成功',
                        duration: 0.5
                    })
                })
            }
        }
    }
</script>
<style>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 3000;
    }

    .content-container {
        background-color: #ffffff;
    }

    .start-modify-container {
        flex-direction: row;
        padding: 20px;

    }

    .lists {
        width: 750px;
        flex: 1;
        min-height: 500px;
    }

    .start-modify-title {
        height: 38px;
        font-size: 30px;
        font-weight: 500;
    }

    .start-teacher-icon {
        width: 60px;
        height: 50px;
    }

    .start-teacher-box {
        margin-left: 5px;
        justify-content: center;
    }

    .start-title-blue {
        height: 38px;
        font-size: 30px;
        font-weight: 500;
        color: rgba(164, 182, 204, 1);
    }

    .start-teacher-vocation {
        font-size: 24px;
        margin-top: 5px;
        font-weight: 200;
        color: #A4B6CC;
    }

    .table-th {
        width: 710px;
        height: 92px;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: #CFD9E6;
        flex-direction: row;
        justify-content: flex-start;
        background-color: #FAFAFA;
    }

    .table-td {
        width: 178px;
        height: 42px;
        font-size: 28px;
        font-weight: 500;
        color: rgba(23, 46, 77, 1);
        line-height: 42px;
        text-align: center;
        margin-top: 24px;
    }

    .table-ths {
        width: 710px;
        height: 92px;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: rgba(207, 217, 230, 1);
        flex-direction: row;
        justify-content: flex-start;
        background-color: rgba(255, 255, 255, 1);
    }

    .table-tds {
        width: 176px;
        height: 42px;
        font-size: 28px;
        font-weight: 500;
        color: rgba(23, 46, 77, 1);
        line-height: 42px;
        text-align: center;
        margin-top: 24px;
    }

    .table-it-td {
        width: 178px;
        height: 42px;
        font-size: 28px;
        font-weight: 500;
        color: rgba(92, 119, 153, 1);
        line-height: 42px;
        text-align: center;
        margin-top: 24px;
    }

    .table-it-tds {
        width: 176px;
        height: 42px;
        font-size: 28px;
        font-weight: 500;
        color: #419DFB;
        line-height: 42px;
        text-align: center;
        margin-top: 24px;
    }

    .select-time {
        width: 710px;
        height: 60px;
        margin-top: 40px;
        margin-right: 20px;
        margin-bottom: 40px;
        margin-left: 20px;
        flex-direction: row;
        justify-content: space-between;
    }

    .radio {
        width: 176px;
        height: 60px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(65, 157, 251, 1);
        line-height: 60px;
        text-align: center;
        border-width: 2px;
        border-style: solid;
        border-color: rgba(65, 157, 251, 1);
        border-radius: 8px;
    }

    .isSelect {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(65, 157, 251, 1);
    }

    .isEnable {
        color: rgba(164, 182, 204, 1);
    }

    .description {
        height: 40px;
        font-size: 32px;
        margin-top: 30px;
        font-weight: 500;
        color: rgba(92, 119, 153, 1);
        line-height: 40px;
        margin-left: 40px;
        margin-bottom: 20px;
    }

    .description-content {
        width: 710px;
        height: 200px;
        background-color: rgba(245, 247, 250, 1);
        border-radius: 8px;
        margin-left: 20px;
        margin-bottom: 40px;
    }

    .start-modyfy-btn {
        background-color: #419DFB;
        width: 680px;
        height: 90px;
        margin-bottom: 30px;
        align-self: center;
        justify-content: center;
        border-radius: 8px;
    }

    .start-modyfy-text {
        font-size: 32px;
        color: #ffffff;
        text-align: center;
    }
</style>
