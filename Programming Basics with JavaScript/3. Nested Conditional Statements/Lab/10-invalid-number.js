function numberValidity(num) {
    num = Number(num);
    // let isValid = num >= 100 && num <= 200 || num == 0;
    // if (!isValid) {
    //     console.log('invalid');
    // }
    if ((num < 100 && num != 0) || num > 200) {
        console.log('invalid');
    }
}
numberValidity(250)