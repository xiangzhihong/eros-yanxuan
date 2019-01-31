# eros-yanxuan
## 简介


eros-yanxuan 是基于 [eros](https://bmfe.github.io/eros-docs/) 开发的Weex项目，部分页面参考了项目[网易严选 weex 版本](https://github.com/zwwill/yanxuan-weex-demo)。

- [eros 文档](https://bmfe.github.io/eros-docs/#/)
- [eros github](https://github.com/bmfe/eros-template)

## 运行
确保你本地已经集成了 [eros 开发所需的环境](https://bmfe.github.io/eros-docs/#/zh-cn/base_env)。

clone 项目到本地：
```
$ git clone https://github.com/xiangzhihong/eros-yanxuan.git
```

进入目录，下载前端所需的依赖：
```
$ cd eros-yanxuan
$ npm install
```

### iOS SDK
打开platforms目录下的WeexEros项目，在WeexEros中使用pod添加依赖。
```
$ cd platforms/ios/WeexEros
$ pod update                // 下载 iOS 依赖
$ open WeexEros.xcworkspace // 自动打开项目
```
选中模拟器，点击绿色箭头运行 app 即可。

### Android 
对于Android工程来说，使用Android Studio打开platforms目录下的WeexFrameworkWrapper的Android工程，然后使用install.sh安装Android工程的需要依赖包nexus和wxframework。

具体可以参考[自行导入项目](https://bmfe.github.io/eros-docs/#/zh-cn/base_init?id=android-%E5%AF%BC%E5%85%A5%E5%B7%A5%E7%A8%8B)，便可运行起来。

## 运行
- 项目根目录下运行 `eros dev`
- 关闭调试，拦截器，打开热更新
- 重新 build app

## 效果
![ABC](https://github.com/xiangzhihong/eros-yanxuan/blob/master/screen/0.jpg) 

## Question
运行过程中出现问题在以下地址解决方法，如果没有找到，可以参考[eros快速入门](https://juejin.im/post/5c01f249e51d4566754074c2)新建一个Weex工程，然后将src和配置文件的代码拷贝过去。 如果还有问题，请加群：515980159


- [移动跨平台技术总结](https://juejin.im/post/5c469f56e51d456e4138f911)
- [Weex快速上手](https://juejin.im/post/5bdbb6ab6fb9a022453e4b55)
- [eros快速入门](https://juejin.im/post/5c01f249e51d4566754074c2)
- [eros issue](https://github.com/bmfe/eros-template/issues)
- [eros Q&A](https://bmfe.github.io/eros-docs/#/zh-cn/QA)




