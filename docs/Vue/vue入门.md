

# 基础概念

## 指令

- v-bind 绑定
- v-if 条件
- v-for 循环
- v-on 事件
- v-model 表单

## 组件化

Vue.component


## 官方示例

```html
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        {{ message }}
    </div>

    <div id="app-2">
        <span v-bind:title="message">
            查看动态绑定信息
        </span>
    </div>

    <div id="app-3">
        <p v-if="seen">能看到吗？</p>
    </div>

    <div id="app-4">
        <ol>
            <li v-for="i in todos">
                {{ i.text }}
            </li>          
        </ol>
    </div>

    <div id="app-5">
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">reverse</button>
    </div>

    <div id="app-6">
        <p>{{ message }}</p>
        <input v-model="message">
    </div>

    <ol id="app-7">
        <todo-item
        v-for="item in List"
        v-bind:todo="item"
        v-bind:key="item.id">
    </todo-item>
    </ol>


    <script>
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        })

        var app2 = new Vue({
            el: '#app-2',
            data: {
                message: `页面加载于${new Date().toLocaleString()}`
            }
        })

        var app3 = new Vue({
            el: '#app-3',
            data: {
                seen: true
            }
        })


        var app4 = new Vue({
            el: '#app-4',
            data: {
                todos: [
                    { text: '123'},
                    { text: '456'},
                    { text: '789'},
                ]
            }
        })

        var app5 = new Vue({
            el: '#app-5',
            data: {
                message: '12345'
            },
            methods: {
                reverseMessage: function() {
                    this.message = this.message.split('').reverse().join('')  
                    }
            }
        })

        var app6 = new Vue({
            el: '#app-6',
            data: {
                message: 'hello Julia!'
            }
        })


        Vue.component('todo-item', {
            props: ['todo'],
            template: '<li>{{ todo.text }}</li>'
        })

        var app7 = new Vue({
            el: '#app-7',
            data: {
                List: [
                    { id: 0, text: 'html' },
                    { id: 1, text: 'css' },
                    { id: 2, text: 'javascript' }
                ]
            }
        })
    </script> 
</body>
</html>
```



