---
title: README
createTime: 2024/09/11 10:50:04
permalink: /docs/4qnkat2q/
---
# 设置log信息停留时间
在微端工程中，可以设置 log 信息在屏幕上停留的时间

## iOS 工程里的设置
![](p1.png)
`[super.launcher startRuntime:SHOW_FPS FPSLOGTIME:-1];`

## 安卓工程里的设置
![](p2.png)
`launcher.startRuntime(showFPS,-1);`
