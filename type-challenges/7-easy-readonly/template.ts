type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// js 实现方式
// 1. 返回对象
// 2. 遍历 对象
// 3. 添加readonly
// 4. nweObj[key] 赋值

function readon(obj) {
  let newObj = {};
  for (const key in obj) {
    newObj[`readonly ${key}`] = obj[key];
  }
  return newObj;
}
