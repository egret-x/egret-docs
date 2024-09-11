---
title: README
createTime: 2024/09/11 10:50:04
permalink: /docs/zfchdqkr/
---
## 手动关闭启动页的方法

当打开游戏页面以后，微端默认自动关闭启动页。但此时您的页面里加载的js文件或者其他文件很多的时候，因为需要从网络或本地缓存里读取这些文件，会存在一段黑屏时间。对玩家来说用户体验不好。

所以我们也提供了一种手动关闭启动页的方法。这种模式下，启动页会一直存在，直到调用了关闭启动页的代码。

### 设置安卓、iOS 工程

安卓工程的 MainActivity 里

```
//1 是自动关闭  0 是手动关闭
launcher.closeLoadingViewAutomatically = 1;
```

将代码里的 **=1** 改为 **=0**

iOS 工程在 ViewController.mm 里做同样的修改

```
super.launcher.closeLoadingViewAutomatically = 0;
```

### 修改游戏代码

当你的游戏初始化完成，可以关闭启动页时，调用下面这段代码

```
if (window['closeLoadingView']) {
    window['closeLoadingView']();
}
```

### 优化建议

黑屏等待的时间和加载文件的数量是成正比的，即便使用手动关闭启动页，也会让玩家等待很长时间。所以建议合并js数量，比如使用 egret publish 后的版本，可以把数百个js文件合并成一个，这样启动速度就会很快了。

### 注意

该功能仅支持 **4.1.0** 以上版本的引擎

## 禁用启动页的方法

Android微端0.1.8添加。禁用后将不再弹出启动页。

```
launcher.disableLaunchPage();
```

## 修改启动页地址的方法

Android微端0.1.8添加。

```
launcher.launchPageUrl = "启动页地址";
```
