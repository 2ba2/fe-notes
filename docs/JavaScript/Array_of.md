# Array.of()

## 描述
创建一个具有可变数量参数的新数组实例，解决 `Array` 构造函数的 `Bug`。
```js
Array.of(7); // [7]
Array.of(1, 2, 3); // (3) [1, 2, 3]

Array(7); // (7) [empty × 7]
Array(1, 2, 3); // (3) [1, 2, 3]
```

## 示例
```js
Array.of(1, 2, 3); // (3) [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Polyfill
```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

## 规范
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.of](https://www.ecma-international.org/ecma-262/6.0/#sec-array.of)