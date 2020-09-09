module.exports = {
    title: 'Julia 的博客',
    description: 'Julia 的博客',

    themeConfig: {
        nav: [
            { text: 'GitHub', link: 'https://github.com/noirlyrik/noirlyrik.github.io'}
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        smoothScroll: false, 
        nextLinks: true,
        prevLinks: true         
    },

    markdown: {
        lineNumbers: false
    },

    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/google-analytics',
            {
              'ga': 'UA-169000468-1' 
            }
        ]

    ]   
}