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
2025/3/1
工程化开发& 脚手架Vue CLI
1. 全局安装(一次) ：yarn global add @vue/cli    或 npm i  @vue/cli  -g
2. 查看 Vue 版本：vue  --version
 3. 创建项目架子：vue  create  project-name（项目名-不能用中文）
4. 启动项目：yarn  serve  或 npm run serve（找package.json）
5. 组件开发：
 组件化：一个页面可以拆分成一个个组件，每个组件有着自己独立的结构、样式、行为。
好处：便于维护，利于复用→ 提升开发效率。
组件分类：普通组件、根组件。
根组件：整个应用最上层的组件，包裹所有普通小组件。
App.vue 文件（单文件组件）的三个组成部分
 template：结构（有且只能一个根元素）
script:   js逻辑
style：样式(可支持less，需要装包)
全局样式(默认)：影响所有组件
局部样式：scoped下样式，只作用于当前组件
scoped原理？
1. 当前组件内标签都被添加data-v-hash值的属性
2. css选择器都被添加[data-v-hash值] 的属性选择器
最终效果: 必须是当前组件的元素, 才会有这个自定义属性, 才会被这个样式作用到
data 是一个函数：一个组件的data选项必须是一个函数。→   保证每个组件实例，维护独立的一份数据对象。
每次创建新的组件实例，都会新执行一次data 函数，得到一个新对象。
组件三大组成部分的注意点：
1. 结构：有且只能一个根元素
2. 样式：默认全局样式，加上scoped局部样式
3. 逻辑：data是一个函数，保证数据独立。
组件通信, 就是指组件与组件之间的数据传递。
组件的数据是独立的，无法直接访问其他组件的数据。
组件关系分类：
1. 父子关系
2. 非父子关系
1. 父组件通过props将数据传递给子组件
2. 子组件利用$emit通知父组件修改更新
![image](https://github.com/user-attachments/assets/4ec65997-2e89-4ba0-b4c4-bd6e839b2f46)
子传父
![image](https://github.com/user-attachments/assets/338677c9-e354-41cf-94fc-5cf11a8735d2)
父传子
![image](https://github.com/user-attachments/assets/e1b9896f-f55b-4fbc-902b-b46062b91bf0)
父子关系 →    props & $emit
非父子关系 →    provide & inject   或 eventbus
通用方案 →    vuex
 父子通信方案的核心流程
2.1 父传子props：
父中给子添加属性传值 ②子props 接收 ③子组件使用
2.2 子传父$emit：
子$emit 发送消息②父中给子添加消息监听③父中实现处理函数
