function factorialDevision(a, b) {
    let result = calculateFactorial(a) / calculateFactorial(b);

    console.log(result.toFixed(2));
    
    function calculateFactorial(a) {
        if (a === 0) {
            return 1;
        }
        let factorial = a * calculateFactorial(a - 1);
        return(factorial);
    }
}

factorialDevision(6, 2);
