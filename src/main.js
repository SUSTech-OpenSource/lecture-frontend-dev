
import { createApp } from 'vue'
//导入ElementUI
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 引入Vue-Router
import { createRouter, createWebHistory } from 'vue-router'
// 页面
// import HelloWorld from "@/components/HelloWorld";
import elementui from "@/components/elementui";
import App from "@/App";
import Home from "@/components/Home";
import button from "@/components/button";
import life from "@/components/life";

// 路由表
const routes = [
    {path: '/',redirect:'/home'},
    {path: '/home',name:'Home',component: Home},
    {path:'/elementui',name:"element",component:elementui},
    {path: '/button',name: 'button',component: button},
    {path: '/life',name: 'life',component: life}
]
// 路由实例化
const router = createRouter({
    routes,
    //router的history模式
    history:createWebHistory(),
})


//创建vue应用，一个use代表一个新增组件
const app = createApp(App)
app.use(router)
app.use(ElementPlus, { size: 'small', locale: zhCn })
app.mount('#app')

