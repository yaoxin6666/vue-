2025/2/26
学习了:
1.插值表达式，
注意点：使用的数据要存在
支持表达式，而非语句
不能在标签属性中使用，例如name="  "
2.vue响应式
数据改变，视图自动更新
实例.属性名  访问数据
实例.属性名=" " 修改数据
3.开发者工具安装
4.vue指令:本质：v-开头的特殊属性，不同属性对应不同功能
v-开头的特殊标签
v-html：设置innerHtml
v-html="str"
v-show：控制元素css属性的display显示隐藏
v-if：控制元素的创建与移除
v-else、v-else-if：辅助v-if进行判断渲染，需要紧跟着v-if使用
v-on：注册事件 = 添加监听+提供处理逻辑
用法一：v-on:事件名="内联语句"等价于@事件名="内联语句",@click="num++"
用法二：v-on：事件名="methods中的函数名"等价于@事件名="methods函数名"
v-on参数传递：@事件名="函数（参数名）"
2025/2/27
v-bind：等价于:属性名="表达式"可以动态设置标签属性
样式控制
操作类名
:class="{类名1:布尔值,类名2:布尔值}"true加该类名，false去掉该类名,适用于一个类名来回切换
:class="['类名1'，'类名2'，...]"，本质上是class列表，适用于批量添加或删除class
操作style样式，修改行内样式，适用于修改某个具体属性
:style="{css属性名1:css属性值，css属性名2:css属性值}",属性名不可以使用特殊符号，可以使用驼峰命名法来替代
v-for：基于数据循环，多次渲染整个元素
v-for="(item,index) in 数组"item数组的每一项，index数组的下标
v-for中的key：给元素添加唯一标识，便于vue进行正确的排序复用
key的值只能是字符串和数字类型
key的值必须具有唯一性
v-model：给表单元素使用，双向数据绑定，可以快速获取 设置表单元素内容
可以根据表单类型动态更新input:text,textarea,select-->value;input:checkbox,input:radio-->checked
指令修饰符：
@keyup.enter="方法",抬起按键的时候，执行方法
v-model修饰符：.trim(清楚首尾空格),.number（转换为数字型）
@事件名.prevent 属性="方法或执行语句"，阻止事件默认行为
计算属性：computed
基于现有数据，计算出来的新属性，依赖数据变化，自动重新计算，多次调用只执行一次
声明在computed配置项中，一个计算属性对应一个函数，使用起来跟普通属性一样
需要返回值
computed和methods的区别：
computed有缓存，一旦计算出来结果，就会立刻缓存，下一次读取，直接读缓存就行
methods每次调用都会独立执行
2025/2/28
计算属性的完整方法：
计算属性:{
get(){
//执行逻辑

return
}
set(){
//执行逻辑
}
}
watch监听：：监视数据变化，执行一些业务逻辑或异步操作。
语法
简写版：简单数据类型直接监听
data: {
 obj: {
 words: '苹果',
 lang: 'italy'
 },
 }
watch: {
 // 该方法会在数据变化时，触发执行
数据属性名 (newValue, oldValue) {
一些业务逻辑 或 异步操作。
},
 '对象.属性名' (newValue, oldValue) {
一些业务逻辑 或 异步操作。
}
 }
 完整版：添加额外配置项，直接传入一个对象
 ata: {
 obj: {
 words: '苹果',
 lang: 'italy'
 },
 },
 watch: {// watch 完整写法
数据属性名: {
 deep: true, // 深度监视
immediate: true, // 是否立刻执行一次handler
 handler (newValue) {
 console.log(newValue)
 }
 }
 }
vue生命周期：一个vue实例从创建到销毁的全过程
生命周期的四个阶段：创建（响应式数据）->挂载（渲染模板）->更新（数据修改<==>更新视图）->销毁（销毁实例）
创建阶段就可以发送初始化渲染请求，挂载阶段可以开始操作dom
生命周期钩子：Vue生命周期过程中，会自动运行一些函数，被称为【生命周期钩子】→  让开发者可以在【特定阶段】运行自己的代码。共八个四对
beforeCreate（），created（）， beforeMount（），mounted（）， beforeUpdate（），updated(), beforeDestroy(),destroyed()
 钩子函数要和data在同一层面
      // 1. 创建阶段（准备数据）
      beforeCreate () {
        console.log('beforeCreate 响应式数据准备好之前', this.count)
      },
      created () {
        console.log('created 响应式数据准备好之后', this.count)
        // this.数据名 = 请求回来的数据
        // 可以开始发送初始化渲染的请求了
      },

      // 2. 挂载阶段（渲染模板）
      beforeMount () {
        console.log('beforeMount 模板渲染之前', document.querySelector('h3').innerHTML)
      },
      mounted () {
        console.log('mounted 模板渲染之后', document.querySelector('h3').innerHTML)
        // 可以开始操作dom了
      },

      // 3. 更新阶段(修改数据 → 更新视图)
      beforeUpdate () {
        console.log('beforeUpdate 数据修改了，视图还没更新', document.querySelector('span').innerHTML)
      },
      updated () {
        console.log('updated 数据修改了，视图已经更新', document.querySelector('span').innerHTML)
      },

      // 4. 卸载阶段
      beforeDestroy () {
        console.log('beforeDestroy, 卸载前')
        console.log('清除掉一些Vue以外的资源占用，定时器，延时器...')
      },
      destroyed () {
        console.log('destroyed，卸载后')
      }
      卸载的命令app.$destory()

