<template>
  <div class="native" @click="onNative">
    123456
    <input v-on="$listeners" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    onNative() {
      console.log('onnative', this.$listeners)
      this.$emit('cutom-click')
    }
  }
}
</script>
