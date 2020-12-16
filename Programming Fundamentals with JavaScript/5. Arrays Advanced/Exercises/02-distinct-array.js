function solve(nums) {
    // let unique = [... new Set(nums)];

    // console.log(unique.join(' '));

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                nums.splice(j, 1);
                j--
            }
            
        
        }
    }

    console.log(nums.join(' '));

}

solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);