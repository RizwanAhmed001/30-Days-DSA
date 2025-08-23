// DSA
// #217 Contain Duplicate
// function containsDuplicate(nums){
//   let n = nums.length;
//   let set = new Set();
//   for(let i = 0; i < n; i++){
//     if(set.has(nums[i])){
//       return true
//     }
//     set.add(nums[i])
//   }
//   return false
// }

// const nums = [1,2,3,1];
// console.log(containsDuplicate(nums))

// #1929 Concatenation of Array
// function getConcatenation(nums){
//   nums = nums.concat(nums);
//   return nums
// }

// const nums = [1,2,1];
// console.log(getConcatenation(nums))

// #1480 Running Sum of 1D Array
// function runningSum(nums){
//   let n = nums.length;
//   let sum = 0;
//   for(let i = 0; i < n; i++){
//     sum += nums[i];
//     nums[i] = sum
//   }
//   return nums;
// }

// const nums = [1,2,3,4];
// console.log(runningSum(nums))

// #53 Maximum Subarray
// function maxSubArray(nums) {
//     let n = nums.length;
//     let maximum = nums[0]; 
//     let current = nums[0];
//     for(let i = 1; i < n; i++){
//         current = Math.max(nums[i], current + nums[i])
//         maximum = Math.max(maximum, current)
//     }
//     return maximum
// };

// const nums = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maxSubArray(nums))

// #121 Best Time to Buy and Sell Stock
// function maxProfit(prices) {
//     let minprice = Infinity;
//     let maxprice = 0;
//     let n = prices.length
//     for(let i = 0; i < n; i++){
//         if(prices[i] < minprice){
//             minprice = prices[i]
//         }
//         else if(maxprice < (prices[i] - minprice)){
//             maxprice = prices[i] - minprice
//         }
//     }
//     return maxprice
// };

// const prices = [7,1,5,3,6,4];
// console.log(maxProfit(prices))

// #238 Product of Array Except Self (Brute Force)
// function productExceptSelf(nums){ 
//   let n = nums.length;
//   let result = new Array(n)
//   for(let i = 0; i < n; i++){
//     let jSum = 1;
//     let kSum = 1;
//     for(let j = 0; j < i; j++){
//       jSum *= nums[j]
//     }
//     for(let k = i + 1; k < n; k++){
//       kSum *= nums[k]
//     }
//     result[i] = jSum * kSum
//   }
//   return result;
// }

// const nums = [1,2,3,4];
// console.log(productExceptSelf(nums))

// #238 Product of Array Except Self (Optimal)
// function productExceptSelf(nums){ 
//   let n = nums.length;
//   let res = new Array(n).fill(1);

//   let prefix = 1;
//   for (let i = 0; i < n; i++) {
//     res[i] = prefix;
//     prefix *= nums[i];
//   }

//   let suffix = 1;
//   for (let i = n - 1; i >= 0; i--) {
//     res[i] *= suffix;
//     suffix *= nums[i];
//   }

//   return res;
// }

// const nums = [1,2,3,4];
// console.log(productExceptSelf(nums))

// #349 Intersection of Two Arrays
// function intersection(nums1, nums2){
//   let set = new Set(nums1);
//   let n = nums2.length;
//   let set2 = new Set()
//   for(let i = 0; i < n; i++){
//     if(set.has(nums2[i])){
//       set2.add(nums2[i])
//     }
//   }
//   return [...set2]
// }

// const nums1 = [1,2,2,1];
// const nums2 = [2,2];
// console.log(intersection(nums1, nums2))

// #125  Valid Palindrome
// function isPalindrome(s){
//   s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   let start = 0;
//   let end = s.length - 1;
//   while(start < end){
//     if(s[start] != s[end]){
//       return false
//     }
//     start++;
//     end--;
//   }
//   return true;
// }
// const s = 'A man, a plan, a canal: Panama'
// console.log(isPalindrome(s))

// #242 Valid Anagram
// function isAnagram(s, t){
//   let n = s.length;
//   if(s.length != t.length){
//     return false
//   }
//   let map = new Map();
//   for(let ch of s){
//     map.set(ch, (map.get(ch) || 0) + 1);
//   }
//   for(let i = 0; i < n; i++){
//     if(!map.has(t[i])){
//       return false;
//     }
//     map.set(t[i], (map.get(t[i])) -1);
//     if(map.set(t[i]) < 0){
//       return false;
//     }
//   }
//   return true;
// }

// const s = "anagram";
// const t = "nagaram";
// console.log(isAnagram(s, t))

// #14 Longest Common Prefix
// function longestCommonPrefix(strs){
//   let result = "";
//   let n = strs.length;
//   for(let i = 0; i < 1; i++){
//     for(let j = 0; j < strs[i].length; j++){
//       if(strs[i][j] === strs[i + 1][j] && strs[i + 1][j] === strs[i + 2][j]){
//         result += strs[i][j]
//       }
//     }
//   }
//   if(result.length == 0){
//     return ""
//   }
//   else{
//     return result
//   }

// }
// const strs = ["flower","flow","flight"]
// console.log(longestCommonPrefix(strs))

// #383 Ransom Note
// function canConstruct(ransomNote, magazine) {
//     let map = new Map();
//     let n = ransomNote.length;
//     for(let ch of magazine){
//         map.set(ch, (map.get(ch) || 0) + 1)
//     }
//     console.log(map)
//     for(let i = 0; i < n; i++){
//         if(!map.has(ransomNote[i])){
//             return false;
//         }
//         map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
//         console.log(map.get(ransomNote[i]))
//         if(map.get(ransomNote[i]) < 0){
//             return false
//         }
//     }
//     return true
// };

// const ransomNote = "aa";
// const magazine = "ab";
// console.log(canConstruct(ransomNote, magazine))

/*
1. Tell me about yourself

Hii, My name is Rizwan Ahmed. I am from ballabgarh faridabad. I have complete my B.Com from
Dr.Bhim rao Ambedkar Collage. I am skilled in react node mongodm and express currently i am looking for internship where i can apply my knowledge in rel life projects and learn and enhance my skill. Thank You.

2. Difference between Array & LinkedList
Array
Arry is a linear data structure where we can use indicies to get elements. array take less storage

Linked List 
Linked List is also a linear data structure where next element is connected to preious node
Linked list take more storage

3. My Strength
Strong foundation in JavaScript, React.js, and Node.js.

Good at problem-solving and debugging.

Ability to learn quickly and adapt to new technologies.

Team player with good communication skills.

4. What are your weaknesses?

Sometimes I focus too much on perfecting details, which may slow me down.

I used to struggle with time management, but I’m improving by setting priorities and deadlines.


5. Difference between == and === in JavaScript
Operator	Meaning	Example
== (Equality)	Compares values after type conversion (loose equality)	5 == "5" → true
=== (Strict Equality)	Compares values and types (no conversion)	5 === "5" → false
*/