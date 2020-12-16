function solve(currentRecord, distance, speed) {
    let generaltime = (Number(distance) * Number(speed));
    let slowDown = (Math.floor(Number(distance) / 15)) * 12.5;
    let time = generaltime + slowDown;
    if (Number(currentRecord) <= time) {
        console.log(`No, he failed! He was ${(time - Number(currentRecord)).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }

}
solve("10464", "1500", "20")