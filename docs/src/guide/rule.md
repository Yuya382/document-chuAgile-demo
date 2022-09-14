---
title: ユニークな名前をつけてあげよう
lang: jp
meta:
    - last_edit_name: Miyaji
    - last_edit_date : 2022/09/14
---


# ルール詳細

## 記載方法

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>


$page.title: {{ $frontmatter.title }}

$page.lang: {{ $lang }}

$page.meta: {{ $frontmatter.meta[0].last_edit_name }}




|             |          Grouping           ||
| First Header |     Second Header     |                                                                                                                                                     Third Header |
| ------------ | :-------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Content      |      *Long Cell*      |                                                                                                                                                                  |
| Content      |       **Cell**        |                                                                                                                                                             Cell |
| New section  |         More          | aaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaDataaaaaaaData |
| And more     | With an escaped '\\|' |                                                                                                                                                                  |


|              Stage | Direct Products | ATP Yields |
| -----------------: | --------------: | ---------: |
|         Glycolysis |           2 ATP |            |
|                 ^^ |          2 NADH |   3--5 ATP |
| Pyruvaye oxidation |          2 NADH |      5 ATP |
|  Citric acid cycle |           2 ATP |            |
|                 ^^ |          6 NADH |     15 ATP |
|                 ^^ |         2 FADH2 |      3 ATP |
|     **30--32** ATP |                 |            |