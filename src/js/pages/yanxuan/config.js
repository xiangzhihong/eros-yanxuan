export const tabConfig = [{
    icon: '&#xe660;',
    name: "首页",
    key: 'home',
    src: `${weex.config.eros.jsServer}/dist/js/pages/yanxuan/home/index.js`,
    visibility: 'visible'
},  {
    icon: '&#xe605;',
    name: "分类",
    key: 'class',
    src: `${weex.config.eros.jsServer}/dist/js/pages/yanxuan/class/index.js`,
    visibility: 'hidden'
},{
    icon: '&#xe744;',
    name: "专题",
    key: 'topic',
    src: `${weex.config.eros.jsServer}/dist/js/pages/yanxuan/topic/index.js`,
    visibility: 'hidden'
}, {
    icon: '&#xe61a;',
    name: "购物车",
    key: 'shop',
    src: `${weex.config.eros.jsServer}/dist/js/pages/yanxuan/shop/index.js`,
    visibility: 'hidden'
}, {
    icon: '&#xe639;',
    name: "个人",
    key: 'mine',
    src: `${weex.config.eros.jsServer}/dist/js/pages/yanxuan/mine/index.js`,
    visibility: 'hidden'
}]
