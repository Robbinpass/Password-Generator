// Assignment code here
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchar = ['!', '?', '(', ')', '@', '$', '#', ';', '^', '&', '<', '>'];
var masterCharArray = [];


function generatePassword() {
  console.log('inside generatePassword');
  // we want to prompt the user for a set of criteria
  // use window.prompt() or window.confirm()
  // prompt for the password length
  // confirm for the remaining criteria, i.e. upper, lower, etc.
  var passwordLength = window.prompt('Please enter password length between 8 and 128 characters long');
  console.log(typeof passwordLength);

  if (isNaN(passwordLength) || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    window.alert('Please enter a password between 8 and 128 characters');
    return
  }

  var wantsUpper = window.confirm('Do you want uppercase letters in your password?');
  var wantsLower = window.confirm('Do you want lowercase letters in your password?');
  var wantsNumber = window.confirm('do you want numbers in your password?');
  var wantsspecchar = window.confirm('do you want to special characters in your password?');
  console.log(typeof wantsUpper);
  console.log(typeof wantsLower);
  console.log(typeof wantsNumber);
  console.log(typeof wantsspecchar);


  if (wantsUpper) {
    masterCharArray = masterCharArray.concat(uppercase);

  }

  if (wantsLower) {
    masterCharArray = masterCharArray.concat(lowercase);

  }

  if (wantsNumber) {
    masterCharArray = masterCharArray.concat(numbers);

  }

  if (wantsspecchar) {
    masterCharArray = masterCharArray.concat(specialchar);

  }

}




  for (var i = 1; i < length; i++) {
    console.log(i)
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