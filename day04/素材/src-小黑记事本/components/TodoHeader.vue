<template>
    <!-- 输入框 -->
    <header class="header">
      <h1>小黑记事本</h1>
      <input @keyup.enter="changeAdd" v-model="value" placeholder="请输入任务" class="new-todo" />
      <button @click="changeAdd" class="add">添加任务</button>
    </header>
</template>

<script>
export default {
data(){
  return{
     value:''
  }
 
},
methods:{
  changeAdd(){
    if(this.value.trim()===''){
       alert('请输入正确的任务名')
       return
    }
   
    this.$emit('changeAdd',this.value)
    this.value=''
  }
}
}
</script>

<style>

</style>