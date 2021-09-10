<template>
  <div class="native-parent">
    <native @click.native="parentClick" @input="testMousedown">
      {{ age }}</native
    >
  </div>
</template>

<script>
import Native from '../../components/native/index.vue'
export default {
  components: { Native },
  data() {
    return {
      age: 21
    }
  },
  methods: {
    parentClick() {
      console.log(this.$listeners)
      console.log('parentClick')
    },
    testEmit() {
      console.log('testEmit')
    },
    testMousedown() {
      console.log(123)
    }
  }
}
</script>
