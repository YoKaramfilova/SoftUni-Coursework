function shapeArea(shape, a, b) {
    let area = 0;
    if (shape == 'square') {
        area = Math.pow(a,2);
    } else if (shape == 'rectangle') {
        area = a * b;
    } else if (shape == 'circle') {
        area = Math.pow(a,2) * Math.PI;
    } else if (shape == 'triangle') {
        area = (a * b) / 2;
    }
    console.log(area.toFixed(3));
}
shapeArea('circle', '6');
shapeArea('square', '6');
shapeArea('rectangle', '6', '4');
shapeArea('triangle', '6', '4');