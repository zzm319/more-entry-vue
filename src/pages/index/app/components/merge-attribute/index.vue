<template>
  <div class="merge-attribute">
    <input type="date" class="form-control" v-bind="$attrs" />
  </div>
</template>

<script>
// import { defineComponent } from 'vue'
export default {
  inheritAttrs: false,
  created() {
    console.log(this.inheritAttrs)
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
