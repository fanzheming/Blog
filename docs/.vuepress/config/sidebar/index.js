//侧边栏
module.exports = {
    '/views/': [
        {
            title: '其它',
            collapsable: true,
            children: [
                '其它/markdown语法',
                '其它/小知识'
            ]
        },
        {
            title: '前端',
            collapsable: true,
            children: [
                '前端/localStorage变动监听',
                '前端/Grid布局笔记'
            ]
        }
    ]
}	