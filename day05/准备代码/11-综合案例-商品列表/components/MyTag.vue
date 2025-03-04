<template>
      <div class="my-tag">
            <input 
            v-if="isEdit"
                ref="inp"
               v-focus
                class="input"
                type="text"
                placeholder="输入标签"
               @blur="isEdit=false"
               :value="value"
               @keyup.enter="handerValue"
               /> 
              <div
              v-else
              @dblclick="isEdit=true"
              class="text">
                {{value}}
              </div>
            </div>
</template>

<script>
export default {
data(){
 return{
  isEdit:false

 } 
},
props:{
  value:String
},
methods:{
  handerValue(e){
    if(e.target.value==='')return alert('标签不能为空')
    this.$emit('input',e.target.value)
    this.isEdit=false
  }
}
// methods:{
//   handelfocus(){
//     this.isEdit=true
// this.$nextTick(()=>{
//   this.$refs.inp.focus()
// })  }
// }

}
</script>

<style lang="less" scoped>
 .my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
</style>