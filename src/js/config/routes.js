// 这里的后缀都是 .js 因为打包出来的都是js文件，而不是.vue文件，我们要告诉客户端跳转那个js

//  这里的路径和dev.json路径的区别
//  pages里面配置的是路由跳转的地址，也就是dev生成的 dist文件夹下的js bundle路径 从dist/js开始
//  dev.json 的 exports 需要打包的js地址，填入src的需要被打包成js bundle的地址   从src开始

export default {
    'active': {
        title: '冬季促销',
        url: '/pages/yanxuan/shop/active.js',
    },
    'topic': {
        title: '推荐专区',
        url: '/pages/yanxuan/class/topic.js',
    },
    'detail': {
        title: '商品详情',
        url: '/pages/yanxuan/detail/detail.js',
    },
    'person': {
        title: '个人中心',
        url: '/pages/yanxuan/mine/person.js',
    },
    'login': {
        title: '账户登录',
        url: '/pages/yanxuan/mine/login.js',
    },
    'msg': {
        title: '消息中心',
        url: '/pages/yanxuan/home/msg.js',
    },
    'api': {
        title: 'API测试',
        url: '/pages/yanxuan/mine/apitest.js',
    },
    'order': {
        title: '我的订单',
        url: '/pages/yanxuan/order/order.js',
    },
    'fillorder': {
        title: '填写订单',
        url: '/pages/yanxuan/order/fillorder.js',
    },
    'orderdetail': {
        title: '订单详情',
        url: '/pages/yanxuan/order/orderdetail.js',
    }
}
