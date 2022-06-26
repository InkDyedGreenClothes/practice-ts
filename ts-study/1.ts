// function foo(input: string) {
//   return input;
// }
// foo("mayunlong");
// window.addEventListener("load", (e) => {});
// let yourFriend = "myunlong";

// const arr1: string[] = ["ma", "ma", "ma"];
// console.log(arr1[599]);

// // 当使用元组（Tuple）时超出长度会报错 提示
// const arr4: [string, string, string] = ["ma", "ma", "ma"];
// console.log(arr4[599]);

// const arr6: [string, string?, string?] = ["ma"];

// type TupleLength = typeof arr5.length

// const arr1: string[] = [];

// const [ele1, ele2, ...rest] = arr1;
// const arr7: [name: string, age: number, male: boolean] = ['mayunlong', 599, true];
// const arr5: [string, number, boolean] = ['mayunlong', 599, true];

// // 长度为 "3" 的元组类型 "[string, number, boolean]" 在索引 "3" 处没有元素。
// const [name, age, male, other] = arr5;

// interface Tmp {
//   name: 'mayunlong',
//   age:28,
//   sex: 'M'
// }

// const obj: Tmp = {
//   name: 'mayunlong',
//   age: 28,
//   sex: 'M'
// }


interface Tmp {
  user:
    | {
        vip: true;
        expires: string;
      }
    | {
        vip: false;
        promotion: string;
      };
}

declare var tmp: Tmp;

if (tmp.user.vip) {
  console.log(tmp.user.expires);
}
