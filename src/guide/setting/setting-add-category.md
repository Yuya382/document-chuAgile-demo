---
title: カテゴリー追加方法
lang: jp
---
# カテゴリー追加方法

<EditMetaInfo/>


!!! abstract コレを読んでわかること
1.　新しいカテゴリーの追加ができるようになる
2.　サイドバーの設定ができるようになる
!!!


## カテゴリー追加

1. src直下にフォルダーを作成
2. 以下のように作成する
```
newFolder/
 - img/
 - README.md
 - page1.md
 - ...
```
3. src/.vuepress/config.jsを開く
4. themaConfigの項目に以下のように追加
```js{8-12}
themeConfig: {
    repo: 'https://github.com/Yuya382/document-chuAgile-demo',
    search: false,
    editLinks: true, // footerにページ編集用リンクをつける
    editLinkText: 'このページをgithubで編集',// 編集用リンクのテキスト
    docsBranch: 'main', // 編集リンクの遷移先ブランチ
    lastUpdated: true,
    nav: [
        {
        //こちらは任意の名称
        text: 'newFolder',
        //こちらはフォルダ名
        link: '/newFolder/',
      },
    
    ]

```


5. リロードして画面確認


## サイドバー設定
下記を参考に追加



```js
 sidebar: {
      //pathがガイドの時は
      '/guide/': [
        {
          title: '',//タイトル欄に「Guide」とだす
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            '',//README.mdを参照する
          ]
        },
        {
          title: '環境構築',
          collapsable: false,//True＝dropDownでまとめられる
          children: [
            'setting/environment',
            'setting/windows',
            'setting/mac',
            'setting/setting-add-category'
          ]
        },
        {
          title: 'ルール',
          collapsable: false,
          children: [
            'rules/script-rule.md',
            'rules/edit-rule',
          ]
        }
      ],
 }


```
