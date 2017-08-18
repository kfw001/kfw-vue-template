/**
 *  用于加载插件的位置
 *  @desc: 加载额外插件
 **/
// 取消点击延时
import './fastclick';
// 安装 axios作为ajax请求
import './axios';
// 安装初始化
import 'normalize.css';
// 安装字体图标
import './icons/iconfont.css';
// 安装输出vue-router
export { default as router } from './router';
// 安装输出vux
export { default as store  } from './store';
