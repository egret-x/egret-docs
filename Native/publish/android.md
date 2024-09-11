---
title: android
createTime: 2024/09/11 17:01:29
permalink: /docs/thu84rg8/
---
开发者在使用 Egret Native 发布 Android 工程时，由于开发者本地开发环境与 Egret Native 版本不匹配可能会遇到一些问题，引擎团队针对常见问题列出了如下解决方案，希望可以对您有所帮助。

## Android Studio 项目无法编译[​](#android-studio-项目无法编译 "Android Studio 项目无法编译的直接链接")

在打开Android项目时需要访问 google 和 jcenter 等 maven 仓库。但是由于国内的原因，这些仓库无法访问。

可以使用国内提供的镜像服务，在`根目录的build.gradle`下repositories 下 所有其他项目前 添加如下代码：

```js
maven { url 'https://maven.aliyun.com/repository/jcenter' 

}

maven { url 'https://maven.aliyun.com/repository/google' 

}

maven { url 'https://maven.aliyun.com/repository/central' 

}

maven { url 'https://maven.aliyun.com/repository/gradle-plugin' 

}

```

经过上述修改后，最终文件内容应如下所示：

```js


// 项目/build.gradle，即根目录下的 build.gradle

buildscript {

 repositories {

 maven { url 'https://maven.aliyun.com/repository/jcenter' 

}

 maven { url 'https://maven.aliyun.com/repository/google' 

}

 maven { url 'https://maven.aliyun.com/repository/central' 

}

 maven { url 'https://maven.aliyun.com/repository/gradle-plugin' 

}

 google()

 jcenter()

 }

 ...

}

...

allprojects {

 repositories {

 maven { url 'https://maven.aliyun.com/repository/jcenter' 

}

 maven { url 'https://maven.aliyun.com/repository/google' 

}

 maven { url 'https://maven.aliyun.com/repository/central' 

}

 maven { url 'https://maven.aliyun.com/repository/gradle-plugin' 

}

 google()

 jcenter()

 }

}

```

## Android Studio 提示需要升级 gradle插件版本[​](#android-studio-提示需要升级-gradle插件版本 "Android Studio 提示需要升级 gradle插件版本的直接链接")

为了兼容老版本的Android Studio，EgretNative使用了较老版本的`gradle`和`gradle插件`，可能存在gradle版本和您现有的 Android Studio 版本或者gradle版本一致的情况，这时需要修改如下三处：

### 配置 `gradle插件` 版本[​](#配置-gradle插件-版本 "配置-gradle插件-版本的直接链接")

```js


// 项目/build.gradle，即根目录下的 build.gradle

buildscript {

 ...

 dependencies {

 classpath 'com.android.tools.build:gradle:x.x.x'

 }

}

```

### 配置 gradle 版本[​](#配置-gradle-版本 "配置 gradle 版本的直接链接")

```js


# 项目/gradle/wrapper/gradle-wrapper.properties

distributionUrl=https\\://services.gradle.org/distributions/gradle-x.x.x-all.zip

```

### 安卓编译工具版本 BuildToolsVersion[​](#安卓编译工具版本-buildtoolsversion "安卓编译工具版本 BuildToolsVersion的直接链接")

```js


// 项目/app/build.gradle

android {

 buildToolsVersion 'x.x.x'

}

```

注：三个版本之间有对应关系

| **插件版本** | **所需的 Gradle 版本** | **BuildTools版本** |
| :--- | :--- | :--- |
| 1.0.0 - 1.1.3 | 2.2.1 - 2.3 | 21.1.1+ |
| 1.2.0 - 1.3.1 | 2.2.1 - 2.9 | 21.1.1+ |
| 1.5.0 | 2.2.1 - 2.13 | 21.1.1+ |
| 2.0.0 - 2.1.2 | 2.10 - 2.13 | 21.1.1+ |
| 2.1.3 - 2.2.3 | 2.14.1+ | 23.0.2+ |
| 2.3.0+ | 3.3+ | 25.0.0+ |
| 3.0.0+ | 4.1+ | 26.0.2+ |
| 3.1.0+ | 4.4+ | 27.0.3+ |
| 3.2.0 - 3.2.1 | 4.6+ | 28.0.3+ |
| 3.3.0 - 3.3.2 | 4.10.1+ | 28.0.3+ |
| 3.4.0 - 3.4.1 | 5.1.1+ | 28.0.3+ |
| 3.5.0+ | 5.4.1-5.6.4 | 28.0.3+ |

## CPU类型相关问题[​](#cpu类型相关问题 "CPU类型相关问题的直接链接")

### 添加或者删除支持的CPU类型[​](#添加或者删除支持的cpu类型 "添加或者删除支持的CPU类型的直接链接")

如果有的引用库中没有提供相应的CPU版本的so文件，在对应的CPU上会导致程序崩溃。

EgretNative 提供了 `armeabi-v7a`, `x86`, `arm64-v8a`, `x86_64` 四种CPU abi类型的支持。

我们可以通过指定CPU的abi过滤来让apk中包含哪些CPU的so。

```js


// 项目/app/build.gradle

android {

 ...

 defaultConfig {

 ...

 ndk {

 abiFilters 'armeabi-v7a'//, 'x86', 'arm64-v8a', 'x86_64'

 }

 }

 ...

}

```

### 关于 `armeabi`[​](#关于-armeabi "关于-armeabi的直接链接")

Egret Native 已经移除了 `armeabi` 这个CPU 的支持：

- `armeabi` 这个abi 是非常旧的cpu使用的，不支持硬件浮点计算，性能也很差。
- `Android 4.0`和之后的官方系统需要修改代码来支持`armeabi`。
- `Android 4.4`和之后的系统最低要求是 `armeabi-v7a`。
- `armeabi-v7a`CPU包含`armeabi`支持，即可以运行`armeabi-v7a`的CPU可以运行`armeabi`。

但是有的开发者会遇到某些特殊的第三方库只提供了armeabi的版本，可以按照如下方法解决:

- 首先确认您是否真的要支持`armeabi`的CPU，在大部分情况下，可以使用`armeabi-v7a`替换，即可以将对应的`armeabi`的目录改名或复制为`armeabi-v7a`
- 如您真的需要支持，请联系白鹭引擎技术支持（微信号：egretengine）

## Java端代码混淆设置[​](#java端代码混淆设置 "Java端代码混淆设置的直接链接")

项目可以通过在 `app/build.gradle`设置 `minifyEnabled true` 来开启Java代码混淆

1.0.3 版本（即将发布）之后，我们内置了针对混淆的解决方案，开发者无需关心这些技术细节。

1.0.3 版本之前，开启Java混淆时会导致某些 Egret Native 内部使用的类名被混淆，所以需要在 `app/proguard-rules.pro` 文件中添加如下配置，保证需要的内容不被混淆。

```js


-keep class 

org.egret.runtime.launcherInterface.**  

{

  *;

}

```