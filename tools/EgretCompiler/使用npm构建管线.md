---
title: 使用npm构建管线
createTime: 2024/09/11 17:47:35
permalink: /docs/tools/EgretCompiler/usenpm/
---
除了通过 egret build 命令运行，egret-webpack-bunlder 也可以直接使用 npm 脚本执行，不采用白鹭的构建管线，具体方式如下：

1.  在根目录下创建一个文件夹，建议命名为 build
2.  在该文件夹下执行如下逻辑

```js
npm init 
npm  install webpack webpack-dev-server webpack-cli @egret/egret-webpack-bundler --save-dev --registry https://registry.npm.taobao.org
```

> info 这样做是为了避免在白鹭项目根目录下创建 package.json 文件。  
> 当执行 egret build 时候，根目录中中包含 package.json 文件，则会将这个项目认为是一个白鹭的库项目。  
> 为了避开这个机制，所以需要创建一个子文件夹中。

1.  在该文件夹下添加一个名为 `webpack.config.js` 的配置文件，内容如下：

```js
//@ts-check
const path =  require("path");
const bundler =  require("@egret/egret-webpack-bundler");
const projectRoot = path.resolve(__dirname,  "../");
const config = bundler.generateConfig(projectRoot,  {
 libraryType:  "debug"
},  "web",  false);
module.exports  = config;
```

4.  修改 `build/package.json` 文件，添加如下内容:

```js
{
  "scripts":{
  "start":"webpack-dev-server",
  "build":"webpack"
  }
}
```

1.  在 build 文件夹下执行 `npm run start` 或 `npm run build`