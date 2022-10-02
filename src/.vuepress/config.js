const { description } = require('../../package')

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
    ["link", { rel: "stylesheet", href: "/main.css" }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  locales: {
    "/": {
      lang: "ja",
      title: "中ゼミアジャイル デモサイト-Local-",
      description: " Description",
      head: [
        ["meta", { property: "og:title", content: "中ゼミアジャイル デモサイト-Local-" }],
        // ["link", { rel: "stylesheet", href: "/main.css" }],
        ["meta", { property: "og:locale", content: "ja" }],
        ["meta", { property: "og:type", content: "website" }]
      ],
    },
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  lang: "ja",
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
    repo: 'https://github.com/Yuya382/document-chuAgile-demo.git',
    editLinks: false,
    search: false,
    docsDir: '',
    editLinkText: '',
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
        text: 'QA',
        link: '/QA/',
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
            'setting/setting-windows',
            'setting/setting-mac',
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
      '/QA/': [
        {
          title: '',
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            ''
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
