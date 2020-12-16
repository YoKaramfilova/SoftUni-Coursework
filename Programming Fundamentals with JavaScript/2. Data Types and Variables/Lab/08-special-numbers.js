function solve(n) {

    for (let i = 1; i <= n; i++) {
        let current = i.toString(); 
        let sum = 0;
        for (let j = 0; j < current.length; j++) {
            sum += +current[j];
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(current + " -> True");
        } else {
            console.log(current + " -> False");
        }
    }

}

solve(15);