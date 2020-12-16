function solve(input) {
    let strings = input.split(/\s+/g);
    let sum = 0;
    let upperCaseLetters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    let lowerCaseLetters = Array.from('abcdefghijklmnopqrstuvwxyz');

    strings.forEach(element => {
        let arr = element.split('');
        let letter1 = arr.shift();
        let letter2 = arr.pop();
        let number = +arr.join('');
        let result = 0;

        if (upperCaseLetters.includes(letter1)) {
            result = number / (upperCaseLetters.indexOf(letter1) + 1)
        } else {
            result = number * (lowerCaseLetters.indexOf(letter1) + 1)
        }

        if (upperCaseLetters.includes(letter2)) {
            result -= (upperCaseLetters.indexOf(letter2) + 1)
        } else {
            result += (lowerCaseLetters.indexOf(letter2) + 1)
        }

        sum += result;
        
    });

    console.log(sum.toFixed(2));

}

solve('A12b s17G');
solve('P34562Z q2576f   H456z');
solve('a1A');