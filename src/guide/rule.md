---
title: 記載ルール
lang: jp
meta:
    - last_edit_name: Miyaji
    - last_edit_date : 2022/09/14
---

|            |                                           |
| ---------- | :---------------------------------------: |
| 最終編集日 | {{ $frontmatter.meta[1].last_edit_date }} |
| 最終更新者 | {{ $frontmatter.meta[0].last_edit_name }} |




# ルール詳細




## 記載方法

基本的な記載方法はMarkdownの記載と一緒です。
統一したい内容・特殊なルールがある箇所を中心に以下、説明します。

### タイトルのレベル
### テーブル記法

- Exsample1

|             |          Grouping           ||
| First Header |     Second Header     |  Third Header |
| ------------ | :-------------------: | ------------: |
| Content      |      *Long Cell*      |               |
| Content      |       **Cell**        |          Cell |
| New section  |         More          | `Hello World` |
| And more     | With an escaped '\\|' |               |

- Exsample2

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
### 図解記法
### 数式記法
### vue独特の記法の利用

#### 計算をさせる
{{ 1 + 1 }}


#### ループさせる
<span v-for="i in 3">{{ i }}回 </span>


#### ページのMetaデータを利用する
$page.title: {{ $frontmatter.title }}

$page.lang: {{ $lang }}

$page.meta: {{ $frontmatter.meta[0].last_edit_name }}




