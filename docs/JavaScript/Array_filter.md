# Array.prototype.filter()

## 描述
创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

`filter` 为数组中的每个元素调用一次 `callback` 函数，并利用所有使得 `callback` 返回 `true` 或 等价于 `true` 的值 的元素创建一个新数组。

## 示例
#### 筛选值
```js {4}
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered); // (3) [12, 130, 44]
```

#### 在数组中搜索
```js {3}
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
console.log(filterItems('ap')); // (2) ["apple", "grapes"]
```

## 规范
- [https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.20](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.20)
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.filter](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.filter)