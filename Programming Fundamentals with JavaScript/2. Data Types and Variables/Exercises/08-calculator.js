function solve(a, operator, b) {
    let calculation;
    if (operator === "+") {
        calculation = a + b;
    } else if (operator === "*") {
        calculation = a * b;
    } else if (operator === "-") {
        calculation = a - b;
    } else if (operator === "/") {
        calculation = a / b;
    } 
    console.log(calculation.toFixed(2));

}
solve(10, "+", 5);
