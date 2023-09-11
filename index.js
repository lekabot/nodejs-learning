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
