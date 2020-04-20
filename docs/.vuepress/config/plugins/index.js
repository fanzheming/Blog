module.exports = [
    // 看板娘
    // [
    //     '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    //     {
    //         theme: ['shizuku', 'haru2', 'blackCat', 'whiteCat', 'haru1', , 'haruto', 'koharu', 'izumi', 'wanko', 'miku', 'z16'],
    //         messages: {
    //             welcome: '欢迎来到',
    //             home: '心里的花，我想要带你回家。',
    //             theme: '好吧，希望你能喜欢我的其他小伙伴。',
    //             close: '你知道我喜欢吃什么吗？痴痴地望着你。'
    //         },
    //         width: 200,
    //         height: 470,
    //         modelStyle: {
    //             position: 'fixed',
    //             right: '110px',
    //             bottom: '20px',
    //             opacity: '0.9'
    //         },
    //         messageStyle: {
    //             position: 'fixed',
    //             right: '110px',
    //             bottom: '370px'
    //         },
    //         btnStyle: {
    //             bottom: '60px',
    //             right: '80px'
    //         }
    //     }
    // ],
    // 最近更新时间
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
    ],
    // 平滑滚动
    ['vuepress-plugin-smooth-scroll'],
    // 自定义容器 你可以多次使用这个插件
    [
        'vuepress-plugin-container',
        {
            type: 'right',
            defaultTitle: '',
        },
    ],
    [
        'vuepress-plugin-container',
        {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        },
    ],
    // vuepress-plugin-flowchart 流程图
    'flowchart'
]