function solve(bees, years) {
    bees = Number(bees);
    years = Number(years); 
    let hatchedBees = 0;
    let diedBees = 0;
    let migratingBees = 0;

    for (let i = 1; i <= years; i++) {
        hatchedBees = Math.floor(bees / 10) * 2;
        bees += hatchedBees;
        if (i % 5 == 0) {
            migratingBees = Math.floor(bees / 50) * 5;
            bees -= migratingBees;
        }
        diedBees = Math.floor(bees / 20) * 2;
        bees -= diedBees;
    }

    console.log(`Beehive population: ${bees}`)

}
solve(100, 6)
solve(1000, 23)