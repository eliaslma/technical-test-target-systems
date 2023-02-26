const inputStr = "ocincét etset";
let invertedStr = "";

// read the string from end to beginning
for (let i = inputStr.length - 1; i >= 0; i--) {
  invertedStr += inputStr[i];
}

console.log("Input do usuário:", inputStr)
console.log("Saída:",invertedStr);
