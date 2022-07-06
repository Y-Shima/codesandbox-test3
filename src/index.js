// アロー関数
// function func1(str){
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

// const func2 = (str) => {
//   return str;
// };
const func2 = (str) => str;

console.log(func2("func2です。"));

const func3 = (val1, val2) => val1 + val2;

console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "名前",
//   age: 100
// };

// const message = `私は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message);

// const {name, age} = myProfile;
// const message1 = `私は${name}です。年齢は${age}です。`;
// console.log(message1);

const myProfile2 = ["名前", 50];
const message2 = `私は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message2);

const [name3, age3] = myProfile2;
const message3 = `私は${name3}です。年齢は${age3}です。`;
console.log(message3);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん。`);
sayHello("名前");
sayHello();

/**
 * スプレッド構文...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合

const arr4 = [10, 20];
const arr5 = [30, 40];

// コピー
const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// 参照渡し
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4);
