function solve(input) {
    let firstHalf = input.substring(0, input.length/ 2).split('');
    let secondHalf = input.substring(input.length/ 2).split('');

    console.log(reverse(firstHalf).join(''));
    console.log(reverse(secondHalf).join(''));

    function reverse(array) {
        for (let i = 0; i < array.length / 2; i++) {
            let temp = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length -1 - i] = temp;
        }
        return array;
    }
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');