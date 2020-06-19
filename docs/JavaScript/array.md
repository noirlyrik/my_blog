# 数组方法

## 1. 定义数组

### 对象方法

var arr = new Array();

new 可省略

### 数组字面量

var arr = [1, 2, 3];

arr.length = 1;

给数组末尾添加新的值

## 2. 检测数组

### instanceOf

arr instanceOf array

### Array.isArray 

## 3. 数组转换

toString()

join()

接受分隔符作为参数，返回字符串

## 4. 数组方法

### 栈方法

后进先出

push() 后进

pop() 后出

### 队列方法

先进先出

shift() 先出

push() 后进

#### 反向队列

unshift() 先进

pop() 后出

#### 栈和队列

| 添加         | 删除       | 位置     |
| ------------ | ---------- | -------- |
| push         | pop        | 数组末尾 |
| unshift      | shift      | 数组前端 |
| 任意个       | 1个        |          |
| 返回数组长度 | 返回删除项 |          |



### 重排序

reverse()

反转

sort()

可接受compare函数作为参数

```js
function compare(value1, value2) {
    return value2 - value1;
}
```

### 操作方法

- reverse()
    - array.reverse()倒序
- sort()
    - array.sort(compare函数)
    - array.sort() 根据字符串排序


- concat()
    - array.concat()复制
    - array.concat("2"添加项, [1,2,3]添加数组)
    - 返回添加/复制后的数组
- slice() 切片
    - array.slice(1起始位置,4结束位置不包括/可省略) 
- splice() 插入替换
    - array.splice(1起始位置, 1删除项数, new插入项可省略)


### 迭代

- every() 
    - array.every() 
    - 每项为true返回
- some()
    - array.some()
    - 有一项为true返回

```javascript
var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.every(function(item, index, array){
    return (item > 2);
    });

everyResult;
// false
var someResult = numbers.some(function(item, index, array) {
    return (item > 2);
    });

someResult;
// true
```


- filter()
    - array.filter()
    - 过滤true

```js
var numbers = [1,2,3,4,5,4,3,2,1];

var filterResult = numbers.filter(function(item, index, array) {
    return (item > 2);
    });

filterResult;
// [ 3, 4, 5, 4, 3 ]
```


- map()
    - array.map(function)
    - 返回函数调用后的结果数组

```js
var numbers = [1,2,3,4,5,4,3,2,1];

var mapResult = numbers.map(function(item, index, array) {
    return item * 2;
    });

mapResult;
// [ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]
```

- forEach() 
    - 类似for循环
    - array.forEach(function)
    - 对每项使用函数


### 位置

- array.indexOf()
    - array.indexOf(1数组项, 4起始位置可省略)
    - 从前往后
- array.lastIndexOf()
    - array.lastIndexOf(1数组项, 4起始位置可省略)
    - 从后往前



### 归并

- reduce()
    - array.reduce(function)

```js
var values = [1,2,3,4,5];


var sum = values.reduce(function(prev, cur, index, array) {
    return prev + cur;
    });

sum;
// 15
```

- reduceRight()
    - 从右开始