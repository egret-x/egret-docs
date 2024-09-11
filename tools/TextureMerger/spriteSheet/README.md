---
title: README
createTime: 2024/09/11 10:50:04
permalink: /docs/joy8eh5e/
---

点击新建编辑>SpriteSheet，进入到如下界面

![image](1.PNG)

* 工具提供了两种数据导入的方式，拖拽或者点击菜单导入。下面的状态栏有纹理大小、缩放、当前编辑格式的信息。
* 右下角添加了一个查看教程的快捷按钮。
* 附加拓展名的配置可以对纹理名称追加文件的拓展名，比如.png会被追加成_png，这个对Egret MovieClip是无效的，
* 两种自动匹配策略：Power 2，Free Size前者可以得到合适的2的幂的尺寸，后者可以得到合适的自由尺寸。

将零散图片拖入后如下：

![image](2.PNG)

点击导出，可以将合成的大图和对应的json文件保存。

![image](3.png)

注意：如果使用 TextureMerger 打包后，发现使用图集时有裂缝问题，请使用 TextureMerger 1.7.0 或以上版本，在扩展设置为 1px 可以解决。

![image](5.png)
