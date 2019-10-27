var genButton = document.querySelector("#generatePassword");
console.log(genButton);

var charLength = parseInt(prompt("How long do you want your password to be (choose between 8 and 128 characters)?"), 10);

var genButton = document.querySelector("#generatePassword");
console.log(genButton);
//prompt yes or no for each set of characters
var charLength = parseInt(prompt("How long do you want your password to be (choose between 8 and 128 characters)?"), 10);
//prompt to get length of password as well as the characters
var specCharPrompt = confirm("If you would like special characters type 'charSpecial'. If not, select cancel and wait for the next prompt.");

var charLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charSpecial = ['!', '@', '#', '$', '^', '&', '*', '(', ')'];
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var passwordHolder = []
var possibleChoices = [];
var password = "";

possibleChoices = possibleChoices.concat(charLetters);
if (specCharPrompt) {
    possibleChoices = possibleChoices.concat(charSpecial);
}
console.log(possibleChoices);
genButton.addEventListener("click", function (event) {
    for (var i = 0; i <= charLength; i++) {
        password += possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
        var pcontainer = document.querySelector("#passwordArea");
        pcontainer.innerHTML = password;
    }
});
