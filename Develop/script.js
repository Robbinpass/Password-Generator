// Assignment code here
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchar = ['!', '?', '(', ')', '@', '$', '#', ';', '^', '&', '<', '>'];
var masterCharArray = [];


function generatePassword() {
  var passwordLength = window.prompt('Please enter password length between 8 and 128 characters long');
9

  if (isNaN(passwordLength) || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    window.alert('Error: Please enter a password between 8 and 128 characters');
    return
  }


  var wantsUpper = window.confirm('Do you want uppercase letters in your password?');
  var wantsLower = window.confirm('Do you want lowercase letters in your password?');
  var wantsNumber = window.confirm('do you want numbers in your password?');
  var wantsspecchar = window.confirm('do you want to special characters in your password?');


  if (!wantsUpper && !wantsLower && !wantsNumber && !wantsspecchar) {
    window.alert("Error: Please include at least one type of character in your password.");
    return
  }


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
console.log(masterCharArray);

  }
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