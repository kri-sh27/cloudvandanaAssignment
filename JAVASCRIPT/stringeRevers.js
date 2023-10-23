
function reverseWord(word) {
    return word.split('').reverse().join('');
}


function reverseSentence(inputSentence) {
    const words = inputSentence.split(' ');
    const reversedWords = words.map(reverseWord);
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}


const userInput = prompt("Enter a sentence:");


if (userInput !== null) {
    
    const reversed = reverseSentence(userInput);
    console.log("Reversed Sentence: " + reversed);
} else {
    console.log("No input provided.");
}
