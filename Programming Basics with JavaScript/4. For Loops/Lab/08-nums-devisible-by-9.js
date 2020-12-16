function solve(a, b) {
    a = Number(a);
    b = Number(b);
    let sum = 0;
    let devisibleNums = '';
    for (let i = a; i < b; i++) {
        if (i % 9 == 0) {
            sum = sum + i;
            devisibleNums = devisibleNums + i + '\n';
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(devisibleNums);
}
solve('100', '200')