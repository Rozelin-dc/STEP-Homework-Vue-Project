<template>
  <div class="home">
    <h1>STEP Homework Vue Project</h1>
    <div>
      View on
      <a href="https://github.com/Rozelin-dc/STEP-Homework-Vue-Project"
        >GitHub</a
      >
    </div>
    <div>
      <h2>About Week3</h2>
      <div>
        各ページの入力欄に数式を入力し、「計算」を押すと計算結果が表示される
      </div>
      <div>
        「テスト」を押すと、入力に関係なくテストが実行され、その結果が表示される
      </div>
      <div>入力可能な文字は各入力欄の上に書いてあるとおり</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Home',
})
export default class Home extends Vue {}
</script>
