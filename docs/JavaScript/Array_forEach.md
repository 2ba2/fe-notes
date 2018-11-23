# Array.prototype.forEach()

## 描述
对数组的每个元素执行一次提供的函数。

::: warning
没有办法中止或者跳出 forEach 循环，除了抛出一个异常。

如果你需要这样，使用 forEach 方法是错误的，你可以用一个简单的循环作为替代。
:::

## 示例
#### 打印出数组的内容
```js
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

// 注意索引2被跳过了，因为在数组的这个位置没有项
[2, 5, ,9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

#### 对象复制函数
```js
function copy(obj) {
  var copy = Object.create(Object.getPrototypeOf(obj));
  var propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var obj1 = { a: 1, b: 2 };
var obj2 = copy(obj1); // {a: 1, b: 2}
```

#### 如果数组在迭代时被修改了，则其他元素会被跳过。
```js
var words = ["one", "two", "three", "four"];
words.forEach(function(word) {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});
// one
// two
// four
```

## 规范
- [https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18)
- [https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.foreach](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.foreach)

