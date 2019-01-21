// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    'eslint': false,
    'webpackWarnings': false,
    'exports': [
        // appBoard
        'js/config/index.js',
        // mediator
        'js/mediator/index.vue',
        // home
        'js/pages/yanxuan/index.vue',
        "js/pages/yanxuan/home/index.vue",
        "js/pages/yanxuan/home/msg.vue",
        "js/pages/yanxuan/detail/detail.vue",
        "js/pages/yanxuan/topic/index.vue",
        "js/pages/yanxuan/class/index.vue",
        "js/pages/yanxuan/class/active.vue",
        "js/pages/yanxuan/class/topic.vue",
        "js/pages/yanxuan/shop/index.vue",
        "js/pages/yanxuan/mine/index.vue",
        "js/pages/yanxuan/mine/person.vue",
        "js/pages/yanxuan/mine/login.vue",
        "js/pages/yanxuan/mine/apitest.vue",
        "js/pages/yanxuan/order/fillorder.vue",
        "js/pages/yanxuan/order/order.vue",
        "js/pages/yanxuan/order/orderdetail.vue",
    ],
    'alias': {
        'Components': 'js/components',
        'Common': 'js/common',
        'Config': 'js/config',
        'Widget': 'js/widget',
        'Pages': 'js/pages',
        'Utils': 'js/utils'
    },
    'diff': {
        'pwd': '/Users/yangmingzhe/Work/opensource/eros-diff-folder',
        'proxy': 'https://app.weex-eros.com/source'
    },
    'server': {
        'path': './',
        'port': 8889
    },
    'mockServer': {
        'port': 52077,
        'mockDir': './dist/mock'
    },
    'socketServer': {
        'port': 8890,
        'switch': true
    }
}
