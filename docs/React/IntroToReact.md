# Intro to React

## jsx

- jsx 可以理解为 JavaScript 对象，可以通过`{}`插入变量，方法

```js
class Header extends Component {
  renderWord (goodWord, badWord) {
    const isGoodWord = false
    return isGoodWord ? goodWord : badWord
  }
  render() {
    const className = 'header'
    return (
      <div>
        <h1 className={className}>
          React 小书
          {this.renderWord(
            <strong>is good</strong>,
            <span>is not good</span>
          )}
          </h1>
      </div>
    )
  }
}
```
- 组件树：组件内可嵌套组件


## 事件监听

- on*事件写在普通的html标签中，不能用在组件标签上
- 需要手动绑定 bind this 到当前实例


```js
class Title extends Component {

  handleClickOnTitle(word) {
    console.log(this, word)
  }
  render() {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this, 'hello')}>React 小书</h1>
    )
  }
}
```

其实直接使用箭头函数也可以，箭头函数的`this`是词法环境 `LexicalEnvironment`（见闭包） 的this

```js
 return (
      <h1 onClick={()=>{console.log(this, 'hello')}}>React 小书</h1>
    )
```

## setState
- `setState` 接收一个对象或函数作为参数
- 可以更新 state，调用 render 重新渲染

```js
handleLikedButton() {
    this.setState({
      isLiked: !this.state.isLiked
    }) 
}
```

- 接收函数作为参数时，会将上一个 `setState` 的结果传入函数中

```js
handleLikedButton() {
    this.setState({ count: 0 })
    console.log(this.state.count, '>>1')
    this.setState((prevState)=> {
        return { count: prevState.count + 1}
    })
    console.log(this.state.count, '>>2')
    this.setState((prevState) => {
        return {count: prevState.count + 2}
    })
    console.log(this.state.count, '>>3')
}
```

控制台输出内容：
```js
// 第一次点击
undefined ">>1"
undefined ">>2"
undefined ">>3"

// 第二次点击
3 ">>1"
3 ">>2"
3 ">>3"
```


## props
- 在外部组件标签上添加属性传入配置参数；组件内部使用 `this.props` 获取传入的参数
- 子组件内无法修改传入的 props
- 可以使用 defaultProps 设置默认属性

```js
class xxx extends Component {
    static defaultProps = {}
}
```

- 如果要改变 props，可以将父组件的 state 设置为传入属性，通过父组件 setState 重新渲染，传入新的 props。

## 生命周期

挂载阶段的生命周期：

1. construct
1. component will mount
1. render
1. component did mount
1. component will unmount


## React 中的 DOM 操作

ref

```js
// 输入框自动聚焦
class AutoFocusInput extends Component {
    componentDidMount() {
        this.input.focus()
    }
    render() {
        return (
            <div>
                <input ref={(input) => {this.input = input}}/>
            </div>
        )
    }
}
```

## container

复用组件布局：容器类组件

```js
export default class Card extends Component {
    componentDidMount() {
        console.log(this.props.children)
    }
    render() {
        return (
            <div className="card">
                <div className='card-content'>{this.props.children}</div>
            </div>
        )
    }
}
```

可以使用类似 html 的写法传入 props

```js
<Card>
  <h2>React 小书</h2>
  <div>开源、免费、专业、简单</div>
  订阅：<input/>
</Card>
```

## PropTypes 属性类型检测

```js
static propTypes = {
    comment: PropTypes.object
    comment: PropTypes.object.isRequired // 必选参数

}
```

