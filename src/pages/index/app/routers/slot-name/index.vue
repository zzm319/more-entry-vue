<template>
  <div class="slot-name">
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
      <div>我就试试位置有没有问题</div>
    </base-layout>
    {{ age }}
  </div>
</template>

<script>
import BaseLayout from '../../components/base-layout/index.vue'
export default {
  components: { BaseLayout },
  data() {
    return {
      age: 18
    }
  }
}
</script>
