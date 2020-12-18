function solve(arr) {
    let sorted = arr.sort();

    for (let i = 0; i < sorted.length; i++) {
        arr[i] = i + 1 + '.' + arr[i];        
    }

    sorted.forEach(element => console.log(element));

}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);