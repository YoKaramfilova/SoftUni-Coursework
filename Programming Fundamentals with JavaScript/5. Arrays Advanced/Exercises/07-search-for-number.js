function solve(arr, sortingNums) {
    let takeNums = sortingNums[0];
    let deleteNums = sortingNums[1];
    let searchNum = sortingNums[2];
    let count = 0;

    let newArr = arr.slice(0, takeNums);
    newArr.splice(0, deleteNums);

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searchNum) {
            count++;
        }
    }

    console.log(`Number ${searchNum} occurs ${count} times.`);
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );