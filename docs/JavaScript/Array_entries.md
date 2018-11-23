# Array.prototype.entries()

## 描述
返回一个新的 `Array Iterator` 对象，该对象包含数组中每个索引的键/值对。

## 语法
```js
arr.entries()
```
#### 返回值
一个新的 Array 迭代器对象。它的原型上有一个 `next` 方法，可用用于遍历迭代器取得原数组的 `[key,value]`。

## 示例
#### Array Iterator
```js
var arr = ["a", "b", "c"];
var iterator = arr.entries();
console.log(iterator); // Array Iterator {}
```

#### iterator.next()
```js
var arr = ["a", "b", "c"]; 
var iterator = arr.entries();
console.log(iterator.next()); // {value: Array(2), done: false}
```

#### 使用 for…of 循环
```js
var arr = ["a", "b", "c"];
var iterator = arr.entries();

for (let e of iterator) {
    console.log(e);
}
```

## 规范
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.entries](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.entries)
