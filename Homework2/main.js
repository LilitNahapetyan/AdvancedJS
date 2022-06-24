/*1.Given data of people, check and return array of peoples, which age over 21 */
const people = [
  {
    name: "tim",
    address: {
      city: "paris",
    },
    age: 35,
  },
  {
    name: "john",
    address: {
      city: "tbilisi",
    },
    age: 35,
  },
  {
    name: "alex",
    address: {
      city: "new york",
    },
    age: 16,
  },
  {
    name: "martha",
    address: {
      city: "leco",
    },
    age: 22,
  },
  {
    name: "tom",
    address: {
      city: "como",
    },
    age: 38,
  },
  {
    name: "jack",
    address: {
      city: "moscow",
    },
    age: 19,
  },
  {
    name: "bob",
    address: {
      city: "bern",
    },
    age: 43,
  },
];

function filterAdults(people) {
  return people.filter(function (person) {
    return person.age > 21;
  });
}
console.log(filterAdults(people));

/*2.Write a function that takes an array of numbers, checks and count 
how many odd and how many even numbers there are, and 
returns object which contain number off odd and even numbers.

Examples: countOddAndEven([1, 2, 2, 4]); // {odd: 1, even: 3}*/

function countOddAndEven(arr) {
  const returnObj = {
    odd: 0,
    even: 0,
  };
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      returnObj.even++;
    } else {
      returnObj.odd++;
    }
  });
  return returnObj;
}
//console.log(countOddAndEven([1, 2, 3])); // {odd: 2, even: 1}
//console.log(countOddAndEven([11])); // {odd: 1, even: 0}

/*3.Write a function that takes two parameters, and checks is they anagrams or not, if yes, 
its return true, otherwise false */

function anagram(word1, word2) {
  let splitWord1 = word1.split("").sort();
  let splitWord2 = word2.split("").sort();
  return String(splitWord1) === String(splitWord2);
}

//   console.log(anagram("monk", "komn"));
//   console.log(anagram("abcd", "bdca"));
//   console.log(anagram("hello", "oleh"));
//   console.log(anagram("car", "raw"));

