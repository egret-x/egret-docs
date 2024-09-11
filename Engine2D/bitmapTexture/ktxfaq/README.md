---
title: README
createTime: 2024/09/11 10:50:04
permalink: /docs/gvjwr2h4/
---
## KTX 纹理压缩常见问题

#### 我使用的图片转换成 KTX 后在 iOS 手机上显示变形了
答：因为 iOS 使用的 ktx 是 PVRTC 格式的。PVRTC 必须是正方形（边长为2的N次方，如128、256、512），`否则会强制转换成正方形，显示出来就变形了`。建议把资源打包成正方型的 SpriteSheet 纹理集后，再转换成 ktx 格式使用。

正方形纹理使用示例，[可以参考此Demo](http://tool.egret-labs.org/DocZip/engine/KTXSquare.zip)
![](p1.png)

#### 为什么图片转换成 KTX 后体积变大了？会占用更多的内存影响游戏性能吗？
##### 答：
* PVRTC 格式的 ktx，因为会转换成正方形，所以体积会变大。例如原图尺寸为 228x380 的图片，转换成 PVRTC 的 ktx 后，尺寸为 512x512
* ETC1 格式的 ktx，因为会转换成纹理 ktx 和 alpha 通道 ktx，所以体积会变大。
* 文件体积变大并不会占用更多的内存。ktx 是一种 GPU 能直接读取并显示的格式，使得图像无需解压即可进行渲染，节约大量的内存。

#### 原始资源加上转换后的 ktx 资源，包体变的很大怎么处理？
##### 答：
* 我们建议初始包体里只放普通的 png、jpg 图片，然后根据设备信息远程加载适合	该平台使用的 ktx 资源。
* 不过 ktx 文件体积大，远程加载资源的时候会慢一些，这个就需要开发者权衡资源加载时间和游戏性能之间的利弊了。
* 服务器可以开启 gzip ，ktx 压缩后的体积会很小。[或者直接把 ktx 打包成 zip 使用](http://tool.egret-labs.org/DocZip/engine/ktx/ktx_zip.zip)

####  etc1 的 ktx 和 png ，哪种格式的帧频更快？
答：png 在 shader 中调用一次 texture2D ，而 etc1 格式的 ktx 会多调用一次用于获取 alpha 遮罩，所以在 benchMark 极限测试下会有性能损失。[etc1 ktx 和 png 的帧频对比 benchmark](http://tool.egret-labs.org/DocZip/engine/ktx/KTX_VS_PNG.zip)

#### KTX 文件在 web 服务器上用什么 MIME 映射
答：KTX 是一种二进制格式，MIME 设置成 `application/octet-stream
`

#### Egret 发布的原生游戏，是否支持 KTX
答：iOS 和 Android 的 Egret Naive 原生项目，都已经支持 KTX

#### 游戏的资源很多，显存不够用了，KTX 是否是唯一的解决方式：
答：请确保您已经在游戏中完善的进行了资源管理，例如使用 `RES.destroyRes()` 方法销毁不用的资源。如果显存还是过大，可以尝试使用 ktx。
