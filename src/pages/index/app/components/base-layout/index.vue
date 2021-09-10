<template>
  <div class="container">
    {{ $root.seaId }}
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$parent.age)
    setTimeout(() => {
      this.$root.seaId = 2
    }, 2000)
  }
}
</script>

<style lang="less" scoped>
footer {
  color: red;
}
</style>
