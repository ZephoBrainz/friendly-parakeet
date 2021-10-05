// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var characterArr = []
  var random = []

  var length = prompt("How long would you like your password?");

  console.log("length of the password is" + length)
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Select 8 characters or more") //Makes up a pop up box with a message
    console.log(length)
    generatePassword()
  } else {
    console.log(length)
    characterSelect()
  }

  function characterSelect() {
    var lower = confirm("Do you want lowercase letter?");
    if (lower === true) {
      characterArr.push(...lowerCase)
    }
    var number = confirm("Do you need a number?");
    if (number === true) {
      characterArr.push(...numb)
    }
    var spec = confirm("do you need a special letter?");
    if (spec === true) {
      characterArr.push(...symbol)
    }
    var upper = confirm("Do you need a uppercase letter?");
    if (upper === true) {
      characterArr.push(...upperCase)
    }
    if (!lowerCase && !upperCase && !number && !symbol) {
      alert("You must choose Criteria!");
    }
  };

  for (var i = 0; i < length; i++) {
    var randomPass = characterArr[Math.floor(Math.random() * characterArr.length)]
    random.push(randomPass)
  }
  var randomPassword = random.toString().split(",").join("")
  return randomPassword

};


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page