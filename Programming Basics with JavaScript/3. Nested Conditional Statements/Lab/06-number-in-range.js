function numberInRange(num) {
    if (Number(num) >= -100 && Number(num) <= 100 && Number(num) != 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
numberInRange(0);