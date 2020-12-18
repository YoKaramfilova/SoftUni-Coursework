function solve(arr) {
    let sequence = arr.shift().split(' ');
    
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        
        if (command.includes('Add')) {
            sequence.push(command[1]);
        } else if (command.includes('Remove')) {
            sequence = sequence.filter(n => n !== command[1]);
        } else if (command.includes('RemoveAt')) {
            sequence.splice(command[1], 1);
        } else if (command.includes('Insert')) {
            sequence.splice(command[2], 0, command[1]);
        }        
    }

    console.log(sequence.join(' '));

}

solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);