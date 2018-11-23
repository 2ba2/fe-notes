# Array.prototype.copyWithin()

## 描述
浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。

## 语法
```js
arr.copyWithin(target[, start[, end]])
```
#### 参数
- target: 复制序列到该位置
- start: 开始复制元素的起始位置
- end: 开始复制元素的结束位置
#### 返回值
改变了的数组

## 示例
```js
[1, 2, 3, 4, 5].copyWithin(-2); // (5) [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWithin(0, 3); // (5) [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4); // (5) [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1); // (5) [1, 2, 3, 3, 4]
```

## 规范
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.copywithin](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.copywithin)