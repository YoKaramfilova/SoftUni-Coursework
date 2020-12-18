function solve(string, repeat) {
    let newString = ''

    for (let i = 1; i <= repeat; i++){
        newString += string;
    }

    console.log(newString);

}

solve('abc', 3);
solve('String',
    2);