function sumSeconds(time1, time2, time3) {
    let totalTime = Number(time1) + Number(time2) + Number(time3);
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds >= 10) {
        console.log(`${minutes}:${seconds}`);
    } else {
        console.log(`${minutes}:0${seconds}`);
    }
}
sumSeconds('35', '45', '44');