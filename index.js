// Task 1
// const arr = [1, 6, -1, 22, 13];
// let max = 0;
// let min = 0;
// for (let index = 0; index < arr.length; index++) {
//     if (max < arr[index]) {
//         max = arr[index]
//     }
//     if (min > arr[index]) {
//         min = arr[index]
//     }
// }
// console.log(max, min)
//Task 2
// const str = "!тевирП";
// console.log(str.split('').reverse().join(''))
//Task 3
// const array = [3, 5, 8, 13, 21, 42];
// let sum = 0;
// for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 == 0) {
//         sum += array[index] ** 2
//     }
// }
// console.log(sum)
//Task 4
// function anagram(str1, str2) {
//     str1 = str1.replace(/ /g, '').toLowerCase();
//     str2 = str2.replace(/ /g, '').toLowerCase();
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const charCount1 = {};
//     const charCount2 = {};
//     for (const char of str1) {
//         charCount1[char] = (charCount1[char] || 0) + 1;
//     }
//     for (const char of str2) {
//         charCount2[char] = (charCount2[char] || 0) + 1;
//     }
//     for (const char in charCount1) {
//         if (charCount1[char] !== charCount2[char]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(anagram("Лунь", "нуль")) // true
// console.log(anagram("Лунь", "ноль")) // false
//Task 5
// function palindrome(word) {
//     word = word.toLowerCase().replace(/\s/g, '');

//     const length = word.length;

//     for (let i = 0; i < Math.floor(length / 2); i++) {
//         if (word[i] !== word[length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(palindrome("Не гни папин ген")) // true
// console.log(palindrome("123")) // false
//Task 6
// function printFibonacciEverySecond() {
//     let a = 0;
//     let b = 1;
//     const interval = setInterval(() => {
//       console.log(a);
//       const next = a + b;
//       a = b;
//       b = next;
//     }, 1000);
//   }

//   printFibonacciEverySecond();
//Task 7
// function delay(N) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, N * 1000);
//     });
// }

// // Пример использования:
// delay(5)
//     .then(() => {
//         console.log('Прошло 5 секунд!');
//     })
//     .catch((error) => {
//         console.error('Произошла ошибка:', error);
//     });
//Task 8
// function intersect(arrA, arrB) {
//     const intersection = [];
//     for (const elementA of arrA) {
//       if (arrB.includes(elementA)) {
//         intersection.push(elementA);
//       }
//     }
//     return intersection;
//   }
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [3, 4, 5, 6, 7];
//   const result = intersect(array1, array2);
//   console.log(result); // 3 4 5
//Task 10
// for (let i = 1; i <= 3; i++) {
//     setTimeout((num) => console.log(num), 1000, i);
// }
// Generarors
// Padovan Sequence
// function* padovanGenerator() {
//     let a = 1, b = 1, c = 1;
//     yield a;
//     yield b;
//     yield c;
//     while (true) {
//       const nextValue = a + b;
//       yield nextValue;
//       a = b;
//       b = c;
//       c = nextValue;
//     }
//   }
//   const generator = padovanGenerator();
//   for (let i = 0; i < 10; i++) {
//     console.log(generator.next().value);
//   }
