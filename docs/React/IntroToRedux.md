

# Intro to redux

## createSotre

createStore 接收一个参数 reducer，返回一个对象 store。store 具有 getState() 和 dispatch 两个方法。getState() 获取 state，dispatch 调度，传入 reducer 更新后的 state，并调用监听函数，每当 state 更新后就重新渲染。


```js
createStore = (reducer) => {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({ })
    return { getState, dispatch, subscribe }
}
```

## reducer

reducer 接收两个参数 state 和 action。先初始化 state，根据 action 的不同 type，更新 state，其实就是初始化及更新 state。

```js
function reducer(state, action) {
    if(!state) {
        return { state: { someState: 'someState' }}
    }
    
    switch(action.type) {
        case 'SOMETYPE':
            return {
                ...state, 
                someState: action.someState
            }
        default: 
            return state
    }
}
```


好奇 reducer 为什么要叫 reducer，去 Google 了一下，看到一个 [回答](https://zhuanlan.zhihu.com/p/25863768) 挺有意思：

> reducer 之所以叫 reducer，是因为它与 Array.prototype.reduce 相像
> - Array.prototype.reduce
>   - [1, 2, 3].reduce((sum, cur) => sum + cur, 0)
> - reducer()
>   - reducer((state, action) => newState)

reduce，减少，其实是函数式编程中的一种术语，也叫 fold

![fold](../.vuepress/public/fold.png)

## store 

```js
const store = createStore(reducer)

state = store.getState()

store.dispatch({type: 'SOMETYPE', someState: 'someNewState'})
```

