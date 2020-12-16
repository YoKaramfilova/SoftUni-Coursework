function personalTitle(age, gender) {
    if (gender == 'f') {
        if (Number(age) >= 16) {
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    } else if (gender == 'm') {
        if (Number(age) >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    }
}
personalTitle(17,'f')