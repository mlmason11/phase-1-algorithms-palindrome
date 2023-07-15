
function isPalindrome(word) {
  // Write your algorithm here
  let polishedWord = word.replace(/\W_+|[0-9]/g, '').toLowerCase()
  let drow = ''
  for (let i = polishedWord.length - 1; i >= 0; i--) {
    drow += polishedWord[i]
  }
  return drow === polishedWord
}

/* 

  Add your pseudocode here

  Same thing as the revers string lab, except we now return the value of
  whether or not the reversed string is equal to the original string,
  either true or false

*/

/*

  Add written explanation of your solution here

  We create a new string that is equal to the reverse of the original string,
  and test whether or not our two strings are strictly equal

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
