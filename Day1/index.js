// DSA

// #1 Two Sum
// function twoSum(nums, target){
//   let map = new Map();
//   let n = nums.length;
//   for(let i = 0; i < n; i++){
//     let remaining = target - nums[i];
//     if(map.has(remaining)){
//       return [map.get(remaining), i]
//     }
//     map.set(nums[i], i)
//   }
//   return -1;
// }
// let nums = [2,7,11,15];
// let target = 9;
// console.log(twoSum(nums, target))

// #344 Reverse String
// function reverseString(s){
//   let start = 0;
//   let end = s.length - 1;
//   while(start < end){
//     let temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;
//     start++;
//     end--;
//   }
//   return s;
// }

// let s = ["H","a","n","n","a","h"]
// console.log(reverseString(s))

// #125 Valid Palindrome
// function validPalindrome(s) {
//   s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   let start = 0;
//   let end = s.length - 1;
//   while(start < end){
//     if(s[start] !== s[end]){
//         return false
//     }
//     start++;
//     end--;
//   }
//   return true;
// }

// let s = "A man, a plan, a canal: Panama";
// console.log(validPalindrome(s));

// #283 Move Zeroes
// function moveZeroes(nums){

//   let insert = 0;
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] !== 0){
//       nums[insert] = nums[i]
//       insert++;
//     }
//   }
//   while(insert < nums.length){
//     nums[insert] = 0;
//     insert++
//   }
//   return nums;
// }

// let nums = [0,1,0,3,12]
// console.log(moveZeroes(nums))

// #121 Best Time to Buy and Sell Stock
// function maxProfit(prices) {
//     let minPrice = Infinity;  
//     let maxProfit = 0;       

//     for (let price of prices) {
//         if (price < minPrice) {
//             minPrice = price;        
//         } else if (price - minPrice > maxProfit) {
//             maxProfit = price - minPrice; 
//         }
//     }

//     return maxProfit;
// };

// const prices = [7,6,4,3,1];
// console.log(maxProfit(prices));


// 📌 Day 1 Interview Questions – Theoretical Answers

/*
Q1: Difference between var, let, and const

In JavaScript, the difference between var, let, and const mainly comes down to scope, re-declaration, and hoisting.

var is function-scoped, can be re-declared and re-assigned, and it is hoisted with an initial value of undefined.

let is block-scoped, cannot be re-declared in the same scope but can be re-assigned. It is also hoisted, but unlike var, it is not initialized, so accessing it before declaration causes a temporal dead zone error.

const is also block-scoped, cannot be re-declared or re-assigned. It must be initialized at the time of declaration. However, if it’s an object or array, the reference can’t be changed, but the contents can be modified.
*/

/*
Q2: What is hoisting in JavaScript?

Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their scope before execution.

With var, the variable is hoisted and initialized with undefined. With let and const, they are hoisted too, but not initialized — accessing them before declaration gives a ReferenceError, which is known as the temporal dead zone.

Function declarations are also hoisted, so we can call them before they appear in the code. But function expressions and arrow functions are not hoisted the same way, since they behave like variables.
*/

/*
Q3: How does JavaScript handle scope?

In JavaScript, there are three main types of scope.

Global Scope: Variables declared outside any function or block belong here and are accessible anywhere in the code.

Function Scope: Variables declared inside a function are only available within that function. The var keyword follows function scope.

Block Scope: Variables declared with let or const inside {} (like loops, conditionals) are only available in that block.

JavaScript also follows lexical scope, meaning inner functions can access variables of their parent functions through the scope chain.
*/

/*
Q4: Time vs Space Complexity Trade-off

Time complexity measures how fast an algorithm runs, while space complexity measures how much memory it uses. The trade-off means sometimes we increase space to reduce time, and sometimes we allow more time to save space. For example, using a HashMap gives O(1) lookups but needs extra space, while sorting + searching takes O(n log n) time with less space. Similarly, in recursion without memoization, we save memory but spend more time recomputing. So the choice depends on the problem constraints.”.

Key Point: Efficient solutions balance time and space depending on problem constraints.
*/

/*
Q5: Explain Two Pointers Technique

The two pointers approach is an optimization where two indices traverse data from different directions or speeds, reducing nested loops into linear time. It’s commonly used for palindrome checking, array partitioning, and problems like two-sum in sorted arrays.
*/
