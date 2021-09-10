<template>
  <div class="custom-input">
    <input type="text" :value="value" @input="onInput" />
    <input type="text" :value="value2" @input="onInputtwo" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    value2: {
      type: String,
      default: ''
    },
    title: {
      default: '今日头条',
      type: String
    }
  },
  data() {
    return {}
  },
  created() {
    console.log(this.testValue)
    console.log(this.title)
  },
  methods: {
    onInput($event) {
      this.$emit('input', $event.target.value)
    },
    onInputtwo($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
