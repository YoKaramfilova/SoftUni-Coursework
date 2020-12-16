function timePlus15Mins(hour, minutes) {
    let newHour = 0;
    let newMinutes = 0;
    if ((Number(minutes) + 15) < 60) {
    newHour = Number(hour);
    newMinutes = Number(minutes) + 15;
    } else {
    newHour = Number(hour) + 1;
    newMinutes = (Number(minutes) + 15) % 60;
    }

    if (newHour >= 24) {
        newHour = 0
    }
    
    if (newMinutes < 10) {
        console.log(`${newHour}:0${newMinutes}`);
    } else {
        console.log(`${newHour}:${newMinutes}`);
    }
}
timePlus15Mins("1", "46")