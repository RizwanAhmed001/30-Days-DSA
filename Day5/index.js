// DSA
// #9 Palindrome Number
// function isPalindrome(x){
//   x = String(x)
//   let y = Number(x.split("").reverse().join(""))
//   if((Number(x) - y) === 0){
//     return true
//   }
//   return false
// }

// const x = 121;
// console.log(isPalindrome(x))

// #3 Longest Substring Without Repeating Characters
// function lengthOfLongestSubstring(s){
//   let count = 0;
//   let result = []
//   let map = new Map();
//   for(let ch of s){
//     if(map.has(ch)){
//       count = 0
//     }else{
//       count += 1
//       result.push(count)
//     }
//     map.set(ch, (map.get(ch) || 0) + 1)
//   }
//   return Math.max(...result)
// }

// const s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s))

// #28 Find the Index of the First Occurrence in a String
// function strStr(haystack, needle) {
//   if (haystack.includes(needle)) {
//     return haystack.indexOf(needle)
//   }
//   return -1
// }

// const haystack = "sadbutsad";
// const needle = "sad";
// console.log(strStr(haystack, needle))

// #290 Word Pattern
// function wordPattern(pattern, s){
//   pattern = pattern.split("")
//   s = s.split(" ")
//   let map = new Map();
//   let n = pattern.length;
//   let result = false
//   for(let i = 0; i < n; i++){
//     console.log(s[i])
//     if(map.has(pattern[i]) && map.get(pattern[i]) === s[i]){
//       result = true
//     }
//     else if(map.has(pattern[i]) && map.get(pattern[i]) !== s[i]){
//       result = false
//     }
//     map.set(pattern[i], s[i])
//   }
//   return result
// }

// const pattern = "abba";
// const s = "dog cat cat fish";
// console.log(wordPattern(pattern, s))

// #205 Isomorphic Strings
// function isIsomorphic(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let sToT = new Map();
//   let tToS = new Map();
//   for (let i = 0; i < t.length; i++) {
//     let c1 = s[i]; // g
//     let c2 = s[i]; // d

//     if ((sToT.has(c1) && sToT.get(c1) !== c2) || (tToS.has(c2) && tToS.get(c2) !== c1)
//     ) {
//       return false;
//     }
//     sToT.set(c1, c2);
//     tToS.set(c2, c1);
//   }
//   return true
// }

// const s = "egg";
// const t = "add";
// console.log(isIsomorphic(s, t));

// #58 Length of Last Word
// function lengthOfLastWord(s){
//   s = s.trim().split(" ");
//   return s[s.length - 1].length
// }

// const s = "   fly me   to   the moon  ";
// console.log(lengthOfLastWord(s))

// #771 Jewels and Stones
// function numJewelsInStones(jewels, stones){
//   let map = new Map();
//   let n = stones.length;
//   let count = 0;
//   for(let ch of jewels){
//     map.set(ch, (map.get(ch) || 0) +1 )
//   }
//   for(let i = 0; i < n; i++){
//     if(map.has(stones[i])){
//       count++
//     }
//   }
//   return count;
// }

// const jewels = "aA";
// const stones = "aAAbbbb";
// console.log(numJewelsInStones(jewels, stones))

/*
Why should we hire you? (short answer)

I have strong skills in JavaScript, React, and Node.js, along with hands-on project experience, which makes me confident I can contribute effectively from day one.

Stack vs Queue (real-life examples)

Stack (LIFO – Last In, First Out): Like a pile of plates — you take the top plate first.

Queue (FIFO – First In, First Out): Like a line at a ticket counter — first person in line gets served first.

Tell me about a project you worked on
"I built a Weather Forecast Application using JavaScript, HTML, CSS, and APIs. It included location-based forecasts, extended predictions, error handling, and a responsive UI. This helped me strengthen my API integration and frontend development skills.

Explain event loop in JS

JavaScript is single-threaded. The event loop allows async tasks (like promises, timeouts, I/O) to run without blocking main execution. It continuously checks the call stack and callback queue, executing pending tasks once the stack is free.

Difference between var, let, const

var: Function-scoped, allows redeclaration, hoisted.

let: Block-scoped, cannot be redeclared in same scope.

const: Block-scoped, cannot be reassigned (but objects/arrays can be mutated).
*/