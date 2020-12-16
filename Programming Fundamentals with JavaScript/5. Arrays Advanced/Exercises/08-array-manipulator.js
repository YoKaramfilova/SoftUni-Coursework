function solve(nums, commands) {

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ');
        let commandText = currentCommand.shift();
        let commandNums = currentCommand.map(Number);
        let index = commandNums.shift();

        if (commandText === 'add') {
            nums.splice(index, 0, commandNums[0]);
        } else if (commandText === 'addMany') {
            nums.splice(index, 0, ...commandNums);
        } else if (commandText === 'contains') {
            if (nums.includes(index)) {
                console.log(nums.indexOf(index));
            } else {
                console.log(-1);
            }
        } else if (commandText === 'remove') {
            nums.splice(index, 1);
        } else if (commandText === 'shift') {
            for (let j = 1; j <= index; j++) {
                let firstPosition = nums.shift();
                nums.push(firstPosition);
            }
        } else if (commandText === 'sumPairs') {
            let tempArray = [];
            for (let k = 0; k < nums.length; k++) {
                let firstNum = nums[k++];
                let secondNum = nums[k];
                if (!isNaN(secondNum)) {
                    tempArray.push(firstNum + secondNum);
                } else {
                    tempArray.push(firstNum);
                }
            }
            nums = tempArray;

        } else if (commandText === 'print') {
            console.log('[ ' + nums.join(', ') + ' ]');
            break;
        }
    }
}

solve([1, 1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'sumPairs', 'print']
);
solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);