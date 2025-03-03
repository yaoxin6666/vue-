<template>
  <!-- 主体区域 -->
  <section id="app">
  <TodoHeader @changeAdd="handerChange" ></TodoHeader>

    <!-- 列表区域 -->
   
    <TodoMain :list="list" @del="handerDel"></TodoMain>
    <!-- 统计和清空 -->
    <TodoFooter :list="list" @empty="Empty"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data () {
 
    return {
 list:JSON.parse(localStorage.getItem('list'))||[]
    }
  } ,
   components:{
      TodoHeader,
      TodoMain,
      TodoFooter
    },
    methods:{
      handerChange(newvalue){
this.list.unshift({id:+new Date() ,name:newvalue})

      },
      handerDel(id){
this.list=this.list.filter(item=>item.id!==id)
      },
      Empty(){
this.list=[]
      }
    },
    watch:{
      list:{
        deep:true,
        handler(newvalue){
          localStorage.setItem('list',JSON.stringify(newvalue))
        }
      }
      

    }
}
</script>

<style>

</style>
