function solve(x1, y1, x2, y2) {
    let maxX = Math.max(x1, x2);
    let maxY = Math.max(y1, y2);
    let minX = Math.min(x1, x2);
    let minY = Math.min(y1, y2);


    let length = maxY - minY;
    let width = maxX - minX;

    let distance = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
    console.log(distance);

}

solve(2.34, 15.66, -13.55, -2.9985);