/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const str1s = str1.split('').sort().join('');
  const str2s = str2.split('').sort().join('');
  if(str1s == str2s){
    return true;
  }
  return false;
}

module.exports = isAnagram;
