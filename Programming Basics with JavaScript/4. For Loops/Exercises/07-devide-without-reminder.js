function solve(arr) {
    let n = arr[0];
    let noReminder2 = 0;
    let noReminder3 = 0;
    let noReminder4 = 0;
    
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            noReminder2 += 1;
        }

        if (arr[i] % 3 == 0) {
            noReminder3 += 1;
        } 
        
        if (arr[i] % 4 == 0) {
            noReminder4 += 1;
        }
    }

    let p1 = ((noReminder2 / n) * 100).toFixed(2);
    let p2 = ((noReminder3 / n) * 100).toFixed(2);
    let p3 = ((noReminder4 / n) * 100).toFixed(2);

    console.log(`${p1}%`);
    console.log(`${p2}%`);
    console.log(`${p3}%`);
    
}

solve(["10",

"680",

"2",

"600",

"200",

"800",

"799",

"199",

"46",

"128",

"65"])