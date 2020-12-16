function solve(arr) {
    let keyWords = arr.shift().split(' ');
    let map = new Map();

    keyWords.forEach(element => {
        map.set(element, 0);
    })

    arr.forEach(element => {
        let word = element.toLowerCase();
        if (keyWords.includes(word)) {
            let currentCount = map.get(word);
            let newCount = currentCount + 1;
            map.set(word, newCount);

        }
    });

    Array.from(map.entries())
        .sort((a, b) => b[1] - a[1])
        .forEach(entry => {
            console.log(`${entry[0]} - ${entry[1]}`);
        })
}

solve([
    'this sentence shit', 'This', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)