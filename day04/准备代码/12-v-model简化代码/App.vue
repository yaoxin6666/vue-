<template>
  <div class="app">
    <BaseSelect v-model="selectId"></BaseSelect> <!-- 等价于:value="selectId"  @input="selectId=$event" -->
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style>
</style>