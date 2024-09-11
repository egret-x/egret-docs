---
title: WebGL渲染
createTime: 2024/09/11 09:50:34
permalink: /docs/renderMode/webgl/
---
## 1.介绍

> WebGL 是一套用于渲染 2D 和 3D 图形的标准图形库，其标准是由 Khronos、AMD、爱立信、谷歌、Mozilla、Nvidia 以及 Opera 等共同制定。

WebGL 通过增加 OpenGL ES 2.0 的一个 JavaScript 绑定，可以为 HTML5 Canvas 提供硬件 3D 加速渲染。 Egret Engine 2D 提供了 WebGL 渲染模式。只需开启 WebGL 渲染，就能获得硬件加速。

WebGL 提供了底层的渲染 API，对于传统 Web 开发者来说使用 WebGL API 是比较复杂的，需要补充大量的 OpenGL ES 相关知识。 但在 Egret Engine 中使用 WebGL 却十分方便， 只需在程序开始时选择开启 WebGL 渲染。

无需担心 WebGL 标准的兼容性问题。在开启 WebGL 渲染模式下，如果浏览器不支持将自动切换到 Canvas 渲染模式下。

### WebGL 兼容性

使用 WebGL 渲染可以获得硬件加速渲染，提升性能。因此希望可以在所有环境中使用 WebGL 渲染。目前 WebGL 正在获得更多更广泛的支持。

| PC浏览器 | 兼容性 |
|---|---|
| Chrome | Chrome 8 开始支持。|
| Firefox | WebGL 在 Firefox 4 及以上版本默认支持。|
| Safari  | Safari 5.1 开始支持 (Lion 版本系统已经使用)。|
| Opera | Opera 12 alpha 及以上版本。| 
| IE | IE 11 开始支持。 |

| 手机浏览器 | 兼容性 |
|---|---|
| ChromeAndroid | Chrome 30 开始在支持 GL_EXT_robustness 扩展的设备上支持. | 
| 腾讯x5内核 | QQ浏览器以及X5 tbs 2.x： android 4.0以下不支持webgl功能，4.0以上会根据手机的gl指令进行检查从而最终决定是否开启webgl功能 | 

## 2.使用

### 开启 WebGL 渲染

在 Egret 项目根目录中可以找到 index.html 文件。该文件是 Egret 项目的入口，包含初始化设置。

在 index.html 中有 Egret 的启动函数。如果要开启 WebGL 渲染，在其中传入参数即可，代码如下。

```
egret.runEgret({renderMode:"webgl"});
```

当然也可以指定渲染模式为 Canvas :

```
egret.runEgret({renderMode:"canvas"});
```

目前默认的渲染模式为 webGL。

### 判断当前的渲染模式

可以通过 `Capabilities` 类的 `renderMode` 来判断当前的渲染模式。

```
console.log(egret.Capabilities.renderMode);
```

上面一行代码在 Canvas 模式下将打印 `canvas`,在 WebGL 模式下将打印 `webgl`;

### WebGL 与脏矩形

由于在一些浏览器上兼容性问题比较严重，目前暂时在 WebGL 下关闭了的脏矩形渲染。

### 其他注意事项

可以在 Egret 程序的入口中开启 WebGL。如果浏览器不支持 WebGL 渲染将自动切换到 Canvas 渲染模式上。

使用 WebGL 渲染可以得到性能提升。但在使用很多文本和矢量绘图的情况下，可能有更多的开销，起不到提升性能的作用。因为在 WebGL 渲染模式下文本和矢量绘图是需要在 Canvas 中缓存下来再渲染到 WebGL 中。由于多了在 Canvas 渲染的过程，如果使用大量的文本或者矢量绘图将不能得到相应的性能提升。

在 WebGL 下如果要使用 `Texture` 对象的 `toDataURL()` 方法把纹理转换为 base64 字符串，那么纹理图片应放在同一服务器下，引用不同的服务器下的资源将不成功。

当然 WebGL 标准正在普及，在手机上有些特性支持还不是很友好。手机上非 Chrome 浏览器现在对不规则遮罩支持还不是很好，在使用 WebGL 渲染器时可以尽量避免使用不规则遮罩。




