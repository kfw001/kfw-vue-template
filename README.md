# vuejs-templates/webpack

> 一个简单的vuejs开发模板，支持热重载，css提取，内置必要插件。方便开发者快速进行开发。

> 当前使用的是`vuejs 2.3.3`版本。

### 用法

> 推荐使用 `vue-cli` 进行安装使用

``` bash

# 安装vue-cli，已经安装请忽略此步骤。
$ npm install -g vue-cli

# 初始化项目
# 可以自己fork一份，使用自己的用户名代替和个性化开发。
$ vue init helloLaoYang/webpack your-project

# 安装依赖
$ npm install

# 开发环境
$ npm run dev

# 生产环境程序打包
$ npm run build

```
* 国内请使用淘宝镜像或者cnpm
* 本项目会监听8080端口，若机器此端口被占用，请修改`/config/index.js`中的端口号

### 目录结构详解

``` javascript

|   -- build                        // webpack工程目录，一般不需要更改
|   -- config                       // webpack配置文件目录
|   -- server                       // mockjs拦截服务项目
|   -- src                          // 源码目录
|       -- configs                  // 项目以及接口配置文件
|       -- components               // 组件集合文件夹
|       -- views                    // 路由组件文件夹
|       -- plugins                  // 插件集合
|       -- styles                   // css预编译变量以及mixins
|       main.js                     // 项目核心入口
|   -- .babelrc                     // babel配置文件
|   -- .gitignore                   // git配置文件
|   -- .postcssrc.js                // css前缀自动补全方案
|   -- index.html                   // html模板
|   -- package.json                 // 项目描述文件

```

### 插件文档

###### ajax请求集成方法文档

> 开发模板中集成了 [axios](https://github.com/mzabriskie/axios) 作为ajax请求的主要库。在vue原型中加入了两个方法。

> 接口配置文件`/src/configs/api.js`，axios配置文件`/src/plugins/axios/fn/config.js`

``` javascript

// post方法，用于post方式的ajax请求。
// 接收三个参数
// name 必填，类型字符串，来源于/src/configs/api.js中的api配置
// params 选填，必须为Object或者FormData。
// options 选填，类型Object，自定义的axios配置，可以做到文件上传获取上传进度。
const post = function( name, params, options ){
    // code
};

// get方法，用于get方式的ajax请求。
// 接收2个参数
// name 同上
// params只能为 Object
const get = function( name, params){
    // codo
};

```

> 样例1

``` javascript

export default {
    created(){
        this.$http.post('login', {
            user: 'admin',
            psd: '123456'
        }).then( ret => {
            console.log( ret );
        }).catch( err => {
            console.log( ret )
        });
    }
};

```
> 样例2

``` javascript

import Http from '@/plugins/axios';

export default {
    created(){
        Http.post('login', {
            user: 'admin',
            pwd: '123456'
        }).then( ret => {
            console.log( ret );
        }).catch( err => {
            console.log( ret )
        });
    }
};

```
###### vue-router

> 请查看 [vue-router中文文档](http://router.vuejs.org/zh-cn/)

###### vuex

> 请查看 [vuex中文文档](http://vuex.vuejs.org/zh-cn/)

### 最后

> 项目是对[vuejs-templates/webpack](https://github.com/vuejs-templates/webpack)的调整。

> 等研究了`ssr`，会考虑将服务端渲染加入样例，当然会另外开启一个仓库。
