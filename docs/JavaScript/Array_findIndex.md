# Array.prototype.findIndex()

## 描述
返回数组中满足提供的测试函数的第一个元素的**索引**。否则返回 `-1`。

`findIndex` 方法对数组中的每个数组索引 `0..length-1（包括）` 执行一次`callback` 函数，直到找到一个` callback` 函数返回真实值（强制为true）的值。

## 示例
#### 查找数组中首个质数元素的索引
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

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

## 规范
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findindex](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findindex)