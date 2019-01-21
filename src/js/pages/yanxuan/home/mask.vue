<template>
    <div class="wrapper">
        <wxc-mask height="700"
                  width="560"
                  border-radius="30"
                  duration="300"
                  :has-overlay="true"
                  :show-close="true"
                  :show="show"
                  :has-animation="hasAnimation"
                  @wxcMaskSetHidden="wxcMaskSetHidden">
            <div>
                <image class="mask-image" resize="cover" src="bmlocal://assets/home_mask.png"></image>
            </div>
        </wxc-mask>
    </div>
</template>

<script>
    import {WxcMask} from 'weex-ui';

    export default {
        components: {WxcMask},
        data: () => ({
            show: true,
            hasAnimation: true
        }),
        methods: {
            wxcMaskSetHidden() {
                this.show = false;
            },
        }
    };
</script>

<style scoped>
    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #e0000000;
    }

    .mask-image {
        height: 700px;
        width: 560px;
        align-items: center;
        border-radius: 30px;
    }
</style>

