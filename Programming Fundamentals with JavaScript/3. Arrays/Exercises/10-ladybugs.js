function solve(arr) {
    let field = +arr[0];
    let ladybugIndexes = arr[1].split(' ').map(Number);
    let ladybugMatrix = [];
    ladybugMatrix.length = field;
    ladybugMatrix.fill(0);

    for (let i = 0; i < ladybugMatrix.length; i++) {
        if (ladybugIndexes.includes(i)) {
            ladybugMatrix[i] = 1;
        }
    }
  

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let currentIndex = +command[0];
        let direction = command[1];
        let travelLength = +command[2];

        if (ladybugMatrix[currentIndex] === undefined) continue;
        if (ladybugMatrix[currentIndex] === 0) continue;

        if (direction === 'left') travelLength = -travelLength;

        ladybugMatrix[currentIndex] = 0;

        currentIndex += travelLength;

        while (ladybugMatrix[currentIndex] === 1) {
            currentIndex += travelLength;
        }

        if (ladybugMatrix[currentIndex] === 0) {
            ladybugMatrix[currentIndex] = 1;
        }
    }

    console.log(ladybugMatrix.join(' '));
}

solve([ 3, '0 1', '0 right 1', '2 right 1' ]);
solve([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'] );
solve([ 5, '3','3 left 2','1 left -2']);