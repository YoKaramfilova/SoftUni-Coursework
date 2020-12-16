function solve(arr) {
    let time = 0; 
    let employee1Efficiency = +arr.shift();
    let employee2Efficiency = +arr.shift();
    let employee3Efficiency = +arr.shift();
    let studentCount = +arr.shift();

    while (studentCount > 0) {
        time++;
        if (time % 4 === 0) {
            continue;
        }
        studentCount -= (employee1Efficiency + employee2Efficiency + employee3Efficiency);    
    }

    console.log(`Time needed: ${time}h.`)

}

solve(['5','6','4','20']);
solve(['1','2','3','45']);
solve(['3','2','5','40']);