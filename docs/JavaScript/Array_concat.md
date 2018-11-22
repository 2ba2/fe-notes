# Array.prototype.concat()

## 描述
合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

## 示例
#### 将值连接到数组
```js
var alpha = ['a', 'b', 'c'];
var alphaNumeric = alpha.concat(1, [2, 3]);
console.log(alphaNumeric); // (6) ["a", "b", "c", 1, 2, 3]
```

## 规范
- [https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf)
- [https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.4](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.4)
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)