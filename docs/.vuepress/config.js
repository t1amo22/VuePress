module.exports = {
    title: 'T1AMO',
    description: 'Just enjoying life',
    themeConfig: {
        sidebar: {
            '/foo/': [
              ['','入门'],    
              ['a','Markdown 拓展'],  
              ['b','b']   
            ],
      
            '/bar/': [
              ['','bar'],      
              ['c','c'], 
              ['d','d']   
            ],
      
            // fallback
            '/': [
              ['','home'] 
            ]
          },
        nav: [
          { text: 'Home', link: '/'},
          { text: 'learnnote', link: '/foo/' },
          { text: 'bar', link: '/bar/'},
          { text: 'Github', link: 'https://github.com/t1amo22'}
        ]
    },
    markdown: {
        lineNumbers: true
      }
}