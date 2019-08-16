module.exports = {
    markdown: {
        config: (md) => {
            md.use(require('markdown-it-vuese'), { /* options */ })
        }
    },
    title: 'T1AMO',
    description: 'Just enjoying life',
    themeConfig: {
        displayAllHeaders: true,
        sidebar: {
            '/foo/': [
              ['','入门'],    
              ['markdown','Markdown 拓展'],  
              ['basic','配置'],
              ['vuese','vuese插件']      
            ],
      
            '/bar/': [
              ['','demo'],
              ['use','源码']
            ],
      
            // fallback
            '/': [
              ['','home'] 
            ]
          },
        nav: [
          { text: 'Home', link: '/'},
          { text: 'learnnote', link: '/foo/' },
          { text: 'demo', link: '/bar/'},
          { text: 'Github', link: 'https://github.com/t1amo22'}
        ]
    },

}