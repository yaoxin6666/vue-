<template>
  <footer class="footer">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong> {{List.length}} </strong></span>
      <!-- 清空 -->
      <button @click="empty" class="clear-completed">
        清空任务
      </button>
    </footer>
</template>

<script>
export default {
props:{
  List:Array
},methods:{
  empty(){
    this.$emit('empty')
  }
}
}
</script>

<style>

</style>