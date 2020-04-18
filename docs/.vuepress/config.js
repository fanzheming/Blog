module.exports = {
  base: '/Blog/',
  dest: 'blog',
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
    ['link', { rel: 'apple-touch-icon', href: '/icons/LatteAndCat.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/LatteAndCat.svg', color: '#409EFF' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/LatteAndCat.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    type: 'blog',
    huawei: false,
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '杂记', link: '/about/', icon: 'reco-document' },
      {
        text: '联系我',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/fanzheming', icon: 'reco-github' },
        ]
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
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 作者
    author: 'fanzheming',
    authorAvatar: '/head1.png',
    // 备案号
    // record: '豫ICP备19035192号',
    // recordLink: 'http://www.beian.miit.gov.cn/',
    // cyberSecurityRecord: '豫公网安备41172602000151号',
    // cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41172602000151',
    // 项目开始时间
    startYear: '2020',
    // vssue评论功能
    vssueConfig: {
      platform: 'github',
      owner: 'fanzheming',
      repo: 'Blog',
      clientId: 'a1a26b26dfe555844fe1',
      clientSecret: '8b6e99e09de01599507a5c3ac35a8b9c0ab6ccdf',
      autoCreateIssue: true,
      locale: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['shizuku','haru2', 'blackCat', 'whiteCat', 'haru1', , 'haruto', 'koharu', 'izumi','wanko', 'miku', 'z16'],
        messages: {
          welcome: '欢迎来到',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '你知道我喜欢吃什么吗？痴痴地望着你。'
        },
        width: 200,
        height: 470,
        modelStyle: {
          position: 'fixed',
          right: '110px',
          bottom: '20px',
          opacity: '0.9'
        },
        messageStyle: {
          position: 'fixed',
          right: '110px',
          bottom: '370px'
        },
        btnStyle: {
          bottom: '60px',
          right: '80px'
        }
      }
    ],
    [
      '@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale('zh-cn')  //中文
          return moment(timestamp).format('llll') // 2020年4月16日星期四 14:57
        }
      }
    ],
    [
    '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }
    ]
  ]
}  