# Array.prototype.find()

## 描述
回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

`find` 方法对数组中的每一项元素执行一次 `callback` 函数，直至有一个 `callback` 返回 `true`。
当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回 `undefined`。

## 示例
#### 用对象的属性查找数组里的对象
```js {9}
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```

#### 寻找数组中的质数
```js {11-12}
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

## 规范
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find)