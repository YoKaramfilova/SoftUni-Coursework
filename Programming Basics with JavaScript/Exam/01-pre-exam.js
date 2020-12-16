function solve(bees, flowers) {
    bees = Number(bees);
    flowers = Number(flowers);
    let totalHoney = bees * flowers * 0.21;
    let honeyCombs = Math.floor(totalHoney / 100);
    let honeyLeft = (totalHoney % 100).toFixed(2);

    console.log(`${honeyCombs} honeycombs filled.`);
    console.log(`${honeyLeft} grams of honey left.`);
}
solve(11, 120)
solve(25, 640)
