function solve(text) {
    let vowelsSum = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            vowelsSum = vowelsSum + 1;
        } else if (text[i] === 'e') {
            vowelsSum = vowelsSum + 2;
        } else if (text[i] === 'i') {
            vowelsSum = vowelsSum + 3;
        } else if (text[i] === 'o') {
            vowelsSum = vowelsSum + 4;
        } else if (text[i] === 'u') {
            vowelsSum = vowelsSum + 5;
        }
    }

    console.log(vowelsSum);
}
solve('Maria')