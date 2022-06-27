/*1.Find anagrams, and return them (there can be lot of spaces in the both sides of word, 
  just remove them);*/
function anagram(word1, word2) {
  let splitWord1 = word1.split("").sort();
  let splitWord2 = word2.split("").sort();
  return String(splitWord1) === String(splitWord2);
}

function findAnagrams(word, arr) {
  word = word.trim();
  return arr.filter(function (val) {
    return anagram(val.trim(), word);
  });
}

console.log(findAnagrams(" abc ", ["abc", "bcd", " acb"]));

/*2.Given array of numbers, find missing numbers/number:*/
function findMissingNumbers(arr){
  const returnArray = [];
  for(let i = 1;i<arr.length;i++){
    if(arr[i] - arr[i-1] !== 1){
      let j = 1;
      while(j<arr[i] - arr[i-1]){
        returnArray.push(arr[i-1]+j);
        j++;
      }
    
    }
  }
  return returnArray;
}
console.log(findMissingNumbers([1,2,4,5,8,11]));


/*3Given the data array, you must get from data the result, as an example.*/
/*// result
[
    {id: 1, name: ['a', 'c', 'd', 'g', 'l', 'n', 'p']},
    { id: 2, name: [ 'b', 'f', 'i' ] },
    { id: 3, name: [ 'e', 'm' ] },
    { id: 6, name: [ 'h' ] },
    { id: 4, name: [ 'j', 'q' ] },
    { id: 7, name: [ 'k', 'r' ] },
    { id: 8, name: [ 'o' ] }
];*/
const data = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 1, name: "c" },
  { id: 1, name: "d" },
  { id: 3, name: "e" },
  { id: 2, name: "f" },
  { id: 1, name: "g" },
  { id: 6, name: "h" },
  { id: 2, name: "i" },
  { id: 4, name: "j" },
  { id: 7, name: "k" },
  { id: 1, name: "l" },
  { id: 3, name: "m" },
  { id: 1, name: "n" },
  { id: 8, name: "o" },
  { id: 1, name: "p" },
  { id: 4, name: "q" },
  { id: 7, name: "r" },
];

function groupById(data) {
  const returnValue = [];
  returnValue.push({ id: data[0].id, name: [data[0].name] });
  for (let i = 1; i < data.length; i++) {
    for (let j = 0; j < returnValue.length; j++) {
      if (returnValue[j] && returnValue[j].id == data[i].id) {
        returnValue[j].name.push(data[i].name);
        break;
      }
      if (j == returnValue.length - 1) {
        returnValue.push({ id: data[i].id, name: [data[i].name] });
      }
    }
  }
  return returnValue;
}

console.log(groupById(data));