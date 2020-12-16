function solve(arr) {
    let isFound = false; 

    for (let i = 0; i < arr.length; i++) {
        let sumBefore = 0; 
        let sumAfter = 0;


        for (let j = 0; j < i; j++) {
            sumBefore += arr[j];
        
        }

        for (let k = i + 1; k < arr.length; k++) {
            sumAfter += arr[k];
        }

        if (sumAfter === sumBefore) {
            isFound = true;
            console.log(i);
        }
    }

    if (!isFound) {
        console.log('no');
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

// [1, 2, 3, 3]	2	At a[2] -> left sum = 3, right sum = 3
// a[0] + a[1] = a[3]
// [1, 2]	no	At a[0] -> left sum = 0, right sum = 2
// At a[1] -> left sum = 1, right sum = 0
// No such index exists
// [1]	0	At a[0] -> left sum = 0, right sum = 0
// [1, 2, 3]	no	No such index exists
// [10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]	3	At a[3] -> left sum = 20, right sum = 20
// a[0] + a[1] + a[2] = a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]
