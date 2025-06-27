// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.

// Example:
// Input: "javascript"
// Output: "tpircsavaj"

// problem-1 : 
// 1- first we define an empty variable (stringReversed)
// 2- then we define a for loop that pass the original array from end to start 
//     and add each item in stringReversed array in correct order (from start to end)

// ***************************************************
function reverseString(string) {
    let stringReversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        stringReversed += string[i];
    }
    return stringReversed;
}

let input1 = "waseem"
let p1result = reverseString(input1);
console.log(`reverse of string "${input1}" is :`, p1result);

console.log("*************************************************")
function showReversedOutput() {
    let outputElement = document.getElementById("output-1");
    outputElement.innerText = `Output : "${p1result}"`;
    outputElement.style.display = "block";
}

// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false


// problem 2 : 
// 1- first we define a function (just like problem 1) to get the reverse of an array 
//      and then checks the equality with the main array if true (return true)
// 2- here we cover that capital and small letters is not sensitive so "wiw" and "WIW" is palindrome

function checkStringPalindrome(string) {
    let stringReversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        stringReversed += string[i];
    }
    return stringReversed.toLowerCase() == string.toLowerCase()
}

let input2 = "toot"
let p2result = checkStringPalindrome(input2);
console.log(`the text "${input2}" palindrome ? `, p2result);

console.log("*************************************************")
function checkStringPalindromeOutput() {
    let outputElement = document.getElementById("output-2");
    outputElement.innerText = `Output : "${p2result}"`;
    outputElement.style.display = "block";
}
// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.

// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9


// problem 3 :
// 1- function take an array parameter and then we define a variable (maxNum) 
//      that its value is the first item in the array
// 2- using a for loop we pass the array items and keep checking if any item is larger than the maxNum
//      and finally we return the maxNum

function returnMaxNumber(numbers) {
    let maxNum = numbers[0]
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (maxNum < numbers[i])
            maxNum = numbers[i]
    }
    return maxNum
}

let input3 = [5, 6, 8, 1, 2];
let p3result = returnMaxNumber(input3)
console.log("Maximum Number in the array is ", p3result)

function returnMaxNumberOutput() {
    let outputElement = document.getElementById("output-3");
    outputElement.innerText = `Output : "${p3result}"`;
    outputElement.style.display = "block";
}

console.log("*************************************************")
// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).

// Example:
// Input: 5
// Output: 120

// problem 4 :
// 1 - we use recursion function to keep getting number * number - 1 
//     until we reach 1 (base case) and then we return the multiply of all the functions we get
// 2- and we cover 0 that its fractional is 1

function factorial(number) {
    if (number === 0 || number === 1)
        return 1;
    else
        return number * factorial(number - 1);
}

let input4 = 5;
let p4result = factorial(input4)
console.log(`factorial of ${input4} is :`, p4result)

function factorialOutput() {
    let outputElement = document.getElementById("output-4");
    outputElement.innerText = `Output : "${p4result}"`;
    outputElement.style.display = "block";
}

console.log("*************************************************")
// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the number is prime and false otherwise.

// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)

// problem 5 :
// 1- first we have 1 and 2 that always a prime numbers
// 2- we make a for loop that starts from 2 (miniumm divisor) and ends at number/2 (max possible divisor)
// 3- if one of the modules of number from 2 to number/2 is 0 => is not prime (return false) 
//     and else return true (prime)

function checkPrime(number) {
    if (number === 1 || number === 2)
        return true;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0)
            return false
    }
    return true
}

let input5 = 4
let p5result = checkPrime(input5)
console.log(`the number ${input5} is prime ?`, p5result)

console.log("*************************************************")

function checkPrimeOutput() {
    let outputElement = document.getElementById("output-5");
    outputElement.innerText = `Output : "${p5result}"`;
    outputElement.style.display = "block";
}
// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// problem 6 :
// 1- first we define an empty array(uniqueArray) that we will put no duplicated elements inside
// 2- we define a counter to track uniqueArray to put values inside
// 3- we define two for loops to compare between the two arrays
// 4- we defined a bool to check the uniqueness of this comparison between each two elements
//     if It's true we will break the loop and we won't put the value in the uniqueArray
//     if false we will put our new value in the array (in counter index) and increase counter value by 1
// 5- finally we will return the uniqueArray we got

function removeDuplicates(numbers) {
    let uniqueArray = [];
    let counter = 0;

    for (let i = 0; i < numbers.length; i++) {
        let isDuplicated = false;
        for (let j = 0; j < counter; j++) {
            if (numbers[i] === uniqueArray[j]) {
                isDuplicated = true;
                break;
            }
        }
        if (!isDuplicated) {
            uniqueArray[counter] = numbers[i];
            counter++;
        }
    }
    return uniqueArray;
}

let input6 = [2, 2, 3, 3, 4, 4, 5, 5, 6]
console.log("original array :", input6);
let p6result = removeDuplicates(input6)
console.log("array after removing duplicates :", p6result);

console.log("*************************************************")

function removeDuplicatesOutput() {
    let outputElement = document.getElementById("output-6");
    outputElement.innerText = `Output : "${p6result}"`;
    outputElement.style.display = "block";
}


// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.

// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55

// problem 7 :
// 1- first we define an index = 0 and a bool to check if there's missing number in the array
// 2- we define a variable that will later take the missing value in the index
// 3- in a for loop we check by passing each num in the array from 1 to numbers length 
//     and is any number missed in the sequence we set the bool to true and the missingNumber and then break the loop
// 4- in testing we define a function to make a sequence array with end number and missing numer in it and another
//      function to define a normal array(without missing value)
function makeSequenceArrayException(array, start, end, except) {
    let index = 0;
    for (let i = start; i <= end; i++) {
        if (i === except) continue;
        array[index] = i;
        index++;
    }
    return array
}
function makeSequenceArray(array, end) {
    let index = 0;
    for (let i = 1; i <= end; i++) {
        array[index] = i;
        index++;
    }
    return array
}
function findMissing(numbers, start) {
    let index = 0;
    let missingNumCheck = false;
    let missingNumb = 0;
    for (let i = start; i <= numbers.length; i++) {
        if (numbers[index] != i) {
            missingNumCheck = true;
            missingNumb = i;
            break;
        }
        index++;
    }
    if (missingNumCheck)
        return missingNumb
    else return "No missing num"
}
let test7 = []

let input7 = makeSequenceArrayException(test7, 20, 100, 55)
let p7result = findMissing(input7, 20)
console.log("Missed Num from the Array : ", p7result)

console.log("*************************************************")

function findMissingOutput() {
    let outputElement = document.getElementById("output-7");
    outputElement.innerText = `Output : "${p7result}"`;
    outputElement.style.display = "block";
}

// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.

// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"

// problem 8 :
// 1- we define an empty initial variable and a for loop to pass the array 
//     and check first letter and capitalize it and
//      the spaces in the array and capitalize each letter after that space
// 2 - and add all the lower case letters normally to result

function capitalizeFirst(string) {
    let capitalizedText = '';
    for (let i = 0; i < string.length; i++) {
        if (i === 0 || string[i - 1] === ' ')
            capitalizedText += string[i].toUpperCase();
        else
            capitalizedText += string[i];
    }
    return capitalizedText;
}

let input8 = "hello waseem"
let p8result = capitalizeFirst(input8)
console.log("original text :", input8)
console.log("text afer capitalizing :", p8result)

console.log("*************************************************")

function capitalizeFirstOutput() {
    let outputElement = document.getElementById("output-8");
    outputElement.innerText = `Output : "${p8result}"`;
    outputElement.style.display = "block";
}

// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).

// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false

// problem 9 :
// 1- first we will check if the two arrays have the same length (It must be the same length)
// 2- we will make 2 arrays that contains frequency count of all ASCII code (0 -> 255) (all numbers and letters) 
//     and we set everything to zero
// 3- each char in string1 and string2 have an ASSCI code so we increase each ASCII code index in the 
//     frequency array by 1 for each char we have in the strings (1 and 2)
// 4- finally we check if the two strings have an equal freqauency and value for each ASCII index (if no return false)

function anagramCheck(string1, string2) {

    if (string1.length !== string2.length) {
        return false;
    }

    let freq1 = new Array(256);
    let freq2 = new Array(256);

    for (let i = 0; i < 256; i++) {
        freq1[i] = 0;
        freq2[i] = 0;
    }

    for (let i = 0; i < string1.length; i++) {
        let code1 = string1.charCodeAt(i);
        let code2 = string2.charCodeAt(i);
        freq1[code1]++;
        freq2[code2]++;
    }

    for (let i = 0; i < 256; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }

    return true;
}

let input9_1 = "listen", input9_2 = "silent";
let p9result = anagramCheck(input9_1, input9_2);
console.log(`The string "${input9_1}" and string "${input9_2}" is anagram ?`, p9result);

console.log("*************************************************")

function anagramCheckOutput() {
    let outputElement = document.getElementById("output-9");
    outputElement.innerText = `Output : "${p9result}"`;
    outputElement.style.display = "block";
}


// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]

// problem 10 :
// 1- first we define the final chunked array(result) and the chunkedindex to track adding the chunks to the array
// 2- we define a while loop with a condition to stop at the length of the main array
// 3- inside the while we have a subchunk and using a for loop we put numbers from 
//     the original array to the chunk at the same size we give
// 4- finally we put each cunk in the result array and increase our chunkedinex and return our result
// Note : we put an additional condition in the for loop (i < numbers.length) to make sure 
//     even the user enters the size larger than the original array length we will get a 1 chunk at minimum

function chunkArray(numbers, size) {
    let chunkedArray = [];
    let chunkedIndex = 0;
    let i = 0;

    while (i < numbers.length) {
        let chunk = [];
        for (let j = 0; j < size && i < numbers.length; j++) {
            chunk[j] = numbers[i];
            i++;
        }
        chunkedArray[chunkedIndex] = chunk;
        chunkedIndex++;
    }

    return chunkedArray;
}

let input10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let splitSize = 3
let p10result = chunkArray(input10, splitSize)
console.log("original array : ", input10)
console.log("chunked array : ", p10result)

console.log("*************************************************")

function chunkArrayOutput() {
    let outputElement = document.getElementById("output-10");
    outputElement.innerText = "Output: " + JSON.stringify(p10result);
    outputElement.style.display = "block";
}

// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]

// problem 11 :
// 1- we create a bool to track finding the pair we want and an array with size 2 (pair)
// 2- in 2 for loops we pass and compatre each array number with all others
// 3- if we found 2 numbers hits the target we set the bool to true and add the numbres to the pair array
// 4- we break the inside loop using break and break the outer using i = numbers.length; to apply breaking condition
// Note : (i !== j) condition to make the array not comparing the number with itself (only compare unique numbers)

function getSumTarget(numbers, target) {
    let targetFound = false
    let targetPair = new Array()
    let index = 0
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] + numbers[j] == target) {
                targetFound = true
                targetPair[index] = numbers[j]
                targetPair[index + 1] = numbers[i]
                break;
                i = numbers.length;
            }
        }
    }

    if (targetFound)
        return targetPair;
    else
        return "not found";
}

let input11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let target = 9
let p11result = getSumTarget(input11, target)
console.log("sum pair of target :", p11result)

console.log("*************************************************")
function getSumTargetOutput() {
    let outputElement = document.getElementById("output-11");
    outputElement.innerText = `Output : "${p11result}"`;
    outputElement.style.display = "block";
}
// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]

// problem 12 :
// 1- we define a condition using % to handle roataeIndex larger than the array size example : if array.length = 7 and rotateIndex = 8
//     rotateIndex will be 1 initially
// 2- we deine an empty array to store the numbers after rotatting 
// 3- in a for loop we define new index that have a value (i+numbers.length % numbers.length) to put each number in the correct place 

function rotateArray(numbers, rotateIndex) {

    rotateIndex = rotateIndex % numbers.length;

    let rotatedArray = [];

    for (let i = 0; i < numbers.length; i++) {
        let newIndex = (i + rotateIndex) % numbers.length;
        rotatedArray[i] = numbers[newIndex];
    }

    return rotatedArray;
}

let input12 = [1, 2, 3, 4, 5];
let rotateIndex = 2;
let p12result = rotateArray(input12, rotateIndex)
console.log("Original Array : ", input12)
console.log(`Rotated array with index ${rotateIndex} is :`, p12result);

console.log("*************************************************")
function rotateArrayOutput() {
    let outputElement = document.getElementById("output-12");
    outputElement.innerText = `Output : "${p12result}"`;
    outputElement.style.display = "block";
}

// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

// problem 13 :
// 1- we define an empty array to put intersected values inside and an inedx to track our inserting
// 2- we remove the duplicates from each array to make sure no intersected number is added more than once (we define removeDuplicates function on problem 6)
// 3- we define two for loops to compare the numbers on each array and if we find equality we put it in intersectionNums array and break 
//     (to make sure the value not added more than one time)
// 4- finally we return our array result

function intersectionArrays(array1, array2) {
    let intersectionNums = []
    let index = 0
    let uniqueArray1 = removeDuplicates(array1)
    let uniqueArray2 = removeDuplicates(array2)
    for (let i = 0; i < uniqueArray1.length; i++) {
        for (let j = 0; j < uniqueArray2.length; j++) {
            if (uniqueArray1[i] == uniqueArray2[j]) {
                intersectionNums[index] = uniqueArray2[j];
                index++;
                break;
            }
        }
    }
    return intersectionNums
}

let input13_1 = [1, 2, 3, 4, 4]
let input13_2 = [3, 4, 5, 6, 4, 2]
let p13result = intersectionArrays(input13_1, input13_2)
console.log(`Intersection between [${input13_1}] and [${input13_2}] is :`, p13result)

console.log("*************************************************")
function intersectionArraysOutput() {
    let outputElement = document.getElementById("output-13");
    outputElement.innerText = `Output : "${p13result}"`;
    outputElement.style.display = "block";
}

// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

// problem 14 :
// 1- first we define an array that contains all ASCII code indices and we set it all to zero
// 2- everytime a letter is appeared we increase its ASCII code by 1
// 3- Finally we make our result into a map and put each letter next to how many times its ASCII code appears
// Note : We do something look like this in problem 9

function countChar(string) {
    let freq1 = new Array(256);

    for (let i = 0; i < 256; i++) {
        freq1[i] = 0;
    }

    for (let i = 0; i < string.length; i++) {
        let code1 = string.charCodeAt(i);
        freq1[code1]++;
    }

    let countMap = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let code = string.charCodeAt(i);
        countMap[char] = freq1[code];
    }
    return countMap;
}

let input14 = "Waseem"
let p14result = countChar(input14)
console.log("frequency map :", p14result)

console.log("*************************************************")
function countCharOutput() {
    let outputElement = document.getElementById("output-14");
    outputElement.innerText = "Output: " + JSON.stringify(p14result);
    outputElement.style.display = "block";
}
// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]

// problem 15 :
// 1- main function : first we define an empty result array(flattenedArray) and index to put numbers inside intersectionArrays
// 2- recursion function : this function works on nested arrays in any degree (example : [1, [2, 3], [4, [5, 6]]]) 
//     and flattens it in recursion to raw numbers (we call this recursion inside main function)
// 3- finally we put all our numbers in the flattenedArray and return it according to our index

function flattenArrayRecursive(nestedArray) {
    let flattenedArray = [];
    let index = 0;

    function flatten(input) {
        for (let i = 0; i < input.length; i++) {
            if (Array.isArray(input[i])) {
                flatten(input[i]);
            } else {
                flattenedArray[index] = input[i];
                index++;
            }
        }
    }

    flatten(nestedArray);
    return flattenedArray;
}

let input15 = [1, [2, 3], [4, [5, 6]]]
let p15result = flattenArrayRecursive(input15)
console.log("Flattened Array : ", p15result)

console.log("*************************************************")
function flattenArrayRecursiveOutput() {
    let outputElement = document.getElementById("output-15");
    outputElement.innerText = `Output : "${p15result}"`;
    outputElement.style.display = "block";
}

// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"

// problem 16 :
// 1- we define maxLen variable to store the maximum length of each word in the sentence
// 2- and maxword to store the max word letters inside and a currentword tracker to store where we are in the sentence
// 3- in a for loop we put our letters in a char and we define " " to handle last word If sentence[i] is undefined at the end of the loop, 
//     we default it to a space so the last word still gets in
// 4- we add our char to currentWord and we stop when we reach " " (at the end of the word)
// 5- finally we compare with the maxLen and if it's bigger we update new maxLen and set 
//     maxWord is this word , and at the end we reset our currentword to " "

function longestWord(sentence) {
    let maxLen = 0;
    let maxWord = "";
    let currentWord = "";

    for (let i = 0; i <= sentence.length; i++) {
        let char = sentence[i] || " ";
        if (char !== " ") {
            currentWord += char;
        } else {
            if (currentWord.length > maxLen) {
                maxLen = currentWord.length;
                maxWord = currentWord;
            }
            currentWord = "";
        }
    }

    return maxWord;
}

let input16 = "The quick brown fox jumped over the lazy dog"
p16result = longestWord(input16)
console.log(`The longest word in the sentence "${input16}" is`, `"${p16result}"`)

console.log("*************************************************")
function longestWordOutput() {
    let outputElement = document.getElementById("output-16");
    outputElement.innerText = `Output : "${p16result}"`;
    outputElement.style.display = "block";
}

// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'

// problem 17 :
// 1- first we define a frequency that counts all ASCII codes chars and we set it to zero initially
// 2- we define maxCount to count how many times the char appears and mostChar to store this char
// 3- in a for loop we put each element in a char and we check if it is string (if string use charCodeAt to have ASCII) and add it to code
// 4- and If it's number jus add the numbers to the code
// 5- finally we make a comparison to get the most frequency (using maxCount) (num or string) and returns it

function mostFrequentChar(array) {
    let freq = []
    for (let i = 0; i < 256; i++) {
        freq[i] = 0;
    }

    let maxCount = 0
    let mostChar

    for (let i = 0; i < array.length; i++) {
        let char = array[i];
        let code;

        if (typeof char === "string") {
            code = char.charCodeAt(0);
        } else {
            code = char;
        }

        freq[code]++;

        if (freq[code] > maxCount) {
            maxCount = freq[code];
            mostChar = char;
        }
    }

    return mostChar;
}

let input17 = [1, 2, 3, 2, 2, 4, 5, 2]
p17result = mostFrequentChar(input17)
console.log(`Most frequent char in [${input17}] is :`, p17result)

console.log("*************************************************")
function mostFrequentCharOutput() {
    let outputElement = document.getElementById("output-17");
    outputElement.innerText = `Output : "${p17result}"`;
    outputElement.style.display = "block";
}

// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)

// problem 18 :
// 1- the common bubble sort but sorting object arrays (very simple to explain :) )

function bubbleSort(objectString) {
    for (let i = 0; i < objectString.length; i++) {
        for (let j = 0; j < objectString.length - i - 1; j++) {
            if (objectString[j].age > objectString[j + 1].age) {
                let temp = objectString[j]
                objectString[j] = objectString[j + 1]
                objectString[j + 1] = temp
            }
        }
    }
    return objectString
}

let input18 = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
let p18result = bubbleSort(input18)
console.log("sorted array according to age : ", p18result)

console.log("*************************************************")
function bubbleSortOutput() {
    let outputElement = document.getElementById("output-18");
    outputElement.innerText = JSON.stringify(p18result);
    outputElement.style.display = "block";
}

// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.

// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)

// problem 19 :
// 1- first we define ASCCI code array (as we do in prevoius examples) and we set it initially to zero 
// 2- after that we count each ASCII code frequency (each letter we have we increase frequency by 1)
// 3- finally after we fill frequency array we get the first only one time appearing from it and we take this letter array[i]
//     if no unique letter we return No unique character found

function uniqueChar(array) {
    let freq = new Array(256);
    for (let i = 0; i < 256; i++) {
        freq[i] = 0;
    }

    for (let i = 0; i < array.length; i++) {
        let code = array.charCodeAt(i);
        freq[code]++;
    }

    for (let i = 0; i < array.length; i++) {
        let code = array.charCodeAt(i);
        if (freq[code] === 1) {
            return array[i];
        }
    }

    return "No unique character found";
}

let input19 = "swiss"
let p19result = uniqueChar(input19)
console.log(`unique char in "${input19}" is :`, p19result)
console.log("*************************************************")
function uniqueCharOutput() {
    let outputElement = document.getElementById("output-19");
    outputElement.innerText = `Output : "${p19result}"`;
    outputElement.style.display = "block";
}
// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]

// problem 20 :
// 1- first we define an empty temp array and we merge the two arrays and put it inside (as one array)
// 2- then we remove duplicates from each array so if we have a number appearing 
//     more than one time in the array we only want one (for correct comparison later) 
// 3- we define our symmetricNums array(our result) and an index to track adding numbers inside it
// 4- we define a count=0 that will track repeating numbers in our temp array , and every time the numbers is showed we add 1
// 5- when our counter is equal to 1 then we add this number to our result and increase index 1 to continue adding

function symmetricArray(array1, array2) {
    let tempArray = [];
    let uniqueArray1 = removeDuplicates(array1)
    let uniqueArray2 = removeDuplicates(array2)

    for (let i = 0; i < uniqueArray1.length; i++) {
        tempArray[tempArray.length] = uniqueArray1[i];
    }
    for (let i = 0; i < uniqueArray2.length; i++) {
        tempArray[tempArray.length] = uniqueArray2[i];
    }

    let symmetricNums = [];
    let index = 0;

    for (let i = 0; i < tempArray.length; i++) {
        let count = 0;
        for (let j = 0; j < tempArray.length; j++) {
            if (tempArray[i] === tempArray[j]) {
                count++;
            }
        }

        if (count === 1) {
            symmetricNums[index] = tempArray[i];
            index++;
        }
    }
    return symmetricNums;
}

let input20_1 = [1, 1, 2, 3]
let input20_2 = [3, 4, 5]

let p20result = symmetricArray(input20_1, input20_2)

console.log(`symmetric between [${input20_1}] and [${input20_2}] is :`, p20result)

function symmetricArrayOutput() {
    let outputElement = document.getElementById("output-20");
    outputElement.innerText = `Output : "${p20result}"`;
    outputElement.style.display = "block";
}