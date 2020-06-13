module.exports = {
    title: 'noirlyrik的博客',
    description: 'noirlyrik的博客',

    themeConfig: {
        nav: [
            { text: 'GitHub', link: 'https://github.com/noirlyrik'}
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
                    '/JavaScript/数据类型转换',
                    '/JavaScript/array',
                    '/JavaScript/20200604闭包',
                    '/JavaScript/prototype',   
                    '/JavaScript/原型链',                  
                ] 
            },
            { 
                title: 'Vue',
                path: '/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/Vue/vue入门',                 
                ] 
            },
        ],

        lastUpdated: 'Last Updated',
        smoothScroll: false,          
    },

    markdown: {
        lineNumbers: true
    },

    plugins: [
        [
            'vuepress-plugin-comment',
            {
            choosen: 'valine',
            options: {
                el: '#valine-vuepress-comment',
                appId: 'LkHcwhqjnKRX27wQ9SndPQVH-gzGzoHsz',
                appKey: 'ojD5hwRlu6Tz4xGK7y3L8he8',
                placeholder: '',
                path: ''
                }
            }
        ],

        ['@vuepress/back-to-top'],

        [
            '@vuepress/google-analytics',
            {
              'ga': 'UA-169000468-1' 
            }
        ]

    ]   
}