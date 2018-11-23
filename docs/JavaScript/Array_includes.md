# Array.prototype.includes()

## 描述
用来判断一个数组是否包含一个指定的值，如果包含则返回 `true`，否则返回 `false`。

## 语法
```js
arr.includes(searchElement)
arr.includes(searchElement, fromIndex)
```
#### 参数
- `searchElement`: 需要查找的元素值。
- `fromIndex` 可选: 从该索引处开始查找 `searchElement`。如果为负值，则按升序从 `array.length - fromIndex` 的索引开始搜索。默认为 `0`。

#### 返回值
Boolean

## 示例
#### fromIndex 大于等于数组长度
```js
var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   //false
arr.includes('c', 100); // false
```

#### 计算出的索引小于 0
```js
var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
```

#### includes() 作为一个通用方法
```js
(function() {
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');
```

## 规范
- [https://www.ecma-international.org/ecma-262/7.0/#sec-array.prototype.includes](https://www.ecma-international.org/ecma-262/7.0/#sec-array.prototype.includes)

