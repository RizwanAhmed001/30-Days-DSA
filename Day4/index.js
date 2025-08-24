// DSA
// #560 Subarray Sum Equals K
// function subarraySum(nums, k){
//   let map = new Map();
//   map.set(0, 1)
//   let count = 0;
//   let prefixSum = 0;
//   for(let num of nums){
//     prefixSum += num;
//     if(map.has(prefixSum - k)){
//       count += map.get(prefixSum - k)
//     }
//     map.set(prefixSum,  (map.get(prefixSum) || 0 ) + 1)
//   }
//   return count
// }

// const nums = [1,2,3];
// const k = 3;
// console.log(subarraySum(nums, k))

// #20 Valid parentheses
// function isValid(s){
//   let map = new Map();
//   for(let ch of s){
//     map.set(ch, (map.get(ch) || 0) + 1)
//   }
//   let n = s.length;
//   for(let i = 0; i < n; i++){
//     if(s[i] == "(" && !map.has(")")){
//       return false
//     }
//     if(s[i] == "[" && !map.has("]")){
//       return false
//     }
//     if(s[i] == "{" && !map.has("}")){
//       return false
//     }
//     map.set(s[i], (map.get(s[i] || 0) - 1))
//   }
//   return true
// }

// const s = "()[]{}";
// console.log(isValid(s))

// #118 Pascal Triangle
// function generate(numRors) {
//   let res = [];
//   for (let i = 0; i < numRors; i++) {
//     let row = new Array(i + 1).fill(1)
//     for(let j = 1; j < i; j++){
//       row[j] = res[i - 1][j - 1] + res[i - 1][j];
//     }
//     res.push(row)
//   }
//   return res;
// }

// const numRors = 5;
// console.log(generate(numRors));


// #344 Reverse String
// function reverseString(s){
//   let start = 0;
//   let end = s.length - 1;
//   while(start < end){
//     let temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;
//     start++;
//     end--
//   }
//   return s
// }

// const s = ["h","e","l","l","o"];
// console.log(reverseString(s))

/*
1️⃣ Why do you want to join our company?
I want to join your company because it provides a great environment for learning and growth, works on innovative projects that align with my skills, and offers opportunities to contribute meaningfully while improving myself technically and professionally.

2️⃣ Two-pointers approach (with example)
The two pointers approach uses two indices to traverse a data structure either from opposite ends or in the same direction.
✅ Efficient because it avoids extra space and runs in O(n) time.

3️⃣ Explain Time vs Space Complexity

Time Complexity → Measures how much time an algorithm takes as input size grows. Example: Linear search is O(n).

Space Complexity → Measures how much extra memory an algorithm needs. Example: Storing a frequency map needs O(n) space.

Trade-off: Sometimes we use more space to save time (e.g., HashMap for fast lookup).

4️⃣ What is a HashMap in JS?

A HashMap in JS is a data structure that stores key-value pairs for quick lookup.

Implemented using Map or Object.

Map is preferred since keys can be of any type and order is preserved.


5️⃣ Explain map.has() vs map.get()

map.has(key) → Returns true/false if the key exists.

map.get(key) → Returns the value for the key (or undefined if not present).
*/