function solve(nums, bomb) { 
    let bombNum = +bomb[0];
    let blast = +bomb[1];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === bombNum) {
            let blastRange = 1 + (2 * blast);
            let blastStart = Math.max(i - blast, 0);
            
            nums.splice(blastStart, blastRange);
            i = 0; 
        }
    }

    let sum = nums.reduce( (a, b) => a + b, 0);
    console.log(sum);
}

solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    );
solve([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    );
solve([1, 7, 7, 1, 2, 3],
    [7, 1]
    );
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );