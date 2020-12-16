function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let totalCost = 0; 
    let shieldBrakes = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            totalCost += helmetPrice;
        }

        if (i % 3 === 0) {
            totalCost += swordPrice;
        }

        if (i % 3 === 0 && i % 2 === 0) {
            totalCost += shieldPrice;
            shieldBrakes++
        }

        if (shieldBrakes === 2) {
            totalCost += armourPrice;
            shieldBrakes = 0;
        }
    }

    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`)

}

solve(7,

    2,
    
    3,
    
    4,
    
    5);
solve(23,

    12.50,
    
    21.50,
    
    40,
    
    200);

    
