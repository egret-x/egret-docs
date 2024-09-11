---
id: debugSkill.html
title: 调试技巧
createTime: 2024/09/11 10:50:04
permalink: /docs/9j3wp1kt/
---

在Android App打包运行过程中，有可能会发现一些问题，比如打包后黑屏无法正常运行。这时就需要使用Android的logcat调试功能来诊断问题。

在IntelliJ运行Android项目，会自动弹出Android标签，如图：

![](568a5d4b320ca.png)

常规情况下，会显示整个系统的全部log，为了过滤掉不需要的信息，我们可以用进程过滤功能只显示我们正在调试的app输出的log，选中该按钮，并选中我们要调试的app进程：

![](568a5d4b320ca.png)

即便是以限定了一个app进程，仍然可能有大量我们不需要的信息，别郁闷，我们可以进一步根据log的类型进行过滤：

![](568a5d4b40959.png)

通常我们最常用到的是Warn和Error级别的log，因为这两个级别包含程序运行不正常时首先需要检查的信息。
