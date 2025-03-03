<template>
  <div class="app">
    <div class="base-chart-box" style="width: 300px;height: 300px;">
      这是一个捣乱的盒子
    </div>
    <BaseChart></BaseChart>
  </div>
</template>

<script>
import BaseChart from './components/BaseChart.vue'
export default {
  components:{
    BaseChart
  }
}
</script>

<style>
.base-chart-box {
  width: 200px;
  height: 100px;
}
</style>