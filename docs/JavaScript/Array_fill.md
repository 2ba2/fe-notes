# Array.prototype.fill()

## 描述
用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。

`fill` 方法接受三个参数 `value`, `start` 以及 `end`。
`start` 和 `end` 参数是可选的, 其默认值分别为 `0` 和 `this` 对象的 `length` 属性值。

## 语法
```js
arr.fill(value[, start[, end]])
```
#### 参数
- `value`: 用来填充数组元素的值。
- `start` 可选: 起始索引，默认值为 `0`。
- `end` 可选: 终止索引，默认值为 `this.length`。

#### 返回值
修改后的数组

## 示例
```js
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]

Array(3).fill(4);                // [4, 4, 4]
var arr = Array(3).fill({}) // [{}, {}, {}];
```

## 规范
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.fill]