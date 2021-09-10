<template>
  <div id="example-2">
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce" @before-enter="end">
      <p v-if="show">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        facilisis enim libero, at lacinia diam fermentum id.
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    end() {
      console.log(123)
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
