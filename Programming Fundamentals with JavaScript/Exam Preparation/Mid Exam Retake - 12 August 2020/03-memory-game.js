function solve(arr) {
    let sequence = arr.shift().split(' ');
    let index = 0;
    let moves = 0;

    while (arr[index] !== 'end') {
        moves++;
        let [index1, index2] = arr[index].split(' ').map(Number);
        let areEqual = index1 === index2;
        let areOutOfBounds = index1 < 0 || index2 < 0 || index1 >= sequence.length || index2 >= sequence.length;

        if (areEqual || areOutOfBounds) {
            console.log('Invalid input! Adding additional elements to the board')
            sequence.splice(sequence.length / 2, 0, `-${moves}a`, `-${moves}a`);
            index++;
            continue;
        }

        if (sequence[index1] === sequence[index2]) {
            let element = sequence[index1];
            
            for (let i = 0; i < sequence.length; i++) {
                if (sequence[i] === element) {
                    sequence.splice(i, 1);
                    i--;
                }
            }      
            console.log(`Congrats! You have found matching elements - ${element}!`);

            if (sequence.length === 0) {
                console.log(`You have won in ${moves} turns!`);
                break;
            }
        } else {
            console.log('Try again!')
        }

        index++;
    }

    if (sequence.length !== 0) {
        console.log('Sorry you lose :(');
        console.log(sequence.join(' '));
    }
}

solve( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]);
solve([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);
solve([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);