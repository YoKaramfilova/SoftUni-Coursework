function solve(input) {
    let letters = input.split('');
    let capitalIndexes = [];
    let words = [];

    for (let i = 0; i < letters.length; i++) {
        if (/[A-Z]/.test(letters[i])) {
            capitalIndexes.push(i);
        }
    }

    for (let i = 0; i < capitalIndexes.length; i++) {
        if (i === capitalIndexes.length - 1) {
            let word = input.substring(capitalIndexes[i]);
            words.push(word);
        } else {
            let word = input.substring(capitalIndexes[i], capitalIndexes[i + 1]);
            words.push(word);
        }
    }

    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');