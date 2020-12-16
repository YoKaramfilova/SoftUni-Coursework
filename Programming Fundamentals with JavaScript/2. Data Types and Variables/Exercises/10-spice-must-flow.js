function solve(startingYield) {
    let days = 0;
    let totalYield = 0;
    while (startingYield >= 100) {
        days++;
        totalYield += startingYield - 26;
        startingYield -= 10;

        if (startingYield < 100) {
            totalYield -= 26;
        }    
    }

    totalYield = totalYield > 0 ? totalYield : 0; 

    console.log(days);
    console.log(totalYield);    
}

solve(111);

    
