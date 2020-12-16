function solve(arr) {
    let heroes = [];

    arr.forEach(element => {
        let [name, level, items] = element.split(' / ');
        let newHero = {
            name, 
            level, 
            items: items.split(', ').sort().join(', '),
        }
        heroes.push(newHero);
    })

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    );