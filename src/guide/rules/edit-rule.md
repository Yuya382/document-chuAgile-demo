---
title: 記載ルール
lang: jp
meta:
    - last_edit_name: Miyaji
    - last_edit_date : 2022/09/28
---
# 編集ルール

|            |                                           |
| ---------- | :---------------------------------------: |
| 最終編集日 | {{ $frontmatter.meta[1].last_edit_date }} |
| 最終更新者 | {{ $frontmatter.meta[0].last_edit_name }} |


基本的な記載方法はMarkdownの記載と一緒です。
統一したい内容・特殊なルールがある箇所を中心に以下、説明します。

## タイトルのレベル

```markdown
# ページタイトル
## サブタイトル
### 項目
#### サブ項目
```

レベル4まで収める。
これ以上増える場合は可読性確保のため、分割することを進める。




## Markdown記載方法

### テーブル記法

- Exsample1:横方向の結合

|             |          Grouping           ||
| First Header |     Second Header     |  Third Header |
| ------------ | :-------------------: | ------------: |
| Content      |      *Long Cell*      |               |
| Content      |       **Cell**        |          Cell |
| New section  |         More          | `Hello World` |
| And more     | With an escaped '\\|' |               |

- Exsample2:縦方向の結合

|               col1 |  col2 |     col3 |
| -----------------: | ----: | -------: |
|        した2つ結合 | data1 |          |
|                 ^^ | data1 | 3--5 ATP |
| Pyruvaye oxidation | data1 |    5 ATP |
|        した3つ結合 | data1 |          |
|                 ^^ |       |   15 ATP |
|                 ^^ | data2 |    3 ATP |
|     **30--32** ATP |       |          |


### ラベル
ラベルについて


### 図解記法
mermaid.jsを利用して作成

```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```


### vue独特の記法の利用

#### 計算をさせる
1+1 = {{ 1 + 1 }}


#### ループさせる
3回ループする

<span v-for="i in 3">
- {{ i }}回<br>
</span>


#### ページのMetaデータを利用する
この機能を利用してヘッダー文字列を作成している

$page.title: {{ $frontmatter.title }}

$page.lang: {{ $lang }}

$page.meta: {{ $frontmatter.meta[0].last_edit_name }}



## 画像を利用


画像はページごとにimgフォルダを作成し格納

![data1](../img/data1.png)

これでpublic内を参照する。
public/は複数のページで利用する画像を格納する。

<img :src="$withBase('/logo.png')" alt="logo">