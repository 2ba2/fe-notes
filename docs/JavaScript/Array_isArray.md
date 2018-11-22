# Array.isArray()

## 描述
如果对象是 `Array` ，则返回 `true`，否则为 `false`。

## 示例
```js
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype); 
```

## Polyfill
```js
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

## 规范
- [https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.3.2](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.3.2)
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.isarray](https://www.ecma-international.org/ecma-262/6.0/#sec-array.isarray)