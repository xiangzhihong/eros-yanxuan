<template>
    <div>
        <div v-if="statusBarShow" class="status-bar" :style="{'height': statusHeight,'background-color': statusBarColor}"></div>
        <slot></slot>
        <div v-if="touchBarShow" class="touch-bar" :style="{'height': touchHeight,'background-color': touchBarColor}"></div>
    </div>
</template>
<script>
export default {
    props: {
        statusBarShow: {
            type: Boolean,
            default: false
        },
        statusBarColor: {
            type: String,
            default: '#07ae9c'
        },
        statusBarHeight: {
            type: String,
            default: ''
        },
        touchBarShow: {
            type: Boolean,
            default: false
        },
        touchBarColor: {
            type: String,
            default: '#eff3f4'
        },
        touchBarHeight: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            statusHeight: Number.parseInt(this.statusBarHeight || weex.config.env.statusBarHeight || 40),
            touchHeight: Number.parseInt(this.touchBarHeight || weex.config.env.touchBarHeight || 0)
        }
    },
    created() {

    },
    methods: {

    }
}
</script>
<style scoped>

</style>
