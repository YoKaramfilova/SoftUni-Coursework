function solve(input) {
    let arr = input.split('');
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] ) {
            result += arr[i];
        }       
    }
    console.log(result);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');