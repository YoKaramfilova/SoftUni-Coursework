function solve(sentence, word) { 
    let censored = '*'.repeat(word.length);
    while (sentence.includes(word)) {
        
        sentence = sentence.replace(word, censored);
    }

    console.log(sentence);

}

solve("A small sentence with small some words", "small");