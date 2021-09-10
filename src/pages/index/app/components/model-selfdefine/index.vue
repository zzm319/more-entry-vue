<template>
  <!-- <div class="model-selfdefine"> -->
  <input type="checkbox" :checked="checked" @change="changeChecked" />
  <!-- </div> -->
</template>

<script>
export default {
  //   inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this)
  },
  methods: {
    changeChecked(e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>
