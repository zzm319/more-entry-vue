<template>
  <div id="demo">
    <button @click="show = !show">Toggle</button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
