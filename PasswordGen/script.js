let generateButton = document.getElementById("generateButton");
let textResult = document.getElementById("result");
let error = document.getElementById("error");
let length = document.getElementById("length");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");
let clipboard = document.getElementById("clipboard");

let numberChar = "1234567890";
let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbolChar = "!@#$%^&*()_+{}[]/?";


generateButton.addEventListener("click", () => {
    let lengthValue = length.value;
    let lower = lowerCase.checked;
    let upper = upperCase.checked;
    let number = numbers.checked;
    let symbol = symbols.checked;
    let passwordValue = generatePassword(lengthValue, lower, upper, number, symbol);
    textResult.innerText = passwordValue;
});

function getRandomChar(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet.charAt(randomIndex);
}

function generatePassword(lengthValue, useLowerCase, useUpperCase, useNumbers, useSymbols) {
    let charSet = '';

    if (lengthValue < 4 || lengthValue > 20) {
        error.innerText = "Length should be between 4 and 20";
        error.style.color = "red";
        return "";
    }

    if (useLowerCase) charSet += lowerCaseChar;
    if (useUpperCase) charSet += upperCaseChar;
    if (useNumbers) charSet += numberChar;
    if (useSymbols) charSet += symbolChar;
    if (charSet === '') {
        error.style.color = "red";
        error.innerHTML = 'You must select at least one character set for the password.';
        return '';
    }

    let password = "";
    for (let i = 0; i < lengthValue; i++) {
        const randomChar = getRandomChar(charSet);
        password += randomChar;
    }
    return password;
};

clipboard.addEventListener("click", () => {
    console.log(textResult.innerHTML)
    if (textResult.innerHTML.includes(' ') || textResult.innerHTML === "") return;
    error.innerHTML = 'copied ✅'
    error.style.color = "green"
    navigator.clipboard.writeText(textResult.textContent);
});