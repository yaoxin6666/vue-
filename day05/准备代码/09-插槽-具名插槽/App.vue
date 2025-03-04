<template>
  <div>
    <MyDialog>
      <template v-slot:head>
       <div>欢迎光临</div>
      </template>
      <!-- 姚鑫666 -->
       <template v-slot:content>
        姚鑫666
       </template>
       <template #footer> 
        姚鑫牛牛牛
       </template>
    </MyDialog>
    <MyDialog></MyDialog>

  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>