---
title: Legacy 模式
createTime: 2024/09/11 17:47:48
permalink: /docs/tools/EgretCompiler/legacy/
---

已完成：11/09/2024 17:47（633ms）
搜索...

Legacy 模式 | Egret Engine
06/09/2024 18:08
en

## 安装编译器[​](#安装编译器 "安装编译器的直接链接")

我们为 EgretCompiler 提供了三种安装方式，分别为快速安装、npm拉取安装与命令行安装。

看似复杂，但是无论哪种方式，目的都是将 EgretCompiler 安装至 scripts/plugins/node_modules 文件夹中。

自5.3.8版本起，白鹭引擎采用快速安装作为默认的安装策略，以提供最佳的新手用户体验。

### 快速安装[​](#快速安装 "快速安装的直接链接")

白鹭引擎默认采用了 EgretLauncher 安装的方式，具体方式为：

1.  安装 Egret Launcher 1.2.0 或更高版本

2.  点击【工具】选项卡，下载【EgretCompiler】下载地址：https://www.egret.com/download/(在小游戏支持包中)

3.  根据系统找到EgretLauncher在本地的缓存目录位置

 windows:

```shell
C:\Users\当前用户\AppData\Roaming\EgretLauncher\download
```

macos:

```js
/Users/当前用户/Library/Application Support/EgretLauncher/download
```

    将下载的supports_download.zip解压内容到 download 目录 下即可，因为包含了EgretCompiler和其他下游戏支持包

    ![](:/1e528fb37061439d8201d8ac8bda4bc0)

4.  确定 `scripts/plugins/webpack-plugin.ts`中采用了快速安装

```js
require('./npm').installFromLauncher(['@egret/egret-webpack-bundler'])

// require('./npm').installDependencies(["@egret/egret-webpack-bundler"]);
```

5.  执行 egret build 命令,构建脚本会自动在 scripts/plugins/node_modules 中创建相关软连接

### 构建脚本安装[​](#构建脚本安装 "构建脚本安装的直接链接")

1.  在 `scripts/plugins/webpack-plugin.ts` 中使用构建脚本安装

```js
// require('./npm').installFromLauncher(['@egret/egret-webpack-bundler']);

require('./npm').installDependencies(['@egret/egret-webpack-bundler'])
```

1.  执行 egret build 命令,构建脚本将会在 scripts/plugins 文件夹下执行 `npm install @egret/egret-webpack-bundler` 命令安装依赖，根据用户网络情况，可能需要执行20秒左右。

如果您因为当前网络问题执行失败，请删除 `scripts/plugins/node_modules`文件夹，然后调整为命令行安装的方式进行安装

### 命令行安装[​](#命令行安装 "命令行安装的直接链接")

使用快速安装与使用构建脚本安装，只能安装 EgretCompiler 的最新稳定版本，如果您需要安装特定版本，也可以直接从 npm 进行安装，具体方式如下

1.  启动一个命令终端，进入 scripts/plugins 文件夹，在该文件夹下执行如下命令

```js
npm  install @egret/egret-webpack-bundler@version --save --registry https://registry.npm.taobao.org
```

> 上述命令中的 @version 并非直接输入这几个字母，而是需要输入您需要的版本号或标签 您也可以不指定版本号，默认会安装最新稳定版本。

1.  执行 egret build 命令，进行构建
h2 现有项目升级至 Legacy 模式

h3 步骤一：替换现有的编译命令

1.  使用白鹭引擎 5.4 以上版本创建一个新项目，然后将scripts/plugins文件夹拷贝至现有项目同级目录下。
2.  在 `scripts/config.ts` 最上面添加如下代码

import  {  WebpackBundlePlugin,  WebpackDevServerPlugin  }  from  "./plugins/webpack-plugin";

1.  将 `scripts/config.ts` 中的 IncrementCompilePlugin 和 CompilePlugin 替换为 WebpackDevServerPlugin 和 WebpackBundlePlugin 。以 WebpackDevServerPlugin 为例：

const outputDir =  ".";

return  {

 outputDir,

 commands:  [

  // new IncrementCompilePlugin(), 去掉此插件

  new  WebpackDevServerPlugin(

  // 设置编译参数

  )

  ]

};

h3 步骤二：设置编译参数

WebpackDevServerPlugin 和 WebpackBundlePlugin 内部实现均是调用了 `@egret/egret-webpack-bunlder` 中的相关方法，调用这些方法需要传递参数，通常按照默认值设置即可，主要需要注意的参数是 typescript.mode，如果是现有项目请确认设置为 legacy。如下所示：

new  WebpackDevServerPlugin({

 libraryType:  "debug",

 defines:  {  DEBUG:  true,  RELEASE:  false  },

 typescript:  { mode:  "legacy"  }

});

各个参数的具体功能您可以在 VSCode 中按住 Ctrl 键点击相关代码查看。

h3 步骤三：执行构建

修改完上述代码后，执行 `egret build` 即可。首次执行该命令时会进行自动安装，具体请参见安装与更新这篇文档。

egret build 执行后可能会抛出编译错误，这是因为白鹭引擎之前的TypeScript编译器是2.4版本，而最新则采用3.9版本，新版本编译器会进行更严格的类型检查。修复这些错误后即可顺利运行您的项目。

WebpackDevServerPlugin 执行后会自动启动一个 HTTP 服务器，类似 `egret run` 功能，这是一个阻塞式插件，该插件后续其他插件不会执行，请确保该插件是您的构建管线的最后一步。

物理库，
1 / 2
