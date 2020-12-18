function solve(arr) {
    let k = arr.shift();
    let firstK = arr.slice(0, k).join(' ');
    let lastK = arr.slice(arr.length - k).join(' ');

    console.log(firstK);
    console.log(lastK);

}

solve([2, 
    7, 8, 9]);
solve([3,
    6, 7, 8, 9]);
