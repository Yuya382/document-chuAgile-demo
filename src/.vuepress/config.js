const { description } = require('../../package')

module.exports = {
  /**
   * title
   * 案件名などにしておくといい
   */
  title: '中ゼミアジャイル デモサイト',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'demo',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  dest: 'dist',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    search: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        //ヘッダーのページング
        text: 'Guide',
        link: '/guide/',
      },
      {
        //ヘッダーのページング
        text: 'Config',
        link: '/config/'
      },
      {
        //外部サイトへのリンク
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
      ,
      {
        //外部サイトへのリンク
        text: 'Repository',
        link: 'https://github.com/Yuya382/document-chuAgile-demo'
      }
    ],
    //sideBarの設定
    sidebar: {
      //pathがガイドの時は
      '/guide/': [
        {
          title: 'Guide',//タイトル欄に「Guide」とだす
          collapsable: true,//True＝dropDownでまとめられる
          children: [
            '',//空白でREADMEを参照
            'using-vue'
          ]
        }
        ,
        {
          title: 'Rule',//タイトル欄に「Guide」とだす
          collapsable: false,
          children: [
            'rule'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@renovamen/vuepress-plugin-mermaid',
  ],

  /**
   * 
   */
  configureWebpack: {
    resolve: {
      //alias設定
      alias: {
        '@': '../.vuepress/public'
      }
    }
  },
  markdown: {
    plugins: {
      'multimd-table': {
        rowspan: true,
        colspan: true,
      },
      'task-lists': {
      }
    }
  }
}
