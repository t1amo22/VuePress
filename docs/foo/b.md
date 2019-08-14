# vuepress

> 静态网站生成器，内置webpack，可以用来写文档

### 安装

```
yarn add -D vuepress
```



```
mkdir docs
```
新建一个 markdown 文件

```
echo '# Hello VuePress!' > docs/README.md
```
开始写作
```
npx vuepress dev docs
```
接着，在 package.json 里加一些脚本:

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
然后就可以开始写作了:

```
yarn docs:dev
```
要生成静态的 HTML 文件

```
yarn docs:build 
```
默认情况下，文件将会被生成在 .vuepress/dist，当然，你也可以通过 .vuepress/config.js 中的 dest 字段来修改,生成的文件可以部署到任意的静态文件服务器上
