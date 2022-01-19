type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
};

// 知识点
// 1. 返回一个对象
// 2. 遍历 todo  [P in K] mapped
//  - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. 取值  []  Indexed
//  - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4. 判断 查看key是否存在于 todo
    // 1. keyof lookup 
    //  - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
    // 2. extends constraint 约束
    //  - https://www.typescriptlang.org/docs/handbook/mixins.html#constraints
    
// js 实现方式

function mypick(todo, keys) {
  let obj = {};
  todo.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}
