# tip
```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

# 目录


```
[[toc]]
```

# 代码高亮

```
 js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
# 行号

```json
module.exports = {
  markdown: {
    lineNumbers: true
  }
}  
```
# 导入代码段

```
<<< @/filepath
```

# 自定义配置：插件

```json
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

# 表格
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```