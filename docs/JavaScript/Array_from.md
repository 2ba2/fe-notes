# Array.from()

## 描述
从一个类似数组或可迭代对象中创建一个新的数组实例

## 语法
```js
Array.from(arrayLike[, mapFn[, thisArg]])
```
#### 参数
- arrayLike: 伪数组对象或可迭代对象
- mapFn (可选参数): 每个元素会执行该回调函数
- thisArg (可选参数): 执行回调函数 mapFn 时 this 对象
#### 返回值
- 新的数组实例

## 示例
#### String
```js
Array.from('foo'); // (3) ["f", "o", "o"]
```

#### Set
```js
let s = new Set(['foo', window]); 
Array.from(s); // (2) ["foo", Window]
```

#### Map
```js
let m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m); // (3) [Array(2), Array(2), Array(2)]
```

#### Array-like object
```js
function f() {
  return Array.from(arguments);
}
f(1, 2, 3); // (3) [1, 2, 3]
```

#### 箭头函数
```js
Array.from([1, 2, 3], x => x + x); // (3) [2, 4, 6]
Array.from({length: 5}, (v, i) => i); // (5) [0, 1, 2, 3, 4]
```

#### 数组去重合并
```js
function combine(){ 
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
    return Array.from(new Set(arr));
} 
var m = [1, 2, 2], n = [2,3,3];
combine(m,n); // (3) [1, 2, 3]
```

## 规范
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.from](https://www.ecma-international.org/ecma-262/6.0/#sec-array.from)