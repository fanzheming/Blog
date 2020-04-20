const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')
const nav = require('./config/nav/')

module.exports = {
  // 必须和仓库名一致
  base: '/Blog/',
  // 打包的目录
  dest: 'blog',
  locales: { '/': { lang: 'zh-CN' } },
  // 主题
  theme: 'reco',
  title: "RainyDay",
  description: '记录生活的点滴时光',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#409EFF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/cat.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/cat.svg', color: '#409EFF' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/cat.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // 主题配置
  themeConfig: {
    type: 'blog',
    huawei: false,
    nav,
    sidebar,
    friendLink: [
      {
        title: '花音的个人随笔',
        desc: '生活明朗，万物可爱。人间值得，未来可期',
        // email: '',
        link: 'https://huayin334.github.io/my-blog/'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    logo: '/head1.png',
    // 搜索设置
    search: true,
    // 搜索结果最多展示项数
    searchMaxSuggestions: 10,
    // 侧边栏深度
    sidebarDepth: 2,
    displayAllHeaders: false,
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 作者
    author: 'fanzheming',
    // 头像
    authorAvatar: '/head1.png',
    // 备案
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间
    startYear: '2020',
    // vssue评论功能
    vssueConfig: {
      platform: 'github-v4',
      owner: 'fanzheming',
      repo: 'Blog',
      clientId: 'a1a26b26dfe555844fe1',
      clientSecret: 'd2615c5a75ee6a637ce635821b81b53dcc7a8344',
      autoCreateIssue: true,
      locale: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins
}  