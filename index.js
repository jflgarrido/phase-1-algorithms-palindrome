function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("")
    if(word === reversedWord){
      return true
    } else {
      return false
    } 
}
// Write your algorithm here
  /* 
  1) Write a function that returns true when a lowercase string-only 
     argument passed is a palindrome
  2) Input: 'apple'  Return: false
     Input: 'peep' Return: true
  */

/* 
  Add your pseudocode here
  Write function, pass a string
    reverse the string and store in variable
    is the string the same as the variable?
    if true, return true
    else, return false
  call function
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
  console.log("Expecting: true");
  console.log("=>", isPalindrome("peep"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("apple"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
