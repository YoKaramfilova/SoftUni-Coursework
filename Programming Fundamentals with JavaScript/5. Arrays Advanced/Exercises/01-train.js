function solve(arr) {
    let wagons = arr[0].split(' ').map(Number);
    let capacity = +arr[1];
    
    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command.includes('Add')) {
            wagons.push(+command[1]);
        } else {
            let newPassangers = +command[0];
            
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + newPassangers <= capacity) {
                    wagons[i] += newPassangers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));

}

solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);