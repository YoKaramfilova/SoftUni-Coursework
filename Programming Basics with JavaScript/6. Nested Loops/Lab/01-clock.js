function clock() {
    let hour = 0;
    let minutes = 0;

    while (hour < 24) {
        while (minutes < 60) {
            console.log(`${hour}:${minutes}`);
            minutes++;
        }
        minutes = 0;
        hour++;
    }
}
// function clock() {
//     for (let h = 0; h < 24; h++) {
//         for (let m = 0; m < 60; m++) {
//             console.log(`${h}:${m}`);
//         }
//     }
// }
clock()