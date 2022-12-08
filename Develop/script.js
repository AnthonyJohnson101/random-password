// Assignment code here
let lowRange = 8;
let highRange = 128;

let uppercaseLetters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
let lowercaseLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
let numerical = ['0','1','2','3','4','5','6','7','8','9']
let specials = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']','}',':',';','"',"'",',','<','.','>','/','?','|']


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");



//
function generatePassword() {
  let concatArray = []

  
  let passwordLength = Number(window.prompt
    ("How many characters? (at least 8, and no more than 128)")) 


    if (passwordLength < lowRange || passwordLength > highRange) {
      window.alert("Please enter a number between 8 and 128.");
      return;
    } 
    
    let lowercase = window.confirm ("Include Lowercase?")
      if (lowercase) {
        concatArray = concatArray.concat(lowercaseLetters);
      
      }

    let uppercase = window.confirm ("Include Uppercase?")
      if (uppercase) {
        concatArray = concatArray.concat(uppercaseLetters);
      }
    
    let numeric = window.confirm ("Include Numbers?")
      if (numeric) {
        concatArray = concatArray.concat(numerical);
      }

    let specialCharacters = window.confirm ("Include Special Characters?")
      if (specialCharacters) {
        concatArray = concatArray.concat(specials);
      }
      
      if (!lowercase && !uppercase && !numeric && !specialCharacters) {
        window.alert("Please Select At least One Of The Chatacter Types.");
        return;
  
      }


      let passCode = ""
    for (var i = 0; i < passwordLength; i++){  
      let randomIndex = Math.floor(Math.random() * concatArray.length)
      passCode = concatArray[randomIndex] + passCode

    }
    return passCode;
    
   }





// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

