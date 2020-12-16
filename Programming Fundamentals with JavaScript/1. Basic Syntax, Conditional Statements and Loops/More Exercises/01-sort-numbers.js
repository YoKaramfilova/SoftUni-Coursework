function solve(a, b, c) {
    let str = a.toString() + " " + b.toString() + " " + c.toString();
    let arr = str.split(' ');
    arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
solve(2, 6, 9);
solve(5, 10, -3);