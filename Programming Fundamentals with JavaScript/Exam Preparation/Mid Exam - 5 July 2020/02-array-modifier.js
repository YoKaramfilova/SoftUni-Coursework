function solve(arr) {
    let nums = arr.shift().split(' ').map(Number);
    let index = 0;

    while (arr[index] !== 'end') {
        let [command, index1, index2] = arr[index].split(' ');

        if (command === 'swap') {
            let temp = nums[index1];
            nums[index1] = nums[index2];
            nums[index2] = temp;

        } else if (command === 'multiply') {
            nums[index1] = nums[index1] * nums[index2];

        } else if (command === 'decrease') {
            nums = nums.map(a => a - 1);            
        }

        index++
    }

    console.log(nums.join(', '));

}

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);