function solve(radius, heigth) {
    let volume = (Math.PI * Math.pow(radius, 2) * heigth) / 3;
    let slantHeigth = Math.sqrt(Math.pow(radius, 2) + Math.pow(heigth, 2));
    let area = Math.PI * Math.pow(radius, 2) + (Math.PI * radius * slantHeigth);

    console.log("volume = " + volume.toFixed(4));
    console.log("area = " + area.toFixed(4));
}

solve(3, 5);