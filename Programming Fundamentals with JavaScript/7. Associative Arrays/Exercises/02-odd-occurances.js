function solve(input) {
    arr = input.toLowerCase().split(' ');
    let mapOfOccurances = new Map();
    arrOfOdds = [];

    for (let word of arr) {
        
        if (!mapOfOccurances.has(word)) {
            mapOfOccurances.set(word, 1);
        } else {
            let newCount = mapOfOccurances.get(word) + 1;
            mapOfOccurances.set(word, newCount);
        }

    }


    for (let [key, value] of mapOfOccurances.entries()) {
        if (value % 2 !== 0) {
            arrOfOdds.push(key);
        }
    }

    console.log(arrOfOdds.join(' '));

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');