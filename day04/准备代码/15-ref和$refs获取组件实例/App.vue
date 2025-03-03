<template>
  <div class="app">
    <h4>父组件 -- <button>获取组件实例</button></h4>
    <BaseForm ref="baseForm"></BaseForm>
      <button @click="getData">获取数据</button>
      <button @click="resetData">重置数据</button>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  components: {
    BaseForm,
  },
  methods: {
    getData(){
console.log(this.$refs.baseForm.getFormData);

    },
    resetData(){
      console.log(this.$refs.baseForm.resetFormData());
    }
  }
}
</script>

<style>
</style>