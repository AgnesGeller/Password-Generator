// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  //Creating variables for the input fields
  let specialCharactersCheckbox     = document.getElementById('special');
  let numericCheckbox               = document.getElementById('numeric');
  let lowercaseCheckbox             = document.getElementById('lowercase');
  let uppercaseCheckbox             = document.getElementById('uppercase');

  let passwordLength                = document.getElementById('password-length').value;

  //Generate the array that contains the selected characters
  let characters      = [];

  let verifyCheck     = false;

  //Check for checked checkboxes
  if(specialCharactersCheckbox.checked){
    //Merge the two arrays together
    characters = characters.concat(specialCharacters);

    //check if any of the checkboxes was checked
    verifyCheck = true;
  }

  if(numericCheckbox.checked){
    //Merge the two arrays together
    characters = characters.concat(numericCharacters);

    //check if any of the checkboxes was checked
    verifyCheck = true;
  }

  if(lowercaseCheckbox.checked){
    //Merge the two arrays together
    characters = characters.concat(lowerCasedCharacters);

    //check if any of the checkboxes was checked
    verifyCheck = true;
  }

  if(uppercaseCheckbox.checked){
    //Merge the two arrays together
    characters = characters.concat(upperCasedCharacters);

    //check if any of the checkboxes was checked
    verifyCheck = true;
  }

  //If there was at least one checkbox checked
  if(verifyCheck){
    //Check for the entered password lenght and validity
    // Check if passwordLength has a value and is a valid number
    if (passwordLength !== '' && !isNaN(passwordLength)) {
      if(passwordLength < 8 || passwordLength > 128){
        return "The password lenght should be between 8 - 128 characters long!";
        
      }else{
        return getRandom(characters, passwordLength);
      }
    }else{
      return "The password must an integer!";
    }
  }else{
    //If there was no checkbox checked
    return "You need to check at least one checkbox!";
  }

}

// Function for getting a random element from an array
function getRandom(arr, passwordLength) {
  let password  = "";
  //Generate the password from the given array
  for(let i = 0; i < passwordLength; i++){

    let randomIndex = Math.floor(Math.random() * arr.length);
    password += arr[randomIndex];
  }

  return password;
}

// Function to generate password with user input
function generatePassword() {
  return getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);