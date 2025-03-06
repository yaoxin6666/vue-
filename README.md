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
：v-model本质上是一个语法糖。例如应用在输入框上，就是value属性和input事件的合写。
作用：提供数据的双向绑定
①数据变，视图跟着变:value 
②视图变，数据跟着变@input
注意：$event 用于在模板中，获取事件的形参
![image](https://github.com/user-attachments/assets/9a6146df-b7e8-4405-9b96-322c0712fc42)
![image](https://github.com/user-attachments/assets/3ec905c5-0289-4453-b58e-4361d6f8f8f0)
![image](https://github.com/user-attachments/assets/ddc06274-2f51-414e-8474-0ca13e27c049)

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
 Prop 定义：组件上注册的一些 自定义属性
Prop 作用：向子组件传递数据
特点：
可以传递任意数量的prop
可以传递任意类型的prop
![image](https://github.com/user-attachments/assets/ebc99cf0-698c-4801-8725-f500c92aceff)
![image](https://github.com/user-attachments/assets/dfbb0264-84a3-43a8-8db1-1663183dd2be)
非父子通信(拓展) -event bus 事件总线
![image](https://github.com/user-attachments/assets/f5b5f573-d61b-4fed-96d8-cf2ac9934123)
![image](https://github.com/user-attachments/assets/f4713b19-02ca-425b-9319-3f6548fd47e1)
![image](https://github.com/user-attachments/assets/8c0cac72-c063-4615-8174-2b8111d5a464)
.sync 修饰符
作用：可以实现子组件与父组件数据的双向绑定，简化代码
特点：prop属性名，可以自定义，非固定为value
场景：封装弹框类的基础组件，visible属性 true显示false隐藏
本质：就是:属性名和@update:属性名合写
![image](https://github.com/user-attachments/assets/1e2a1155-62fc-43db-859b-f9f7b32e4e75)
ref 和 $refs
作用：利用ref 和$refs 可以用于获取dom 元素, 或组件实例
特点：查找范围→  当前组件内(更精确稳定)
![image](https://github.com/user-attachments/assets/bf0568a4-ba15-46c5-a84b-5e1d7a9a586a)
![image](https://github.com/user-attachments/assets/b2f7c4ad-b23e-4daa-a996-528ee79c426d)
Vue异步更新、$nextTick
![image](https://github.com/user-attachments/assets/2ba3f6fe-9e70-431c-bf75-852d68a0491a)
自定义指令：自己定义的指令,  可以封装一些 dom 操作， 扩展额外功能
![image](https://github.com/user-attachments/assets/8e136b69-cc86-430b-9164-3a532577714a)
![image](https://github.com/user-attachments/assets/f1cda1e9-852e-4290-b0d9-8e903841b6f4)
 指令值的语法：
v-指令名 = "指令值"，通过 等号 可以绑定指令的值
通过 binding.value 可以拿到指令的值
通过 update 钩子，可以监听指令值的变化，进行dom更新操作

插槽：作用：让组件内部的一些 结构 支持 自定义
默认插槽
插槽基本语法：
1. 组件内需要定制的结构部分，改用<slot></slot>占位
2. 使用组件时, <MyDialog></MyDialog>标签内部, 传入结构替换slot
3. ![image](https://github.com/user-attachments/assets/843bab80-cfee-4213-bc19-b0f24a3d18c1)
插槽后备内容：封装组件时，可以为预留的 `<slot>` 插槽提供后备内容（默认内容）。
l 语法: 在 <slot> 标签内，放置内容,  作为默认显示内容
 外部使用组件时，不传东西，则slot会显示后备内容 
<MyDialog></MyDialog>
 l 外部使用组件时，传东西了，则slot整体会被换掉
<MyDialog>我是内容</MyDialog
具名插槽
具名插槽语法:
1. 多个slot使用name属性区分名字
2.   template配合v-slot:名字来分发对应标签
3.   v-slot:name等价于#name
![image](https://github.com/user-attachments/assets/c15af532-7e30-4258-b9f4-f1b75f218374)
 作用域插槽
基本使用步骤：
1. 给 slot 标签, 以 添加属性的方式传值
2. 所有添加的属性, 都会被收集到一个对象中
3. 在template中, 通过  ` #插槽名= "obj" ` 接收，默认插槽名为 default
![image](https://github.com/user-attachments/assets/fe1ccb34-2341-4010-84ed-c641f38eb27f)
单页应用程序: SPA - Single Page Application：所有功能在一个html页面上实现
![image](https://github.com/user-attachments/assets/3e591f16-3e8c-4fc6-b0c6-b449c019b8e8)
优点：按需更新性能高，开发效率高，用户体验好
缺点：学习成本，首屏加载慢，不利于SEO
路由：设备和ip的映射关系
Vue中路由：路径 和 组件 的 映射 关系
VueRouter
![image](https://github.com/user-attachments/assets/c2d0c9f4-8dee-495b-8e3d-dea4c02b1e6e)
![image](https://github.com/user-attachments/assets/7c253a06-d744-4789-ab9d-96cf3656c840)
.vue文件 本质无区别
分页组件放在views文件夹里
复用组件放在components文件夹里
路由的封装抽离的好处：拆分模块，利于维护
绝对路径：@指代src目录，可以用于快速引入组件
![image](https://github.com/user-attachments/assets/16637298-6c9d-40b5-9dc7-77644074fd98)
![image](https://github.com/user-attachments/assets/43ea1ce1-0928-4f2d-bcb3-769f5fe0dc2c)
![image](https://github.com/user-attachments/assets/f5442391-ce07-4800-883a-2f56c214c398)
![image](https://github.com/user-attachments/assets/860ba1b8-313e-490e-884a-b670742d1508)
声明式导航 - 跳转传参
1.  查询参数传参
2.  动态路由传参
[image](https://github.com/user-attachments/assets/0b22f635-6aba-4ed4-a5df-4d082150deb4)
![image](https://github.com/user-attachments/assets/3d825ed4-3b63-49fd-9c4f-21f090429657)
![image](https://github.com/user-attachments/assets/6712cede-9c4c-4eb2-9cfa-3fa3302fe8ed)
![image](https://github.com/user-attachments/assets/b19bae7d-bb65-47a1-93d5-f7a002cbb694)
![image](https://github.com/user-attachments/assets/611900d5-ff1b-42d0-b1b6-25f1ddc64f17)
![image](https://github.com/user-attachments/assets/497435ad-68c0-4797-b118-ab74284e8634)
![image](https://github.com/user-attachments/assets/12d9de76-911e-4f32-b28c-e927ebd38cd8)
![image](https://github.com/user-attachments/assets/830ba0f4-1aef-4315-b36e-5adce6151485)
![image](https://github.com/user-attachments/assets/efbf2ff4-0cef-4723-afb0-94065137f17a)
![image](https://github.com/user-attachments/assets/09c85c1f-aebf-4164-b891-89e0dd834502)
![image](https://github.com/user-attachments/assets/5afb4249-5fd1-4414-b49d-fd52c1b067f5)
![image](https://github.com/user-attachments/assets/f2f00c7b-16b3-4b33-82e9-33bcb99fe216)
![image](https://github.com/user-attachments/assets/df2ba3fb-e82d-41ed-aebd-99803fb74561)
![image](https://github.com/user-attachments/assets/c5996595-d476-4aa9-99d6-5712a43971be)
![image](https://github.com/user-attachments/assets/6f3b5643-caff-4bb9-ae11-65336bb5884a)
![image](https://github.com/user-attachments/assets/8cc1eb69-05e7-471b-bb47-168ebe735edc)
![image](https://github.com/user-attachments/assets/bf0c3d79-03c8-45eb-ac37-8bbad5154a21)
![image](https://github.com/user-attachments/assets/c680a6b7-fae4-44c2-b00d-bb1f7bb80027)
![image](https://github.com/user-attachments/assets/289c3628-6e43-4276-a9ca-8ea3c50e7051)
![image](https://github.com/user-attachments/assets/46924d3f-a9b1-407a-85f9-bbca7f681d04)
![image](https://github.com/user-attachments/assets/f7fd4782-7670-47da-bac2-1339ee821afd)
![image](https://github.com/user-attachments/assets/41c93675-2611-4f5e-87a5-0a40a3030604)
![image](https://github.com/user-attachments/assets/5f6d744b-686a-4c66-a12f-59903550d6e7)
![image](https://github.com/user-attachments/assets/e747864e-b1d9-4add-850c-e8e5ebf93160)
![image](https://github.com/user-attachments/assets/ba24cbf9-ecf5-4440-936c-666a020ebeb4)
