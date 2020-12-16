function solve(arr) { 
    let maxSequence = [];
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let currentSequence = [];
        

        for (let j = i; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
                currentSequence.push(arr[j]);
            } else {
                break;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            maxSequence = currentSequence;
        }
    }

    console.log(maxSequence.join(' '));

}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);

// [2, 1, 1, 2, 3, 3, 2, 2, 2, 1]	2 2 2
// [1, 1, 1, 2, 3, 1, 3, 3]	1 1 1
// [4, 4, 4, 4]	4 4 4 4
// [0, 1, 1, 5, 2, 2, 6, 3, 3]	1 1
