function solve(record, distance, speed) {
    record = Number(record);
    distance = Number(distance);
    speed = Number(speed);
    let time = distance * speed;
    let slowDown = Math.floor(distance / 50) * 30;
    let finalTime = time + slowDown;
    if (finalTime >= record) {
        console.log(`No! He was ${(finalTime - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${finalTime.toFixed(2)} seconds.`)
    }

}
solve(10164, 1400, 25)
solve(1377, 389, 3)