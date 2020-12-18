function solve(word, text) {
    let newText = '';

    while (text !== newText) {
        newText = text;
        text = text.replace(word, '');
    }

    console.log(text);
    
}

solve('ice',
    'kicegiciceeb');