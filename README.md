## 使用言語

TypeScript(Node.js 12.18.0)

Vue.js(@vue/cli 4.5.10)

※WindowsではTypeScriptのコードは標準入力を受け付けられない為、Vue.jsと組み合わせて、ブラウザ上で任意の入力を受け付けられるようにした

## 概要

メインのコードは[./src/scripts](./src/scripts)以下にある

- [./src](./src)
  - [/components](./src/components)
    - [/week3](./src/component/week3)：3週目の宿題
      - [ex-component.vue](./src/components/week3/ex-component.vue)：宿題1~3共通で使うvueコンポーネント
  - [/scripts](./src/scripts)
    - [/week3](./src/scripts/week3)：3週目の宿題
      - [type.ts](./src/scripts/week3/type.ts)：共通で使う型を定義したファイル
      - [utils.ts](./src/scripts/week3/utils.ts)：共通で使う関数を定義したファイル
      - [ex1.ts](./src/scripts/week3/ex1.ts)：宿題1のコード
      - [ex2.ts](./src/scripts/week3/ex2.ts)：宿題2のコード(宿題1のテスト)
      - [ex3.ts](./src/scripts/week3/ex3.ts)：宿題3のコード
  - [/views](./src/views)
    - [/week3](./src/views/week3)：3週目の宿題
      - [ex1-ex2.vue](./src/views/week3/ex1-ex2.vue)：宿題1･2のページ
      - [ex3.vue](./src/views/week3/ex3.vue)：宿題3のページ
- [./documents](./documents)
  - [week3.md](./documents/week3.md)：3週目の宿題のドキュメント

## 実行方法

配信URL：https://rozelin-dc.github.io/STEP-Homework-Vue-Project

### 3週目の宿題

各ページの入力欄に数式を入力し、「計算」を押すと計算結果が表示される。「テスト」を押すと、入力に関係なくテストが実行され、その結果が表示される。入力可能な文字は各入力欄の上に書いてあるとおり

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
