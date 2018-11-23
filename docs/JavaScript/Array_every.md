# Array.prototype.every()

## 描述
测试数组的所有元素是否都通过了指定函数的测试。

## 语法
```js
arr.every(callback[, thisArg])
```
#### 参数
- `callback`: 用来测试每个元素的函数。
- `thisArg`: 执行 `callback` 时使用的 `this` 值。

## 示例
```js
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
```

## 规范
- [https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.16](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.16)
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.every](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.every)
