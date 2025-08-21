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