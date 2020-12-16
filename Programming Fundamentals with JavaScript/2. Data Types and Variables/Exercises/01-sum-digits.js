function solve(n) {
    n = n.toString();
    sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += +n[i];
    }

    console.log(sum);

}
solve(245678);
