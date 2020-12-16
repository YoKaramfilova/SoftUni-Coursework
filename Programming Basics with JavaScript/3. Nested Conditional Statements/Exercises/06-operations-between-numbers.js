function numberOperations(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result = 0;
    let type;
    
    if (operator === "+"){
        result = n1 + n2;
        if (result % 2 == 0) {
            type = 'even';
        } else {
            type = 'odd';
        }
        console.log(`${n1} + ${n2} = ${result} - ${type}`)
    } else if (operator === "-") {
        result = n1 - n2;
        if (result % 2 == 0) {
            type = 'even';
        } else {
            type = 'odd';
        }
        console.log(`${n1} - ${n2} = ${result} - ${type}`)
    }  else if (operator === "*") {
        result = n1 * n2;
        if (result % 2 == 0) {
            type = 'even';
        } else {
            type = 'odd';
        }
        console.log(`${n1} * ${n2} = ${result} - ${type}`)
    } else if (operator === "/") { 
        if (n2 != 0) {
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        } else {
            console.log(`Cannot divide ${n1} by zero`);
        }
    } else if (operator === "%") {
        if (n2 != 0) {
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }
    } 
}
numberOperations(10,0,"%")