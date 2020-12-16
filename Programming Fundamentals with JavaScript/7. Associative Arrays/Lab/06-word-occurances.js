function solve(arr) {
    let map = new Map();

    arr.forEach(word => {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            let count = map.get(word);
            let newCount = count + 1;
            map.set(word, newCount);
        }
    });

    
    Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach(entry => {
        console.log(`${entry[0]} -> ${entry[1]} times`);
    })
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);