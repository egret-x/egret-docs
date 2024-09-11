---
title: 文本字体
createTime: 2024/09/11 10:50:04
permalink: /docs/egret2d/textField/textFont/
---
引擎 5.3.5 版本开始支持 ttf 字体文件。

[示例 Demo 下载](https://docs.egret.com/engine/img/docs/2dRender/textField/ttf/MyFont.zip)

### 在资源配置文件中引入 ttf[​](#在资源配置文件中引入-ttf "在资源配置文件中引入 ttf的直接链接")

在 default.res.json 中增加 ttf 的配置。注意：ttf 文件的 “type” 类型是 ttf 而不是 bin。

```js
{
  "groups":[{
  "keys":"egret_icon_png,myFont_ttf",
  "name":"preload"
  }],
  "resources":[
  {
  "name":"egret_icon_png",
  "type":"image",
  "url":"assets/egret_icon.png"
  },
  {
  "name":"myFont_ttf",
  "type":"ttf",
  "url":"assets/myFont.ttf"
  },
  ]
}
```

### 在代码中映射字体[​](#在代码中映射字体 "在代码中映射字体的直接链接")

在示例 demo 的 75 行，通过如下代码映射字体。需要注意，映射前字体必须已经通过RES加载完成。

```js
egret.registerFontMapping("myFont",  "resource/assets/myFont.ttf");
```

### 使用 ttf 字体[​](#使用-ttf-字体 "使用 ttf 字体的直接链接")

在示例 demo 的 139 行，通过如下代码使用 ttf 字体

```js
let textfield =  new  egret.TextField();
textfield.fontFamily  =  "myFont";  //上一步映射的字体
this.addChild(textfield);
textfield.alpha  =  0;
textfield.width  = stageW -  172;
textfield.textAlign  = egret.HorizontalAlign.CENTER;
textfield.size  =  24;
textfield.textColor  =  0xffffff;
textfield.x  =  172;
textfield.y  =  135;
this.textfield  = textfield;
```

### 运行显示效果[​](#运行显示效果 "运行显示效果的直接链接")
