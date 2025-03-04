<template>
  <div>
    <h1>自定义指令</h1>
    <input type="text" v-focus>
  </div>
</template>

<script>
export default {
//局部作用域
directives:{
  focus:{
    inserted(el){
el.focus()
    }
  }
}
}
</script>

<style>

</style>