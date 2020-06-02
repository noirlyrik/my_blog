module.exports = {
    title: 'noirlyrik的博客',
    description: 'noirlyrik的博客',

    themeConfig: {
        nav: [
            { text: 'GitHub', link: 'https://github.com/noirlyrik/noirlyrik.github.io'}
        ],

        sidebar: [
            { 
                title: 'HTML',
                path: '/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/HTML/HTML5入门'
                ]
            },
            { 
                title: 'CSS',
                path: '/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/CSS/CSS布局入门',
                ] 
            },
            { 
                title: 'JavaScript',
                path: '/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/JavaScript/array',
                    '/JavaScript/prototype',                   
                ] 
            },
        ],


        lastUpdated: 'Last Updated',
        smoothScroll: false,
        markdown: {
            lineNumbers: true
        },

        valineConfig: {
            appId: '',
            appKey: '',
        }
      
    }
}