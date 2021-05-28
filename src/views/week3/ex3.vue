<template>
  <div>
    <h2>Week3</h2>
    <ex-component
      title="宿題3"
      valid-input-explanation="半角数字(小数含む)と+-*/()が入力可能。()前後の*は省略可能"
      :calculate="calculate"
      :test="test"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ExComponent from '@/components/week3/ex-component.vue'
import { mainEx3, testEx3 } from '@/scripts/week3/ex3'

@Component({
  name: 'Week3Ex3',
  components: {
    ExComponent,
  },
})
export default class extends Vue {
  calculate = mainEx3
  test = testEx3
}
</script>
