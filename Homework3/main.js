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


