<template>
  <div class="app">
    <input v-model="msg1" type="text" />
    <br />
    <input :value="msg2" @input="msg2=$event.target.value" type="text" >
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: '',
      msg2:''
    }
  },
}
</script>

<style>
</style>