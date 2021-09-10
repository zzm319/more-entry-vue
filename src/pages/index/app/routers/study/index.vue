<template>
  <div class="index">
    <div>good good study, day day up!!!</div>
    <custom-input v-model="searchText" :test-value="testValue" title="准备下班"
      >123</custom-input
    >
    <merge-attribute
      class="date-picker-theme-dark"
      placeholder="请输入日期"
    ></merge-attribute>

    <model-selfdefine v-model="flag"></model-selfdefine>
  </div>
</template>

<script>
import CustomInput from './../../components/custom-input'
import MergeAttribute from '../../components/merge-attribute'
import ModelSelfdefine from '../../components/model-selfdefine'
export default {
  data() {
    return {
      searchText: '',
      testValue: 'vue',
      flag: true
    }
  },
  components: { CustomInput, MergeAttribute, ModelSelfdefine },
  created() {
    console.log('study', this)
  }
}
</script>
