// DSA
// #26 Remove Duplicates from Sorted Array
// function removeDuplicates(nums) {
//     if(nums.length == 0) return 0;
//     let n = nums.length;
//     let k = 1
//     for(let i = 1; i < n; i++){
//         if(nums[i] != nums[i - 1]){
//             nums[k] = nums[i]
//             k++
//         }
//     }
//   return k
// };

// const nums = [0,0,1,1,1,2,2,3,3,4];
// console.log(removeDuplicates(nums))

// #27 Remove Element
// function removeElement(nums, val) {
//   let k = 0;
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] !== val){
//       nums[k] = nums[i]
//       k++;
//     }
//   }
//   return k;
// };

// const nums = [0,1,2,2,3,0,4,2];
// const val = 2;
// console.log(removeElement(nums, val))

// #88 Merge Sorted Array
// function merge(nums1, m, nums2, n){
//   let x = [];
//   let xlength = 0;
//   let mlength = 0;
//   let nlength = 0;
//   while(mlength < m && nlength < n){
//     if(nums1[mlength] < nums2[nlength]){
//       x[xlength] = nums1[mlength];
//       mlength++;
//       xlength++;
//     }
//     else{
//       x[xlength] = nums2[nlength];
//       nlength++;
//       xlength++;
//     }
//   }
//   while(mlength < m){
//     x[length] = nums1[mlength];
//     mlength++;
//     xlength++;
//   }
//   while(nlength < n){
//     x[xlength] = nums2[nlength];
//     nlength++;
//     xlength++;
//   }
//   return x
// }

// const nums1 = [1,2,3];
// const m = 3;
// const nums2 = [2,5,6];
// const n = 3;
// console.log(merge(nums1, m, nums2, n))

// #283 Move Zeroes
// function moveZeroes(nums){
//   let count = 0;
//   let n = nums.length;
//   for(let i = 0; i < n; i++){
//     if(nums[i] !== 0){
//       nums[count] = nums[i];
//       count++;
//     }
//   }
//   for(let i = count; i < n; i++){
//     nums[i] = 0;
//   }
//   return nums;
// } 

// const nums = [0,1,0,3,12];
// console.log(moveZeroes(nums))

// #169 Majority Element
// function majorityElement(nums){
//   let max = 0;
//   let n = nums.length
//   let map = new Map();
//   for(let num of nums){
//     map.set(num, (map.get(num) || 0) + 1);
//   }
//   for(let i = 0; i < n; i++){
//     console.log(map.has(nums[i]) && map.get(nums[i]) > max)
//     if(map.has(nums[i]) && map.get(nums[i]) > max){
//       max = map.get(nums[i])
//     }
//   }
//   for(let i = 0; i < n; i++){
//     if(map.get(nums[i]) === max){
//       return nums[i]
//     }
//   }
// }

// const nums = [6,5,5];
// console.log(majorityElement(nums)); 

/*
1. Where do you see yourself in 5 years?
In the next 5 years, I see myself growing into a skilled full-stack developer, contributing to impactful projects, mentoring juniors, and taking on leadership responsibilities where I can design scalable systems and drive business value through technology.

2. Explain Recursion with example.
Recursion is a technique where a function calls itself until a base condition is met.
👉 Example: Calculating factorial

function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive call
}

console.log(factorial(5)); // 120

Here, factorial(5) keeps calling itself with smaller values until it reaches the base case factorial(0).

3. Difference between BFS & DFS.

BFS (Breadth First Search):

Explores level by level (neighbors first).

Uses a queue (FIFO).

Good for finding shortest path in an unweighted graph.

DFS (Depth First Search):

Explores depth/branch completely before backtracking.

Uses a stack (LIFO) or recursion.

Good for traversing or checking connectivity.

4. How is memory allocated in JS (stack vs heap)?

Stack (Primitive values):
Stores simple, fixed-size data (numbers, strings, booleans, null, undefined, symbols). Stored by value.

let x = 10; // stored in stack


Heap (Reference values):
Stores objects, arrays, functions (dynamic memory). Stored by reference.

let obj = {name: "Rizwan"}; // stored in heap, variable holds reference


5. What’s closure in JS?
A closure is when a function "remembers" variables from its outer scope, even after that outer function has finished execution.
👉 Example:

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2


Here, inner() still has access to count because of closure.
*/