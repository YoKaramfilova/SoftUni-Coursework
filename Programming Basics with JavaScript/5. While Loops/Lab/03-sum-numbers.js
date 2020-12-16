function numbersSum(input) {
    let keyNumber = Number(input[0]);
    let index = 1;
    let sum = Number(input[1]);
    
    while (keyNumber > sum) {
        index++;
        sum += Number(input[index]);
    }

    console.log(sum);
}
numbersSum(["100", "110", "20", "30", "40"])