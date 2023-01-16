// Assignment code here
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var lowercase = 'abcdefg'.split('');
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchar = ['!', '?', '(', ')', '@', '$', '#', ';', '^', '&', '<', '>'];
// insert characters into this array depending on user input
var masterCharArray = [];


function generatePassword() {
  console.log('inside generatePassword');
  // we want to prompt the user for a set of criteria
  // use window.prompt() or window.confirm()
  // prompt for the password length
  // confirm for the remaining criteria, i.e. upper, lower, etc.
  var passwordLength = window.prompt('Please enter password length between 8 and 128 characters long');
  console.log(typeof passwordLength);
  // knowing the type of data that is returned by window.prompt, check to make sure that it's a number, that it's a number
  // between 8 and 128. You will want to use NaN method, as well as an if statement to check the size of the number. If either 
  // of these are false, jump out of our function; in other words return false.

  // if the number is valid, move on to the confirms
  var wantsUpper = window.confirm('Do you want uppercase letters in your password?');
  var wantsLower = window.confirm('Do you want lowercase letters in your password?');
  var wantsNumber = window.confirm('do you want numbers in your password?');
  var wantsspecchar = window.confirm('do you want to special characters in your password?');
  console.log(typeof wantsUpper);
  console.log(typeof wantsLower);
  console.log(typeof wantsNumber);
  console.log(typeof wantsspecchar);



  // add characters to master set depending on the result of the confirms
  if (wantsUpper) {
    // then execute this block of code
    masterCharArray = masterCharArray.concat(uppercase);
  }

  if (wantsLower) {
    masterCharArray = masterCharArray.concat(lowercase);

  }
  // and so on...

  // delete this later maybe
  var length = 7;
  // once you have your master set of characters, then you can randomly pick out letters from it and add these
  // letters to a string. The string is what you return from this function that we're in (generatePassword).

  for (var i = 1; i < length; i++) {
    console.log(i);
  }


  // your return statement will be the last line of code in your function
  // return xyz
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

