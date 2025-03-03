<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件{{ title }} 
    <button @click="changeFn">修改</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 2.通过props来接受
  props:['title'],
  methods:{
    changeFn(){
      this.$emit('changeTitle','姚鑫666')
    }
  } 
}
</script>

<style>
button{
  height: 50px;
  width: 50px;
}
</style>