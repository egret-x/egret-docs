---
title: 导入PhotoShop设计图
createTime: 2024/09/11 10:50:04
permalink: /docs/db/dbPro/import/importPSD/
---
DragonBones Professional提供脚本文件，可以很方便将Photoshop中的设计图导出成DragonBones Professional支持的，可以导入的项目文件。

* 在windows系统上，脚本文件的位置是：
  * **{Dragon Bones Professional的安装目录}\PSExportDB.jsx**

* 在Mac系统上，在应用程序中找到DragonBones Pro.app，然后右键单击选择显示包内容，然后在以下位置可以找到脚本文件：
  * **/Contents/Resources/PSExportDB.jsx**

在Photoshop中，打开设计图，然后依次在菜单中选择文件->脚本->浏览， 然后在打开的系统定位窗口中找到PSExportDB.jsx文件，选择打开。弹出如下对话框：

![](5576bace6bf73.png)

* Export  PNGs 导出图片
* Export JSON 导出json文件
* Ignore Hidden Layers 忽略隐藏图层
* Image Scale 整体缩放比例

依照需求设置好，点击OK。Photoshop便开始导出。导出完成后，在设计图所在的目录下会生成一个 DragonBones/{PSD的文件名}/ 的目录，如果你导出时同时勾选了PNGs和JSON，其下会有和.psd文件同名的一个json文件和一个texture目录。Texture目录下是所有的PNG图片文件。

导入时，在DragonBones Professional的导入窗口选择导出的json文件，纹理类型选择“图片文件”，便可以把设计图导入到DragonBones Professional中了。

导入后，图片的相对位置，大小和相互间的层级关系都和PS中完全相同。







