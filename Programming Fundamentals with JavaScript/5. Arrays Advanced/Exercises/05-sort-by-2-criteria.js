function solve(arr) {
    arr.sort(function (a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            a = a.toLowerCase();
            b = b.toLowerCase();
            return a.localeCompare(b);
        }

    });

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    } 

}

solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George", "John", "Jordan", "Tomas"]);
solve(['test', 
    'Deny',
    'omen',
    'Defaul'])
