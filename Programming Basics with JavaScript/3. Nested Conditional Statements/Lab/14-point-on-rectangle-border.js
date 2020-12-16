function pointOnRectangleBorder(x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);
    xCondition = (x == x1 || x == x2) && (y > y1 && y < y2);
    yCondition = (y == y1 || y == y2) && (x > x1 && x < x2);
    if (xCondition || yCondition) {
        console.log('Border');
    } else {
        console.log('Inside / Outside');
    }
}
pointOnRectangleBorder(1, 5, -3, 2, 1, 5)