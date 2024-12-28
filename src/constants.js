const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
const charCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCaseLetters = charCodes.map((code) => String.fromCharCode(code));
const upperCaseLetters = lowerCaseLetters.map((letter) => letter.toUpperCase());

export { numbers, symbols, lowerCaseLetters, upperCaseLetters };
