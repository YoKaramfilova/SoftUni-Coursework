function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);
    let space = width * length * heigth;
    let freeSpace = space;
    let index = 3;
    let box = Math.pow(1, 3);
    let boxVolume = 0;
    let boxNumber = 0;
    while (input[index] !== 'Done') {
        boxNumber = Number(input[index]);
        freeSpace = freeSpace - (box * boxNumber);
        boxVolume = boxVolume + (box * boxNumber);
        if (freeSpace < 0) {
            break;
        }
        index++;
    }

    if (freeSpace >= 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${boxVolume - space} Cubic meters more.`);
    }

}
moving(["10", 

"10",

"2",

"20",

"20",

"20",

"20",

"122"])
moving(["10",

"1",

"2",

"4",

"6",

"Done"])
