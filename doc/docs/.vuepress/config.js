module.exports = {
    base: '/report-doc/',
    title: 'AJ-Report',
    description: '使用拖拽快速生成动态大屏报表',
    dest: 'dist',
    lastUpdated: 'Last Updated',
    theme: '',
    themeConfig: {
        logo: '/logo.png',
        smoothScroll: true,
        sidebarDepth: 2,
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: 'GitHub', link: 'https://github.com/anji-plus/report'},
            {text: 'Gitee', link: 'https://gitee.com/anji-plus/report'},
            {text: '谁在使用', link: '/guide/briefUsing'},
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '介绍',
                    collapsable: false,
                    children: [
                        {title: '简介', path: '/guide/'},
                        {title: '谁在使用', path: '/guide/briefUsing'},
                        {title: '技术支持', path: '/guide/briefSupport'},
                    ]
                },
                {
                    title: '快速入门',
                    collapsable: false,
                    children: [
                        {title: '开发环境', path: '/guide/quicklyDevelop'},
                        {title: '发行版部署', path: '/guide/quicklyDistribution'},
                        {title: '源码部署', path: '/guide/quicklySource'},
                        {title: '前后端分离', path: '/guide/quicklySeparate'},
                    ]
                },
                {
                    title: '用户权限',
                    collapsable: false,
                    children: [
                        {title: '权限管理', path: '/guide/authmanager'},
                    ]
                },
                {
                    title: '操作手册',
                    collapsable: false,
                    children: [
                        {title: '数据源', path: '/guide/datasource'},
                        {title: '数据集', path: '/guide/dataset'},
                        {title: '大屏设计', path: '/guide/dashboard'},
                    ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                        {title: '常见问题', path: '/guide/question'}
                    ]
                }],
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@': '/.vuepress/public'
            }
        }
    }
}
