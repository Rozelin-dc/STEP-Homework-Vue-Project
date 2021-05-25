<template>
  <div>
    <h2>{{ title }}</h2>
    <div>{{ validInputExplanation }}</div>
    <input v-model="input" />
    <br />
    <button @click="doCalculate">計算</button>
    <button @click="doTest">テスト</button>
    <div>結果: {{ result }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'ExComponent',
})
export default class extends Vue {
  @Prop({ required: true, type: String }) title!: string
  @Prop({ required: true, type: String }) validInputExplanation!: string
  @Prop({ required: true, type: Function }) calculate!: (
    input: string
  ) => number | 'error'
  @Prop({ required: true, type: Function }) test!: () => 'OK' | 'NG'

  input = ''
  result: string | number = ''

  doCalculate() {
    this.result = this.calculate(this.input.replaceAll(' ', ''))
  }

  doTest() {
    this.result = this.test()
  }
}
</script>
