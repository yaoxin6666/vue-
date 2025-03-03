<template>
  <section class="main">
     <ul class="todo-list">
        <li v-for="(item,index) in list" :key="item.id" class="todo">
          <div class="view">
            <span class="index">{{index+1}}.</span> <label>{{ item.name }}</label>
            <button class="destroy" @click="handerDel(item.id)"></button>
          </div>
        </li>
      </ul>
    </section>  
</template>

<script>
export default {
props:{
  list:Array
},
methods:{
handerDel(id){
  this.$emit('del',id)
}
}

}
</script>

<style>

</style>