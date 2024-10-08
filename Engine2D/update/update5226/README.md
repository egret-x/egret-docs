---
title: README
createTime: 2024/09/11 09:50:34
permalink: /docs/umv6bo2q/
---
# 白鹭引擎 5.2.26 发布日志
白鹭引擎在 2019年8月15日，发布 5.2.26 稳定版本。

## 2D 渲染 - JavaScript 
- **[优化]** 优化 EXML 发布成 commjs 的方法
- **[优化]** 优化 `AssetsManager` 资源管理模块中 `getResAsync` 方法的性能
- **[其他]** 移除 `experimental` 实验库

## Egret Native v0.1.20
- **[修正]** TouchMove事件可能乱序
- **[修正]** egret.RenderTexture.toDataURL返回值为空
- **[修正]** 从跳转到第三方Activity之后访问assets目录的资源可能会崩溃
- **[修正]** 在打开原生显示列表时，只设置了部分属性的TextFlow可能渲染出错

## 微信小游戏 v1.2.4
- **[优化]** websocket 替换为微信系统原生 API
- **[修正]** 修复安卓系统声音无法循环播放的问题

## 百度小游戏 v0.2.5
- **[修正]** ktx 和滤镜混合使用显示错误的问题
- **[优化]** 支持在 `index.html` 里通过设置 `data-show-log="true"` ，编译成百度小游戏后显示帧频。

## OPPO 小游戏 v0.2.4
- **[修正]** ktx 和滤镜混合使用显示错误的问题
- **[修正]** 修复资源缓存模块，加载声音出错的问题

## vivo 小游戏 v0.2.5
- **[修正]** ktx 和滤镜混合使用显示错误的问题

## 小米快游戏 v0.2.7
- **[修正]** ktx 和滤镜混合使用显示错误的问题
- **[优化]** 资源缓存模块声音加载流程
