<template>
  <div class="parse-dom">
    <ul>
      <blog-post></blog-post>
    </ul>
  </div>
</template>

<script>
import BlogPost from './../../components/blog-post/index.vue'
export default {
  components: { BlogPost }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
