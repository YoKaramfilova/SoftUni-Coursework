function solve(sentence, search) { 
    let count = 0; 
    sentence = sentence.split(' ');

    for (let word of sentence) {
        if (word === search) {
            count++;
        }
    }

    console.log(count);
}

solve("This is a word and it also is a sentence",
"is");