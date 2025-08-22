// DSA
// #1 Two Sum (Brute Force)
// function twoSum(nums, target){
//   let length = nums.length;
//   for(let i = 0; i < length; i++){
//     for(let j = i + 1; j <length; j++){
//       if(nums[i] + nums[j] == target){
//         return [i, j]
//       }
//     }
//   }
//   return -1
// }
// let nums = [2,7,11,15];
// let target = 9;
// console.log(twoSum(nums, target))

// #387 First Unique Character in a String (Brute Force)
// function firstUniqChar(s){
//   const len = s.length;
//   let obj = {};
//   for(let i = 0; i < len; i++){
//     if(obj[s[i]]){
//       obj[s[i]]++
//     }
//     else{
//       obj[s[i]] = 1;
//     }
//   }
//   for(let ob in obj){
//     if(obj[ob] == 1){
//      return s.indexOf(ob)
//     }
//   }
//   return -1;

// }

// const s = "leetcode";
// console.log(firstUniqChar(s))

// #387 First Unique Character in a String (Optimal)
// var firstUniqChar = function(s) {
//     let len = s.length;
//   let map = new Map();

//   for(let ch of s){
//     if(map.has(ch)){
//       map.set(ch, map.get(ch) + 1)
//     }
//     else{
//       map.set(ch, 1)
//     }
//   }
//   for(let i = 0; i < len; i++){
//     if(map.get(s[i]) == 1){
//       return i
//     }
//   }
//   return -1
// };

// const s = "leetcode";
// console.log(firstUniqChar(s))

// #242  Valid Anagram (Brute Force)
// function isAnagram(s, t){
//   let maps = new Map();
//   let mapt = new Map();
//   let lens = s.length;
//   let lent = t.length;
//   let result = true
//   for(let ch of s){
//     maps.set(ch, (maps.get(ch) || 0) + 1)
//   }
//   for(let ch of t){
//     mapt.set(ch, (mapt.get(ch) || 0) + 1)
//   }
//   for(let i = 0; i < lens; i++){
//     if(maps.get(s[i]) != mapt.get(s[i])){
//       result = false
//     }
//   }
//   for(let i = 0; i < lent; i++){
//     if(maps.get(t[i]) != mapt.get(t[i])){
//       result = false
//     }
//   }
//   return result
// }

// const s = "ab"; 
// const t = "a";
// console.log(isAnagram(s, t))

// #242  Valid Anagram (Optimal)
// function isAnagram(s, t){
//   let len = t.length;
//   if(s.length != t.length){
//     return false;
//   }

//   let map = new Map();
//   for(let ch of s){
//     map.set(ch, (map.get(ch) || 0) + 1);
//   }
//   for(let i = 0; i < len; i++){
//     if(!map.has(t[i])){
//       return false
//     }
//     map.set(ch, map.get(ch) - 1)

//     if(map.get(ch) < 0){
//       return false
//     }
//   }
//   return true
// }

// const s = "ab"; 
// const t = "a";
// console.log(isAnagram(s, t))

// #560 Subarray Sum Equals K
// function subarraySum(nums, k){
//   let map = new Map();
//   map.set(0, 1); 
//   let count = 0;
//   let prefixSum = 0;

//   for (let num of nums) {
//     prefixSum += num;

//     if (map.has(prefixSum - k)) {
//       count += map.get(prefixSum - k);
//     }

//     map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
//   }

//   return count;
// }

// let nums = [1,2,3];
// let target = 3;
// console.log(subarraySum(nums, target))

// 📌 Day 2 Interview Questions – Theoretical Answers

/*
1. Difference between == and ===?

== → checks equality after type conversion (loose equality).

=== → checks value and type (strict equality).
Example:

0 == "0"   // true
0 === "0"  // false
*/

/*
2. What is Hoisting?
👉 In JavaScript, variable and function declarations are moved to the top of their scope before code execution.

var → hoisted (undefined initially).

let & const → hoisted but in temporal dead zone.

Functions → fully hoisted.
*/

/*
3. Difference between var, let, and const?

var → function-scoped, can be redeclared.

let → block-scoped, cannot be redeclared.

const → block-scoped, cannot be redeclared or reassigned.
*/

/*
4. What is a Closure?
👉 A function that remembers the variables from its outer scope even after that scope has finished executing.
Example:

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}
let fn = outer();
console.log(fn()); // 1
console.log(fn()); // 2
*/

/*
5. Explain Event Loop in JS
👉 JavaScript is single-threaded, but it handles async tasks using an event loop.

Code runs in call stack.

Async tasks (setTimeout, promises, API calls) go into callback queue / microtask queue.

Event loop pushes them back to the call stack when it’s empty.
*/