---
title: other
createTime: 2024/09/11 11:40:34
permalink: /docs/ebldhdtz/
---
# 关于全局变量的使用

淘宝创意互动项目不支持全局变量，引用时需要开发者修改代码。例如有一个js，里面有一个方法 a:

```js
a.js 中的内容：

var 

a 

= 

function(){

 console.log("a")

}
```

然后我们引用 js，调用该方法，在 H5 上是可以正常输出内容的。

```js
require("a.js")

a(); 

//a
```

但是在淘宝创意互动平台上是不支持这种写法的，需要把该方法挂载到全局变量上，修改如下：

```js
a.js 中的内容：

var 

a 

= 

function(){

 console.log("a")

}

$global.window.a 

= a; 

//必须使用 $global 才能获取全局对象

```

然后我们引用 js，调用该方法，也要通过全局变量引用

```js
require("a.js")

$global.window.a(); 

//a

```

### 一.第三方库的使用[​](#一第三方库的使用 "一.第三方库的使用的直接链接")

我们以引入 `particle` 粒子库为例，说明如何对第三方库进行修改。  
1\. 我们在 `egretProperties.json` 中的配置如下:

```js
{

  "modules":  

[  {  "name":  

"particle",  "path":  

"libs/particle"  }  ]

}
```

1.  打开项目中的 `scrpits/tbgame/tbgame.ts` 文件，在 `onFile` 方法中可以看到，我们给每一个 `js` 文件的开头部分都添加一行代码：
    
    `var global = $global; var window = $global.window; var egret = window.egret;`
    
    这样每个 `js` 里都可以调用 `window` 和 `egret` 对象。
    
2.  然后我们将 `particle` 挂载到 `window` 对象上：
    
3.  在游戏代码 `main.js` 中添加 `particle` 的引用，这样在游戏中就可以正常调用粒子库了：
    

如果您使用的其他的第三方库，也需要这样配置，否则无法运行

### 二.关于 EUI 的使用[​](#二关于-eui-的使用 "二.关于 EUI 的使用的直接链接")

EUI 是白鹭引擎官方的界面库，因为全局变量的问题，我们在编译的时候对其做了一些处理，使用引擎 5.3.10 版本创建的项目我们已经默认修改好了。下面详细讲一下修改了哪些地方，如果您的其他库中也出现了类似问题，可以参考我们的方法:

#### 1\. 挂载全局变量 `generateEUI`[​](#1-挂载全局变量-generateeui "1-挂载全局变量-generateeui的直接链接")

因为游戏代码中会引用到 `eui` 里的 `generateEUI` 方法,所以要将它挂载到全局变量中。打开项目中的 `scrpits/tbgame/tbgame.ts` 文件，在 `onFile` 方法中可以看到：

#### 2.在游戏代码中通过全局变量引用 `generateEUI`[​](#2在游戏代码中通过全局变量引用-generateeui "2在游戏代码中通过全局变量引用-generateeui的直接链接")

打开项目中的 `scrpits/tbgame/tbgame.ts` 文件，在 `onFile` 方法中可以看到:

#### 3\. 使用皮肤文件的注意事项[​](#3-使用皮肤文件的注意事项 "3-使用皮肤文件的注意事项的直接链接")

因为全局变量引用的问题，我们在给一个 `eui.Component` 赋予一个皮肤的时候，不可以用字符串的形式来赋值，必须用对象的方式。

```js
let cp = 

new 

eui.Component();

cp.skinName 

= 

'skins.mySkin';// 这种写法不行

cp.skinName 

= skins.mySkin;// 要使用这种写法
```

**注意：** `skins` 对象之可以使用，是因为我们事先通过全局对象进行了引用，如果您的皮肤类名不在 `skins` 中，需要您自己添加引用。  
打开项目中的 `scrpits/tbgame/tbgame.ts` 文件，在 `onFile` 方法中可以看到:

#### 4\. `exml` 中组件的皮肤[​](#4-exml-中组件的皮肤 "4-exml-中组件的皮肤的直接链接")

在 `exml` 中的组件也可以赋予皮肤，例如下面这种：

这种情况是无法用对象的方式赋值，我们是通过正则替换的方式来进行修改的。打开项目中的 `scrpits/tbgame/tbgame.ts` 文件，在 `onFile` 方法中可以看到：

`default.thm.js` 是 `exml` 编译出来的 js 文件，我们将每个赋值给 `skinName` 的皮肤，都通过 `window` 对象调用。最终替换的效果如下：

#### 5\. 同过上述的修改，`eui` 就可以正常运行了。