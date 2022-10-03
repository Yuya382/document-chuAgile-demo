# Introduction

<EditMetaInfo/>

サイトの全体設計を表します

## Directory Structure

フォルダー構成は以下のように実装

```
.
├── .git/
├── .gitignore
├── .vscode/
├── node_modules/
├── package-lock.json
├── package.json
├── src/
└── yarn.lock

```

srcフォルダ配下はページごとに作成

```
.
├── .DS_Store
├── .vuepress/
│  ├── components/
│  ├── config.js
│  ├── enhanceApp.js
│  ├── public/
│  ├── styles/
│  └── templates/
├── index.md                    //最初に表示するページ
├── markdown-template.md        //マークダウンのテンプレート
└── CategoryName/               //画面上部のカテゴリータブ名
   ├── img/　　　　　　　　　　　　 //画像フォルダー
   └── hoge.md               　 // 1ページに値する単位
```

## Categoryタブの設定
初期設定では以下の項目を作成
必要に応じて追加。
追加する際の手順は[こちら](setting/setting-add-category.md)を参照

| Name          | [L]ink/[D]irectory | 利用用途                                                                        |
| ------------- | :----------------: | ------------------------------------------------------------------------------- |
| /guide/       |         D          | 最初の設定方法や使い方、編集方法をまとめています。                              |
| /AppDesign/   |         D          | アプリケーションの開発ドキュメントを保存します                                  |
| /UIDesign/    |         D          | 画面デザインに関するドキュメントを保存します                                    |
| /Log/         |         D          | ログ設定・BigQueryのテーブル構造・データを抜き出す時のサンプルSQLを参照できます |
| /terminology/ |         D          | 用語集・PJでの独自ワードを保存します                                            |
| /QA/          |         D          | 質問があったことを随時、追加します                                              |
|               |         D          |                                                                                 |
|               |         D          |                                                                                 |
| Repository    |         L          | 設定したリポジトリに遷移します                                                  |



### Next:開発環境の構築方法

- [Windowsの設定方法](setting/windows.md)
- [Macの設定方法](setting/mac.md)

