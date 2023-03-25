//1.a Print odd numbers in an array

const log = (param) => console.log(param);

const oddArr = [];

(function oddNum(num){
    for(let i = 1; i < num; i++){
        if(i % 2 != 0){
            oddArr.push(i);
        }
    }
})(45)

console.log(oddArr);

log("--------------------------------------------------");

//1.b Convert all the strings to title caps in a string array

const capResult = [];

(function capsFirWord(sentence){
    const splitString = sentence.split(" ");
    for(arr of splitString){
        capResult.push(arr[0].toUpperCase() + arr.substr(1));
        // substr means it will delete the element from a word
    }
})("when your heart breaks your mind starts working")

log(capResult);
log("--------------------------------------------------");

//1.c sum of all numbers in array

const numbers = [];
var sum = 0;

(function (num){
    for(let i = 1; i <= num; i++){
        //numbers.push(i);
        sum = sum + i;       
    }
})(4)
log(sum);
log("--------------------------------------------------");

//1.d return all the prime numbers in an array.
var primes = [];
(function(start, end){
    for(let i = start; i <= end; i++){
        var isPrime = true;
        for(let j =2; j < i; j++){
            if( i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(i);
        }
    }
}(1, 5))

log(primes);
log("--------------------------------------------------");

//1.e Return all the palindromes in array

let palindrome = [];
(function(words){
    for(word of words){
        let lowerCase = word.toLowerCase();
        let splitWord = lowerCase.split("");
        let reverseWord = splitWord.reverse();
        let result = reverseWord.join("");
        if(lowerCase === result){
            palindrome.push(lowerCase);
        }
    }
}(["kalil","khalidh","Madam","Dad","Mom"]))

console.log(palindrome)
log("--------------------------------------------------");
/*
function getPalindromes(words) {
    let palindromes = [];
    for (let word of words) {
      let isPalindrome = true;
      for (let i = 0; i < word.length / 2; i++) {
        //console.log(word[word.length - i - 1].toUpperCase())
        //console.log(word)
        if (word[i] !== word[word.length - i - 1]) {
          isPalindrome = false;
          break;
        }
      }
      if (isPalindrome) {
        palindromes.push(word);
      }
    }
    return palindromes;
  }
  
  console.log(getPalindromes(["level", "hello", "world", "madam", "mom"]));
  
  log("--------------------------------------------------");
*/

//1.f Return median of two sorted arrays of the same size 
//median means : The median is the value in the middle of a data set, 
//meaning that 50% of data points have a value smaller or equal to the median 
//and 50% of data points have a value higher or equal to the median. 
//For a small data set, you first count the number of data points (n) 
//and arrange the data points in increasing order.

// 1,2,3,4,5,6,7 = median is 4 , 1,2,3,4,5,6,7,8 = median is 4+5 = 9 % 2 = 4.5

function findMedianSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    //let arr1Len = arr1.length;
    //let arr2Len = arr2.length;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        //console.log(arr1[i]);
        //console.log(arr2[j]);

        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    let mid = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      return mergedArray[mid];
    }
  }
  
  console.log(findMedianSortedArrays([1, 3, 5], [2, 8, 6]));
  
  log("--------------------------------------------------");

  //1.f Remove dulicates from an array
 /* 
 The below code is for finding the duplicates with the help of object, 
 if its same key then it will be pushed in duplicates...

  function findDuplicates(arr) {
    let duplicates = [];
    let frequency = {};
    for (let i = 0; i < arr.length; i++) {
        //console.log(frequency[arr[i]]);
      if (frequency[arr[i]]) {
        duplicates.push(arr[i]);
      } else {
        frequency[arr[i]] = true;
      }
    }
    return duplicates;
  }
  
  console.log(findDuplicates([1, 2, 3, 1, 2, 3, 4, 5, 6, 5]));
  */
  
let uniqueElements = [];
let frequency = {};
(function(arr){
    for(let i = 0; i < arr.length; i++){
        if(!frequency[arr[i]]){
            uniqueElements.push(arr[i]);
            frequency[arr[i]] = true;
        }
    }
}([1, 2, 3, 1, 2, 3, 4, 5, 6, 5]))

console.log(uniqueElements)
console.log(frequency)
  
log("--------------------------------------------------");

// 1.f Rotate an array by k times

//Testing for rotating the array
// let testArr = [1,2,3,4,5,6]
// console.log(testArr.unshift(testArr.pop()))
// console.log(testArr.unshift(testArr.pop()))


(function(arr, k){
    console.log("Before Rotating Array :" + arr);
    for(let i = 1; i <= k; i++){
        arr.unshift(arr.pop());
        console.log(`After rotating ${i} times, New Array will be : ${arr}`);
    }
    return arr
}([1,2,3,4,5,6], 3))

log("--------------------------------------------------");
log("----------- By using Arrow function -------------");

//2.a Print odd numbers in an array
//let resultArray = [];
const primeNum = (num) => {
    let resultArray = [];
    for(let i = 0; i < num; i++){
        if(i % 2 != 0){
            resultArray.push(i)
            // console.log(resultArray)
        }
    }
    console.log(resultArray)
    return resultArray;
}
primeNum(45)
log("--------------------------------------------------");


//2. b Convert all the strings to title caps in a string array

const makeCaps = (sentence) => {
    let result = [];
    let sepSentences = sentence.split(" ");
    for(word of sepSentences){
        //console.log(word)
        let capsOfFirstWord = word[0].toUpperCase() + word.substr(1);
        // substr means it will delete the word based on the placement of word
        result.push(capsOfFirstWord);
    }

    console.log(result);
    return result;
}

makeCaps("Sneha from chennai");
log("--------------------------------------------------");

//2.c sum of all numbers in array
let total = 0;
const sumOfArr = (arr) => {
    for(let i = 0; i < arr.length; i++){
        total = total + arr[i];
    }    
}
sumOfArr([1,2,3,45,87]);
console.log(total);
log("--------------------------------------------------");

//2.d return all the prime numbers in an array
// prime number : it is only divisible by itself
const findPrime = (start, end) => {
    let result = [];
    for(let i = start; i <= end; i++){
        let isPrime = true;
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            result.push(i)
        }
    }
    console.log(result);
    return result;
}

findPrime(1, 10);
log("--------------------------------------------------");

//2.e return all the palindrome in an array

const findPalindrome = (arr) => {
    let result = [];
    for (word of arr){
        let makeLowercase = word.toLowerCase();
        let splitWord = makeLowercase.split("");
        let reverseWord = splitWord.reverse();
        let joinReversedWord = reverseWord.join("");
        if (makeLowercase === joinReversedWord){
            result.push(makeLowercase);
        }
    }

    console.log(result);
    return result

     
}

findPalindrome(["madam", "dad", "sneha"])
log("--------------------------------------------------");
