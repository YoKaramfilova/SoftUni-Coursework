function solve(m, n) {
    let sum = 0; 
    let line = "";
    for (let i = m; i <= n; i++) {
        line += i + " ";
        sum += i;        
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);