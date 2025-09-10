// 1.Reverse a String.....

// Given a string, return a new string or same with the reversed order of characters
// Examples
// reverse("hello") === "olleh"

// function reverse(str){
//   if(str.length === 0){
//     return false
//   }
//   str = str.split("");
//   console.log(str)
//   let start = 0;
//   let end = str.length - 1;
//   while(start < end){
//     let temp = str[start];
//     str[start] = str[end];
//     str[end] = temp;
//     start++,
//     end--;
//   }
//   return str;
// }

// console.log(reverse("hello"))

// Optimized 
// function reverse(str){
//   let reversed = "";

//   for(let i = 0; i < str.length; i++){
//     reversed = str[i] + reversed;
//   }

//   // for of loop
//   for(let char of str){
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// console.log(reverse("hello"))

// 2.Palindrom.....

// Given a string return true if string palindrom
// Example
// palindrom("kayak") === true

// function palindrom(str){
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(palindrom("madam"))

// 3.Max Characters.....

// Given a string return the character that is most commonly used
// Example
// maxChar("abccccd") === "c"

// function maxChar(str){
//   if(str.length === 0){
//     return false;
//   }

//   const map = new Map();
//   let maximum = 0;
//   let val = "";
//   for(let char of str){
//     map.set(char, (map.get(char) || 0) + 1);
//     if(map.get(char) > maximum){
//       maximum = map.get(char)
//       val = char;
//     }
//   }
//   return { maximum, val }
// }

// console.log(maxChar("apple 1231111"));

// 4.Array Chunks.....

// Given an array and chunk size, divide the array into many subarrays
// Example
// chunk([1,2,3,4], 2) ==> [[1,2], [3,4]]

// function chunk(array, size){
//   const result = [];
//   let index = 0;
//   while(index < array.length){
//     result.push(array.slice(index, index + size));
//     index += size;
//   }
//   return result;
// }

// console.log(chunk([1,2,3,4], 1))

// 5.Title Case
// Capitalize the first letter of the each word in string
// Example
// capitalize("this is rizwan") ==> This Is Rizwan

// function capitalize(str){
//   str = str.split(" ")
//   for(let i = 0; i < str.length; i++){
//     str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
//   }
//   return str.join(" ")
// }

// console.log(capitalize("this is rizwan from full stack developer"))

// 6.Anagrams.....

// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram if it used the same character in the same quntity
// Example
// anagrams("RAIL! SAFETY!", "fairy tales") ==> true

// function anagrams(strA, strB){

//   strA = strA.toLowerCase().replace(/[\W]/g, "")
//   console.log(strA)
//   strB = strB.toLowerCase().replace(/[\W]/g, "")

//   if(strA.length !== strB.length){
//     return false;
//   }


//   const mapA = new Map();

//   for(let char of strA){
//     mapA.set(char, (mapA.get(char) || 0) + 1);
//   }

//   for(let char of strB){

//     if(!mapA.has(char)){
//       return false;
//     }

//     mapA.set(char, (mapA.get(char) - 1));

//     if(mapA.get(char) < 0){
//       return false;
//     }
  
//   }
//   return true;
// }

// console.log(anagrams("RAIL! SAFETY!", "fairy tales"))

// Optimize

// function clearnStr(str){
//   return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join();
// }

// function anagrams(strA, strB){
//   return clearnStr(strA) === clearnStr(strB)
// }

// console.log(anagrams("RAIL! SAFETY!", "fairy tales"))

// 7.Count Vowels.....

// Write a function that returns the number of vowels
// Example 
// vowels letters = ["a", "e", "i", "o", "u"]
// vowels("Hi There") ==> 3

// function vowels(str){
//   str = str.toLowerCase()
//   let count = 0;
//   const set = new Set(["a", "e", "i", "o", "u"]);

//   for(let i = 0; i < str.length; i++){
//     if(set.has(str[i])){
//       count++
//     }
//   }
//   return count;
// }

// console.log(vowels("How are you?"))

// 8.FizzBuzz.....

// Write a program that console the numbers from 1 to n but
// multiple of three print "fizz" multiple of five "buzz"
// multiple of both "fizzbuzz"

// function fizzBuzz(n){
//   for(let i = 1; i <= n; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//       console.log("FizzBuzz")
//     }
//     else if(i % 3 == 0){
//       console.log("Fizz")
//     }
//     else if(i % 5 == 0){
//       console.log("Buzz")
//     }
//     else{
//       console.log(i)
//     }
//   }
//   return;
// }

// fizzBuzz(20);

// 9.String Pattern.....

// Write a function that print shape in inc order
// Example
// steps(3)
// "#"
// "##"
// "###"

// function steps(n){
//   for(let i = 1; i <= n; i++){
//     let print = ""
//     for(let j = 0; j < i; j++){
//       print += "#"
//     }
//     console.log(print);
//   }
// }

// steps(6)

// 10.Pyramid Pattern.....

// Write a function that print shape in inc order
// Example
// steps(3)
// "  #  "
// " ### "
// "#####"

// function pyramid(n){
//   const mid = Math.floor((2*n - 1) / 2);
//   for(let i = 0; i < n; i++){
//     let line = "";
//     for(let j = 0; j < 2*n - 1; j++){
//       if(j >= mid - i && j <=mid + i){
//         line += "#"
//       }
//       else {
//         line += " "
//       }
//     }
//     console.log(line)
//   }
// }

// pyramid(3)