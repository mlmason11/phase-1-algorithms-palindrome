
function isPalindrome(word) {
  // Write your algorithm here
  let drow = ''
  for (let i = word.length - 1; i >= 0; i--) {
    drow += word[i]
  }
  return (drow === word)
}

/* 
  Add your pseudocode here
  test for odd or even first
  if odd

  else


*/

/*
  Add written explanation of your solution here
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
