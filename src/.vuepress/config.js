const { description } = require('../../package')

require('dotenv').config();

module.exports = {
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { property: "og:title", content: "中ゼミアジャイル デモサイト" }],
    ["link", { rel: "icon", size: "192x192", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#ff0000" }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  lang: "ja",
  theme: 'cool',
  title: "中ゼミアジャイル ドキュメントデモサイト",
  description: 'demo-site',
  dest: 'docs/',
  base: '/document-chuAgile-demo/',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Yuya382/document-chuAgile-demo',
    search: false,
    editLinks: true, // footerにページ編集用リンクをつける
    editLinkText: 'このページをgithubで編集',// 編集用リンクのテキスト
    docsBranch: 'main', // 編集リンクの遷移先ブランチ
    lastUpdated: true,
    nav: [
      {
        //ヘッダーのページング
        text: 'Guide',
        link: '/guide/',
      },
      {
        //ヘッダーのページング
        text: 'アプリ設計書',
        link: '/AppDesign/',
      },
      {
        //ヘッダーのページング
        text: '画面デザイン',
        link: '/UIDesign/',
      },
      {
        //ヘッダーのページング
        text: '用語集',
        link: '/terminology/'
      },
      {
        //ヘッダーのページング
        text: 'ログ設計書',
        link: '/Log/',
      },
      {
        //ヘッダーのページング
        text: 'About',
        link: '/About/',
      }
    ],
    //sideBarの設定
    sidebar: {
      //pathがガイドの時は
      '/guide/': [
        {
          title: '',//タイトル欄に「Guide」とだす
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            '',
          ]
        },
        {
          title: '環境構築',
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            'setting/environment',
            'setting/windows',
            'setting/mac',
          ]
        },
        {
          title: 'ルール',
          collapsable: false,
          children: [
            'rules/commit-rule',
            'rules/edit-rule',
          ]
        }
      ],
      '/terminology/': [
        {
          title: '',
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            ''
          ]
        },
      ],
      '/AppDesign/': [
        {
          title: '',
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            ''
          ]
        },
      ],
      '/UIDesign/': [
        {
          title: '',
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            ''
          ]
        },
      ],
      '/About/': [
        {
          title: 'About',
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            'about',
            'release-note',
          ]
        },
      ],
      '/Log/': [
        {
          title: '',
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            'BigQuery-TableDesign',
            'BigQuery-SQLSample'
          ]
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@renovamen/vuepress-plugin-mermaid',
    '@vuepress/last-updated',
    'git-log', {
      additionalArgs: '--no-merge',
      onlyFirstAndLastCommit: true,
    },
  ],

  configureWebpack: (config) => {
    // config.output.publicPath = 'https://yuya382.github.io/document-chuAgile-demo/'
    config.output.publicPath = './'
    config.resolve.alias['@'] = '../.vuepress/public'
  },

  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    },
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
