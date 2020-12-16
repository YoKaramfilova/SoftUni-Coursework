function solve(a, b, c) { 
    let result = subtract(add(a, b), c);

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    console.log(result);
}

solve(23,
    6,
    10
    );