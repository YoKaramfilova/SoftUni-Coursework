function solve (n) {
    let sum = 0;
    let index = 1;
    while (n > 0) {
        if (index % 2 != 0) {
            console.log(index);
            n--
            sum += index;
        }
        index++
    }
    console.log("Sum: " + sum);
}

