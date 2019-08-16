# vuese

> 借助这个插件，你可以通过下述的语法在导入已经存在的 *.vue 文件的同时，使用 Vuese 自动生成文档。


### install

```
yarn add markdown-it-vuese
```
### 配置
> config.js

```
    markdown: {
        config: (md) => {
            md.use(require('markdown-it-vuese'), { /* options */ })
        }
    }
```
