function solve(bees, bearHealth, bearAttack) { 
    bees = Number(bees);
    bearHealth = Number(bearHealth);
    bearAttack = Number(bearAttack);

    while (bearHealth > 0) {
        bees -= bearAttack; 
        if (bees < 100) {
            if (bees >= 0) {
            console.log(`The bear stole the honey! Bees left ${bees}.`);
            break;
            } else {
                console.log(`The bear stole the honey! Bees left 0.`);
                break;
            }
        }
        bearHealth -= bees * 5;
        if (bearHealth <= 0) {
            console.log(`Beehive won! Bees left ${bees}.`);
            break;
        }

    }
}
solve(200, 1000, 10)
solve(200, 10000, 90)
solve(200, 10000, 300)