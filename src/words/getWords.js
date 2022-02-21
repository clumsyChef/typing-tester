const allChars = Array.from(Array(26).keys()).map((el) => String.fromCharCode(el + 97));
let srtToReturn = "";

const makeWord = (n) => {
    let thisWord = "";
    while (thisWord.length < n) {
        thisWord += allChars[~~(Math.random() * allChars.length)];
    }

    return thisWord;
};

const makeStr = () => {
    let strLength = 15;
    let maxWordLength = 12;
    let maxStringLength = 100;
    while (srtToReturn.length < strLength) {
        if (strLength - srtToReturn.length < maxWordLength) {
            maxWordLength = strLength - srtToReturn.length;
        }
        let wordLength = Math.random() * (maxWordLength - 1) + 1;
        srtToReturn += makeWord(wordLength);
        srtToReturn += " ";
    }
    let x = srtToReturn.slice(-1);

    return srtToReturn;
};

export default makeStr;
