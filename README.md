# yq官网 1.0
> yq官网web端、移动端

## Build Setup
``` bash
# 新建.env.local(私有)文件
apiUrl=接口地址
baseUrl=站点Url或者子目录

# 安装依赖
npm install
安装失败使用 cnpm install 或代理进行安装

# 开发构建 http://ip:端口（8080）
npm run serve

# 生产构建
npm run build
```

## 注意事项
* 非全局组件样式表必须使用 **“scoped”**
* iconfont图标尽量使用 **“Font class”** 字符
* API尽量书写[js-doc](http://www.css88.com/doc/jsdoc/)
* API权限验证开关
    ``` base
    {
        Authorization: true
    }
    ```
* 路由权限验证开关
    ``` base
    meta: {
        Authorization: true
    }
    ```
* 路由必须使用 **“name”** 进行跳转
