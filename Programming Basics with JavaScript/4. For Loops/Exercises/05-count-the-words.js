function countTheWords(text) {
    let wordCount = 0;
    for (let i = 0; i <= text.length; i++) {
        if ([' ', ',', '.', '!', '?'].includes(text[i])) {
            if ([',','.', '!', '?'].includes(text[i-1])) {
                wordCount = wordCount;
            } else {
            wordCount = wordCount + 1;
            }
        }
    }
    
    if (![',','.', '!', '?'].includes(text[text.length-1])) {
        wordCount = wordCount + 1;
    }

    if (wordCount > 10) {
        console.log(`The message is too long to be send! Has ${wordCount} words.`);
    } else {
        console.log('The message was send successfully!')
    }
}
countTheWords('This message has exactly eleven words.One more as it\'s allowed!')