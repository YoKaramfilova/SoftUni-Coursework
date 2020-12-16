function isPerfect(x) {

    if (isPositive(x) && equalToAliquotSum(x)) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.')
    }

    function isPositive(x) {
        if (x > 0) {
            return true;
        } else {
            return false;
        }
    }

    function equalToAliquotSum(x) {
        let aliquotSum = 0; 
        for (let i = 1; i < x; i++) {
            if(x % i === 0) {
                aliquotSum += i;
            }
        }

        if (x === aliquotSum) {
            return true;
        } else {
            return false;
        }
    }

}

isPerfect(6);
isPerfect(28);
isPerfect(123456);