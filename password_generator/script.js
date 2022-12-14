const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|",
    ":", ";", "<", ">", ".", "?", "/"
];

const noSymbolsArr = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9"
];


const generateBtn = document.getElementById("generate-btn");
const outputFirstEl = document.getElementById("output-left-first-line");
const outputSecondEl = document.getElementById("output-right-first-line");
const outputFirstElSecondLine = document.getElementById("output-left-second-line");
const outputSecondElSecondLine = document.getElementById("output-right-second-line");
const copyBtn15withSymbols = document.getElementById("copy-btn-15-with-symbols");
const copyBtn10withSymbols = document.getElementById("copy-btn-10-with-symbols");
const copyBtn15withoutSymbols = document.getElementById("copy-btn-15-without-symbols");
const copyBtn10withoutSymbols = document.getElementById("copy-btn-10-without-symbols");


function copyTextToClipboardOne() {
    let copyText = document.getElementById("output-left-first-line").value;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("The following password was copied: " + " " + copyText);
    });
}


function copyTextToClipboardTwo() {
    let copyText = document.getElementById("output-right-first-line").value;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("The following password was copied: " + " " + copyText);
    });
}


function copyTextToClipboardThree() {
    let copyText = document.getElementById("output-left-second-line").value;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("The following password was copied: " + " " + copyText);
    });
}


function copyTextToClipboardFour() {
    let copyText = document.getElementById("output-right-second-line").value;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("The following password was copied: " + " " + copyText);
    });
}


function randomCharacterLeftOutput() {

    let random1 = Math.floor(Math.random() * characters.length);
    let random2 = Math.floor(Math.random() * characters.length);
    let random3 = Math.floor(Math.random() * characters.length);
    let random4 = Math.floor(Math.random() * characters.length);
    let random5 = Math.floor(Math.random() * characters.length);
    let random6 = Math.floor(Math.random() * characters.length);
    let random7 = Math.floor(Math.random() * characters.length);
    let random8 = Math.floor(Math.random() * characters.length);
    let random9 = Math.floor(Math.random() * characters.length);
    let random10 = Math.floor(Math.random() * characters.length);
    let random11 = Math.floor(Math.random() * characters.length);
    let random12 = Math.floor(Math.random() * characters.length);
    let random13 = Math.floor(Math.random() * characters.length);
    let random14 = Math.floor(Math.random() * characters.length);
    let random15 = Math.floor(Math.random() * characters.length);

    outputFirstEl.textContent = characters[random1] +
        characters[random2] + characters[random3] + characters[random4] +
        characters[random5] + characters[random6] + characters[random7] +
        characters[random8] + characters[random9] + characters[random10] +
        characters[random11] + characters[random12] + characters[random13] +
        characters[random14] + characters[random15];
}


function randomCharacterRightOutput() {

    let random1 = Math.floor(Math.random() * characters.length);
    let random2 = Math.floor(Math.random() * characters.length);
    let random3 = Math.floor(Math.random() * characters.length);
    let random4 = Math.floor(Math.random() * characters.length);
    let random5 = Math.floor(Math.random() * characters.length);
    let random6 = Math.floor(Math.random() * characters.length);
    let random7 = Math.floor(Math.random() * characters.length);
    let random8 = Math.floor(Math.random() * characters.length);
    let random9 = Math.floor(Math.random() * characters.length);
    let random10 = Math.floor(Math.random() * characters.length);

    outputSecondEl.textContent = characters[random1] +
        characters[random2] + characters[random3] + characters[random4] +
        characters[random5] + characters[random6] + characters[random7] +
        characters[random8] + characters[random9] + characters[random10];
}


function randomCharacterLeftOutputSecondLine() {

    let random1 = Math.floor(Math.random() * noSymbolsArr.length);
    let random2 = Math.floor(Math.random() * noSymbolsArr.length);
    let random3 = Math.floor(Math.random() * noSymbolsArr.length);
    let random4 = Math.floor(Math.random() * noSymbolsArr.length);
    let random5 = Math.floor(Math.random() * noSymbolsArr.length);
    let random6 = Math.floor(Math.random() * noSymbolsArr.length);
    let random7 = Math.floor(Math.random() * noSymbolsArr.length);
    let random8 = Math.floor(Math.random() * noSymbolsArr.length);
    let random9 = Math.floor(Math.random() * noSymbolsArr.length);
    let random10 = Math.floor(Math.random() * noSymbolsArr.length);
    let random11 = Math.floor(Math.random() * noSymbolsArr.length);
    let random12 = Math.floor(Math.random() * noSymbolsArr.length);
    let random13 = Math.floor(Math.random() * noSymbolsArr.length);
    let random14 = Math.floor(Math.random() * noSymbolsArr.length);
    let random15 = Math.floor(Math.random() * noSymbolsArr.length);

    outputFirstElSecondLine.textContent = noSymbolsArr[random1] +
        noSymbolsArr[random2] + noSymbolsArr[random3] + noSymbolsArr[random4] +
        noSymbolsArr[random5] + noSymbolsArr[random6] + noSymbolsArr[random7] +
        noSymbolsArr[random8] + noSymbolsArr[random9] + noSymbolsArr[random10] +
        noSymbolsArr[random11] + noSymbolsArr[random12] + noSymbolsArr[random13] +
        noSymbolsArr[random14] + noSymbolsArr[random15];
}


function randomCharacterRightOutputSecondLine() {

    let random1 = Math.floor(Math.random() * noSymbolsArr.length);
    let random2 = Math.floor(Math.random() * noSymbolsArr.length);
    let random3 = Math.floor(Math.random() * noSymbolsArr.length);
    let random4 = Math.floor(Math.random() * noSymbolsArr.length);
    let random5 = Math.floor(Math.random() * noSymbolsArr.length);
    let random6 = Math.floor(Math.random() * noSymbolsArr.length);
    let random7 = Math.floor(Math.random() * noSymbolsArr.length);
    let random8 = Math.floor(Math.random() * noSymbolsArr.length);
    let random9 = Math.floor(Math.random() * noSymbolsArr.length);
    let random10 = Math.floor(Math.random() * noSymbolsArr.length);

    outputSecondElSecondLine.textContent = noSymbolsArr[random1] +
        noSymbolsArr[random2] + noSymbolsArr[random3] + noSymbolsArr[random4] +
        noSymbolsArr[random5] + noSymbolsArr[random6] + noSymbolsArr[random7] +
        noSymbolsArr[random8] + noSymbolsArr[random9] + noSymbolsArr[random10];
}


function generatePassword() {
    randomCharacterLeftOutput();
    randomCharacterRightOutput();
    randomCharacterLeftOutputSecondLine();
    randomCharacterRightOutputSecondLine();
}













// ***********************************//
// ****** still working on it ;) ****//
// ***********************************//

// let firstPasswordArr = [];
// let secondPasswordArr = [];

// // generates one random nr and pushes it into firstPasswordArr = [];
// function randomNrGeneratorForFirstArr() {
//     let randomNr = Math.floor(Math.random() * 91);
//     firstPasswordArr.push(randomNr);  
// }

// // generates one random nr and pushes it into secondPasswordArr = [];
// function randomNrGeneratorForSecondArr() {
//     let randomNr = Math.floor(Math.random() * 91);
//     secondPasswordArr.push(randomNr);  
// }

// // generates one random numbers for the firstPasswordArr = [];
// function generates15RandomNrsForFirstArr() {
//     for (let i = 0; i < 15; i++) {
//       i[i] = randomNrGeneratorForFirstArr();     
//     }
// }

// // generates one random numbers for the firstPasswordArr = [];
// function generates15RandomNrsForSecondArr() {
//     for (let i = 0; i < 15; i++) {
//       i[i] = randomNrGeneratorForSecondArr();     
//     }
// }

// generates15RandomNrsForFirstArr();
// generates15RandomNrsForSecondArr();

// console.log(firstPasswordArr)
// console.log(secondPasswordArr)
