javascript技巧

1. `if else`: 三目运算符
2. 空合并：??
3. 可选链：?.
4. 键函数名称关联对象替代switch:
```javascript

const num = 3

// LONGER FORM
switch (num) {
  case 1:
    someFunction();
    break;
  case 2:
    someOtherFunction();
    break;
  case 3:
    yetAnotherFunction();
    break;
}

// SHORTHAND
var cases = {
  1: someFunction,
  2: someOtherFunction,
  3: yetAnotherFunction,
};

cases[num]();
```
5. `forEach`替代for循环
6. 函数参数默认值
7. 解构分配值
8. Math.floor(): ~~ 向下取整
9. 将字符串转换为数字: parseInt('500') -> +'500'
