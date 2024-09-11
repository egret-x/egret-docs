---
title: 纹理的填充方式
createTime: 2024/09/11 10:50:04
permalink: /docs/egret2d/bitmapTexture/fillMode/
---

位图的填充方式有两种，

* 拉伸图像以填充区域

* 重复图像以填充区域

### 1.拉伸图像填充
创建 `Bitmap` 对象时会默认选择第一种填充方式。

下面是的示例中，使用默认填充方式。使用的纹理图片为一张100*100的图片。图像宽度设置为2倍，高度设置为3倍。

```javascript
class BitmapTest extends egret.DisplayObjectContainer{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("preload");
    }
    private onGroupComp()
    {
        var img:egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes("box");
        img.width *= 2;
        img.height *= 3;
        this.addChild(img);
    }
}
```

编译后运行，效果如图：

![](56614f986ab98.png)

### 2.重复图像填充

设置填充方法需要改变 `Bitmap` 中的 `fillMode` 属性。

```javascript
img.fillMode = egret.BitmapFillMode.REPEAT
```

具体示例代码如下：

```javascript
class BitmapTest extends egret.DisplayObjectContainer{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("preload");
    }
    private onGroupComp()
    {
        var img:egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes("box");
        img.fillMode = egret.BitmapFillMode.REPEAT;
        img.width *= 2;
        img.height *= 3;
        this.addChild(img);
    }
}
```

编译后运行，效果如图：

![](56614f988d39e.png)
