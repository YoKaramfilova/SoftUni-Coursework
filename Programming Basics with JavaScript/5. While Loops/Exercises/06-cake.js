function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let pieces = width * length;
    let piecesLeft = pieces;
    index = 2;
    while (input[index] !== 'STOP') {
        let piecesTaken = Number(input[index]);
        piecesLeft -= piecesTaken;
        if (piecesLeft <= 0) {
            break;
        }
        index++;
    }

    if (piecesLeft <= 0) {
        console.log(`No more cake left! You need ${piecesLeft * (-1)} pieces more.`);
    } else {
        console.log(`${piecesLeft} pieces are left.`);
    }
}
cake(["10",

"10",

"20",

"20",

"20",

"20",

"21"])
cake(["10",

"2",

"2",

"4",

"6",

"STOP"])