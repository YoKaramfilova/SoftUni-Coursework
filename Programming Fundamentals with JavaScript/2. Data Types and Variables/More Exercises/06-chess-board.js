function solve(n) {
    let output = "<div class=\"chessboard\">";

    for (let i = 1; i <= n; i++) {
        output += "\n  <div>\n"; 
        for (let j = 1; j <= n; j++) {
            if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
                output += "\t<span class=\"black\"></span>\n";
            } else if ((i % 2 !== 0 && j % 2 === 0) || (i % 2 === 0 && j % 2 !== 0)) {
                output += "\t<span class=\"white\"></span>\n";
            } 
        }
        output += "  </div>"; 
    }

    output += "\n</div>";

    console.log(output);

}

solve(3);