<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>


export default {
  data () {
    return {
      color1:'red',
      color2:'blue'
    }
  },
  directives:{
color:{
  //元素添加到页面时的逻辑
inserted(el,binding){
  // binding.value就是指令的值
el.style.color=binding.value
},
//指令修改时触发，提供值变化后，dom更新的逻辑
update(el,binding){
  el.style.color=binding.value
}
  }
}
}
</script>

<style>

</style>