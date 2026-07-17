// TypeScript 基础类型学习

// 1. 基础类型

const username: string = 'Cyzer';

const age: number = 18;

const isStudent: boolean = true;

// 2. 数组类型

const scores: number[] = [90, 85, 100];

const names: string[] = ['Tom', 'Jack', 'Lucy'];

// 3. 联合类型

let userId: string | number;

userId = 1001;

console.log(userId);

userId = 'user-001';

console.log(userId);

// 4. 类型别名

type ID = string | number;

const productId: ID = 'product-001';

// 5. 对象类型

const user: {
  name: string;
  age: number;
} = {
  name: 'Cyzer',
  age: 18,
};

console.log(username);
console.log(age);
console.log(isStudent);

console.log(scores);
console.log(names);

console.log(productId);
console.log(user);
export {};
