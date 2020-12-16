function solve(n) {
    n = n.toString();
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum += +n[i];
    }

    let amazing = sum.toString().includes("9") ? "True" : "False";

    console.log(n + " Amazing? " + amazing);

}

solve(1233);