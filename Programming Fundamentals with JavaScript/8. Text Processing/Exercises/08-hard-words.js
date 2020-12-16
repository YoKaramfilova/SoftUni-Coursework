function solve(arr) {
    let letter = arr[0];
    let words = arr[1];
    let deviders = [',', '.', ' '];

    words.forEach(entry => {

        for (let i = 0; i < deviders.length; i++) {
            let blanks = ' ' + '_'.repeat(entry.length) + deviders[i];
            let word = ' ' + entry + deviders[i];
            let edit = letter.replace(blanks, word);
            letter = edit;
        }

    });
    console.log(letter);

}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);
solve();