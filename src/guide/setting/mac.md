---
title: Mac環境設定
lang: jp
---
# Mac 環境設定

<EditMetaInfo/>


## Nodeの設定
### Zshの場合

<HelpEdit/>

### Bashの場合

<HelpEdit/>

### Fishの場合
1. nvmを設定します

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
fisher install jorgebucaran/fish-nvm
nvm -v
```

2. 指定VersionをInstallします

```bash

nvm install v16.15.1.
nvm use v16.15.1

```



## 共通

1. 依存パッケージをInstall


<code-group>

<code-block title="NPM" active>
```bash
npm install
```
</code-block>

<code-block title="YARN" >
```bash
yarn 
```
</code-block>

</code-group>







