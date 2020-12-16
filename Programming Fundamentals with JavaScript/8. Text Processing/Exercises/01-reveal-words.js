function solve(words, sentance) { 
    let wordsToReveal = words.split(', ');
    let completeSentance = '';

    wordsToReveal.forEach(word => {
        let hidden = '*'.repeat(word.length);
        completeSentance = sentance.replace(hidden, word);  
        sentance = completeSentance;  
    });

    console.log(completeSentance);
}

solve('great',
'softuni is ***** place for learning new programming languages');
solve('great, learning',
'softuni is ***** place for ******** new programming languages');