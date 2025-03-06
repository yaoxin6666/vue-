<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input @keyup.enter="GoSearch" type="text" v-model="inpValue">
      <button @click="GoSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <!-- 查询传参 -->
      <!-- <router-link to="/search?key=黑马程序员">黑马程序员</router-link>
      <router-link to="/search?key=前端培训">前端培训</router-link>
      <router-link to="/search?key=如何成为前端大牛">如何成为前端大牛</router-link> -->
      <!--  -->
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindMusic',
  data(){
    return{ inpValue:''

    }
  },
  methods:{
    GoSearch(){
      /* 通过路径传参 */
      // this.$router.push(`/search?word=${this.inpValue}`)
      // this.$router.push({
      //   path:'/search',
      //   query:{
      //     word:this.inpValue
      //   }
      // })
/* 通过路由名字传参 适合路径长的 */
// this.$router.push({
//   name:'Search'
// query:{参数名：参数值}
// params：{ 参数名：参数值}
// })
// 动态路由传参
// this.$router.push(`/search/${this.inpValue}`)
// this.$router.push({
//   path:`/search/${this.inpValue}`,

// })
this.$router.push({
  name:'Search',
query:{words:this.inpValue},
params:{words:this.inpValue},
})
    }
  }
}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('@/assets/logo.jpeg') no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>