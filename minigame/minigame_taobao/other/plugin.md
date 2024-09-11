---
title: plugin
createTime: 2024/09/11 11:40:49
permalink: /docs/u5byb52m/
---

### 一.开发环境准备[​](#一开发环境准备 "一.开发环境准备的直接链接")

- [注册商家应用账号](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7652669aaxjToh&docId=119111&docType=1&)
- [下载淘宝开发工具](https://miniapp.open.taobao.com/docV3.htm?docId=117317&docType=1)
- 用户授权，用户信息等系统功能，请调用平台提供的 API。[平台 API 说明](https://miniapp.open.taobao.com/docV3.htm?docId=988&docType=20&tag=dev)
- 白鹭引擎版本 5.3.10 以上
- EgretLauncher 版本 1.2.22 以上

### 二.创建小游戏和可视化编译打包小游戏[​](#二创建小游戏和可视化编译打包小游戏 "二.创建小游戏和可视化编译打包小游戏的直接链接")

1.  使用最新版的 Egret Launcher 创建一个 Egret 游戏项目，或者将原有的 Egret 项目导入 ![alt text](image.png)
    
2.  导入或者创建完成后，会在 Egret Launcher 的列表里看到该项目。点击发布设置: ![alt text](image-1.png)
    
3.  选择 `创意互动小程序` 标签，点击`确定`，创建淘宝项目 ![alt text](image-2.png)
    
4.  创建成功后，点击`发布`标签，可以可视化的发布小游戏包 ![alt text](image-3.png)
    
5.  游戏代码类型：把白鹭工程里的代码编译淘宝项目里
    
    - debug：js 代码不进行 uglify 混淆，便于 debug 调试
    - release：js 代码进行 uglify 混淆压缩
6.  淘宝创意互动项目结构
    
    ![alt text](image-4.png)
    
    - app.css ：应用的全局样式文件，一般不需要修改。[查看详细说明](https://miniapp.open.taobao.com/docV3.htm?docId=117171&docType=1&tag=dev)
    - app.js：注册应用，获取应用的启动、显示、隐藏等消息。[查看详细说明](https://miniapp.open.taobao.com/docV3.htm?docId=117174&docType=1&tag=dev)
    - app.json：应用的配置文件。[查看详细说明](https://miniapp.open.taobao.com/docV3.htm?docId=117457&docType=1&tag=dev)
    - js 目录：白鹭项目编译出来的游戏代码
    - manifest.js：用于加载依赖的 js 文件
    - mini.project.json：用于配置项目用到的文件格式，如果用到了特殊的文件格式，需要在这配置
    - package.json：项目描述文件
    - pages/index 文件夹：
        - egret.tbgame.js：白鹭适配层文件
        - index.axml：入口的页面结构
        - index.js：入口类
        - tools 文件夹：一些工具类，不要修改
    - resource : 游戏的图片、音频等资源文件

### 三.安装到手机[​](#三安装到手机 "三.安装到手机的直接链接")

1.  [下载开发者工具](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7652669aaxjToh&docId=117780&docType=1&)
2.  点击【小程序】->【打开项目】，选择刚才创建好的淘宝创意互动小程序项目 ![alt text](image-5.png)
3.  项目类型，选择【小程序】 ![alt text](image-6.png)
4.  在面板的左上方关联应用，点击右上方的真机调试，编译完成后，使用手机淘宝APP，扫码调试

### 四.注意事项[​](#四注意事项 "四.注意事项的直接链接")

1.  平台因为安全问题，不支持 my.request 这个网络请求的 API。我们通过其他 API 支持了大部分的网络请求方法，如果你的游戏还有问题，请使用 [云开发](https://miniapp.open.taobao.com/docV3.htm?docId=118541&docType=1&tag=dev)。
2.  加载远程资源时，资源要放在阿里系域名下，具体情况请咨询淘宝的技术支持。
3.  平台提供的文字输入功能很弱，请先测试查看效果。
4.  创建的 egret.Sound ，在不用的时候，一定要调用 sound.close() 方法来销毁。
5.  不支持横屏游戏
6.  iOS 暂时不支持 websock 真机调试，预览模式可以使用。
7.  iOS 暂时不支持本地声音播放，网络加载的声音可以。
8.  不能直接调用 window 对象，需要使用 `$global.window`
9.  模拟器暂时不支持声音播放等功能，请以真机测试为准。

### 五.全局变量的使用[​](#五全局变量的使用 "五.全局变量的使用的直接链接")

淘宝创意互动项目不支持全局变量，具体使用方式，[请看这篇教程文档](https://docs.egret.com/engine/docs/publish/minigame/taobao/variable)