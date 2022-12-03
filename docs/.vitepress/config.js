import {
  defineConfig
} from 'vitepress'


export default {
  title: 'VitePress',
  base:'/docs/',
  description: '练练不会前端.',
  head: [['meta', { name: 'keywords', content: 'HTML, CSS, JavaScript' }]],
  themeConfig: {
    logo: '/tuzi.png',
    siteTitle: '练练',
    docFooter: { prev: '上一篇', next: '下一篇' },
    nav: [{
        text: "指南",
        link: "/guild/1",
      },
      {
        text: "组件",
        link: "/examples/3"
      },
      {
        text: '下拉选择框',
        items: [
          { text: 'options-1', link: '/' },
          { text: 'options-2', link: 'http://www.baidu.com' }
        ]
      }
    ],
    sidebar: {
      "/guild/": [
        {
          text: "jsday1",
          items: [
            {
              text: "安装",
              link: "/guild/JSday1",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/examples/": [
        {
          text: "测试内容",
          items: [
            {
              text: "滴滴滴滴",
              link: "/examples/1",
            },
            {
              text: "大大大的",
              link: "/examples/2",
            },
          ],
        },
      ],
      
    },
    socialLinks: [{
      icon: "github",
      link: "https://gitee.com/geeksdidi"
    }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }

  },


}