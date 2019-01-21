<template>
    <div class="wrapper">
        <image class="o-i" resize="contain" src="bmlocal://assets/empty_order_ic.png"></image>
        <text class="o-t">还没有相关订单呢</text>
    </div>
</template>
<script>

</script>
<style scoped>
.wrapper {
    height: 1334px;
    width: 750px;
    flex: 1;
}

.o-i {
    height: 280px;
    width: 280px;
    align-self: center;
    justify-content: center;
}

.o-t {
    font-size: 28px;
    margin-top: 20px;
    align-self: center;
    color: #777777;
}
</style>
