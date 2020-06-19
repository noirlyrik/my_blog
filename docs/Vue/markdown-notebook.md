
# markdown-notebook

20200614


## vue 的指令

### 计算属性

```js
computed: {
    //
}
```

### 侦听改变

```js
watch: {
    //
}
```

### 复用方法

```js
methods: {
    //
}
```


### 生命周期钩子

- beforeCreate 
- created
- beforeMount
- mounted
- beforeUpdate
- Updated
- beforeDestory
- destoryed


### v-bind
- v-on => @
- v-bind: => :


### *v-if template
20200615

- 添加功能：给每个笔记添加 selectedId，根据 selectedId 判断显示不同笔记的预览。
- 遇到问题：由于没有添加 note 时，selectedNote 初始值为 null，导致程序报错
- 解决：使用 v-if 指令，如果没有 note，赋值为 selectedNote

- 多个 v-if 放进一个 template

### watch

使用 deep 属性监听笔记内容的更改

```js
watch: {
    notes: {
        handler: 'saveNotes',
        deep: true,
    }
}
```


## 使用 localStorage 存储

- localStorage.setItem()
- localStorage.getItem()


## 过滤器

```js
Vue.filter()
```

模板：
```js
{{ someData | filteredData }}
```

