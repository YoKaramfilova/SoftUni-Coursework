function solve(input) {
    let firstLimit = Number(input[0]);
    let secondLimit = Number(input[1]);
    let carNumbers = "";

    for (let a = firstLimit; a <= secondLimit; a++) {
        for (let b = firstLimit; b <= secondLimit; b++) {
            for (let c = firstLimit; c <= secondLimit; c++) {
                for (let d = firstLimit; d <= secondLimit; d++) {
                    let firstCondition = false;
                    let secondCondition = false;
                    let thirdCondition = false;

                    if ((a % 2 == 0 && d % 2 != 0) || (a % 2 != 0 && d % 2 == 0)) {
                        firstCondition = true;
                    }

                    if (a > d) {
                        secondCondition = true;
                    }
                    
                    if ((b +c) % 2 == 0) {
                        thirdCondition = true;
                    }

                    if (firstCondition && secondCondition && thirdCondition) {
                        carNumbers += a + "" + b + "" + c + "" + d + " ";

                    }
            
                }            
            }
        }
    }
    console.log(carNumbers)
}
solve([ '2', '3', '' ])
solve([ '3', '5', '' ])
solve([ '5', '8', '' ])
