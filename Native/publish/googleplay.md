GooglePlay 平台是很多开发者在海外发布游戏的第一选择。

本文将介绍如何将白鹭引擎开发的游戏通过 Egret Native 发布到 GooglePlay 平台。

## 发布前期准备[​](#发布前期准备 "发布前期准备的直接链接")

1.  科学上网，登录 GooglePlay 需要翻墙
2.  一张支持境外支付的 Visa 卡用来支付注册的25美金
3.  建议使用最新版 Chrome 浏览器来进行整体的发布流程

## 打包 Android App[​](#打包-android-app "打包 Android App的直接链接")

使用 Egret Native 生成一个 Android 项目，在 Android Studio 中发布为 aab 格式，而非 apk 格式

.aab格式为发布 GooglePlay 的专用格式，全名为 Android App Bundle，您可以在 https://developer.android.com/guide/app-bundle/test#generate_apks 上了解更多 aab 格式的内容（需要科学上网）。

如果项目要输出 aab 格式的包，需要满足两个条件：

- Android Studio 3.2 以上版本
- gradle 版本要大于：3.2.1，比如：`classpath 'com.android.tools.build:gradle:3.2.1'`

当满足如上设置后，在 Android Studio 中，单击菜单上的 `Build -> Generate Signed Bundle / APK`,并在弹出菜单中选择 Android App Bundle 即可。

## 注册开发者账号[​](#注册开发者账号 "注册开发者账号的直接链接")

注册并登陆 GooglePlay 开发者账号,链接是 https://play.google.com/apps/publish/signup/  

需要注意的是 在支付25美金的时候,Chrome 浏览器登录账号一定和你刚才注册的 GooglePlay 账号是同一个 否则可能会出现无法支付的问题

## 发布流程[​](#发布流程 "发布流程的直接链接")

进入平台后,见到右上角有一个创建应用,点击进入创建应用流程

在这个页面中会看到左边这几项有灰色对勾,点开应用版本上传打包好的应用,按照提示依次解决应用检查出现的问题

### 权限检查错误[​](#权限检查错误 "权限检查错误的直接链接")

> 您的应用的 APK 请求“android.permission.READ_PHONE_STATE”权限。应用若要在 APK 中使用这些权限，必须设置隐私权政策。 如果您的应用的目标受众群体包括未满 13 周岁的儿童，那就必须添加隐私权政策

如果您遇到该错误，可以用以下两种方式任选一种解决：

1.  提供一个架设在海外服务器上的静态隐私声明页面，并在 GooglePlay 的并在商品详情选项最后填充该网页地址。
2.  修改 Egret Native 生成的 AndroidManifest.xml 文件，具体修改方式请见后续小节：权限配置

### 64位应用错误[​](#64位应用错误 "64位应用错误的直接链接")

> 此版本不符合 Google Play 关于提供 64 位版本应用的规定 以下 APK 或 App Bundle 面向 64 位设备，但只有 32 位原生代码：1。 请向应用中添加 64 位和 32 位原生代码。您可以使用 Android App Bundle 发布格式来自动确保每种设备架构仅接收所需要的原生代码。这样可避免增加应用的总大小。

如果您遇到该错误，则需要在打包的时候补充64位的支持。请修改工程App对应build.gradle 文件，添加如下属性

```js


{

 ndk {

 abiFilters 'armeabi-v7a','arm64-v8a'

 }

}

```

上传完项目并校验通过,此时应用版本检查,右下角的发布按钮还是灰色不能发布,进入商品详情填充和内容分级阶段。

每满足一项内容,对应选项的灰色对勾会变成绿色,当所有带灰色对勾的选项变成绿色以后,此时重新点开应用版本查看对应的项目,发布按钮将会解锁点击进入审核期,如无意外项目将会正常发布。

### 附：权限配置[​](#附权限配置 "附：权限配置的直接链接")

GooglePlay 权限检查相关内容

由于 Egret Native 1.0.1 以前的版本 egret.arr 中的 AndroidManifest.xml 中没有显式声明 targetSdkVersion ，这会导致工具会自动添加三个权限

- android.permission.READ_PHONE_STATE
- android.permission.WRITE_EXTERNAL_STORAGE
- android.permission.READ_EXTERNAL_STORAGE

解决方案：

1.  Egret Native 1.0.2 版本解决了这个问题，升级即可
2.  开发者可以在AndroidManifest.xml 中添加相应权限的主动删除

```js


<uses-permission

  android:name="android.permission.READ_PHONE_STATE"

  tools:node="remove"  

/>

```

如遇到 tools 无法识别显示为红色，则： 需要在应用的 AndroidManifest.xml（不是上文中提到的 egret.arr 的 AndroidManifest.xml) 的跟节点中添加如下内容：

```js


<manifest  xmlns:android="http://schemas.android.com/apk/res/android"

  xmlns:tools="http://schemas.android.com/tools"

  package="org.egret.example"\>

```