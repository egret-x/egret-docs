---
title: fix_domain
createTime: 2024/09/18 11:05:58
permalink: /docs/u2clkxqs/
---

```ts
    public static shareImage(display: egret.DisplayObject): void
    {
        if (Const.WX_INSTALLED == false)
        {
                Basic.Toast.buildToast('您未安装微信');
                return;
        }

        // 非Native环境
        if (egret.Capabilities.runtimeType != egret.RuntimeType.NATIVE)
        {
                return;
        }

        var width = display.width;
        var height = display.height;
        var scaleWidth = .15 * width;
        var scaleHeight = .15 * height;

        // 绘制到 renderTexture
        var renderTexture = new egret.RenderTexture;
        renderTexture.drawToTexture(display, new egret.Rectangle(0, 0, width, height));
        var bitmap = new egret.Bitmap;

        // 缩放 bitmap
        bitmap.texture = renderTexture;
        bitmap.width = .6 * width;
        bitmap.height = .6 * height;

        // 绘制缩放后的 bitmap
        renderTexture = new egret.RenderTexture;
        renderTexture.drawToTexture(bitmap, new egret.Rectangle(0, 0, bitmap.width, bitmap.height));

        // 传给 native 的值
        var value;
        // 文件路径
        var filePath = "";

        if("ios" == egret.Capabilities.os.toLocaleLowerCase())
        {
                filePath = "/local/game/share.jpg";
                value =
                {
                        type: "0",
                        path: "/local/game/share.jpg",
                        width: scaleWidth.toString(),
                        height: scaleHeight.toString()
                }

        }else
        {
                filePath = "game/share.jpg";
                value =
                        {
                                type: "0",
                                path: "/egret/local/game/share.jpg",
                                width: scaleWidth.toString(),
                                height: scaleHeight.toString()
                        }
        }

        // 保存纹理
        renderTexture.saveToFile("image/jpeg", filePath);

        // 回调Native
        egret.ExternalInterface.call(Const.NATIVE_SHARE_CAPTURE_TO_WX, JSON.stringify(value));

        bitmap.texture.dispose();
        bitmap = null;
        renderTexture.dispose();
        renderTexture = null;
    }

```