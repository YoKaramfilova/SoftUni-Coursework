function solve(arr) {
    let collection = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command.includes('Delete')) {
            let index = +command[1];

            if (index >= 0 && index < collection.length) {
                collection.splice(index + 1, 1);
            }

        } else if (command.includes('Swap')) {
            let word1 = command[1];
            let word2 = command[2];

            if (collection.includes(word1) && collection.includes(word2)) {
                let index1 = collection.indexOf(word1);
                let index2 = collection.indexOf(word2);
                collection[index1] = word2;
                collection[index2] = word1;
            }

        } else if (command.includes('Put')) {
            let word = command[1];
            let index = +command[2];

            if (index === collection.length - 1) {
                collection.push(word);
            } else if (index > 0 && index < collection.length - 1) {
                collection.splice(index - 1, 0, word);
            } 

        } else if (command.includes('Sort')) {

            collection.sort((a, b) => b.localeCompare(a));

        } else if (command.includes('Replace')) {
            let word1 = command[1];
            let word2 = command[2];

            while (collection.includes(word2)) {
                collection[collection.indexOf(word2)] = word1;
            }

        } else if (command.includes('Stop')) {
            break;
        }
    }

    console.log(collection.join(' '));

}

solve((["Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop"]));
solve((["This the my quest! final",
    "Put is 2",
    "Swap final quest!",
    "Delete 2",
    "Stop"]))
