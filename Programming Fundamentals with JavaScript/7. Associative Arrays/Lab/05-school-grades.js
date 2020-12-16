function solve(arr) {
    let map = new Map();

    arr.forEach(element => {
        let studentData = element.split(' ');
        let name = studentData.shift();
        let grades = studentData.map(Number);
        if (map.has(name)) {
            map.get(name).concat(grades);
        } else {
            map.set(name, []);
            map.set(name, map.get(name).concat(grades));
        }
    });

    let gradeRegister = Array.from(map.entries());

    gradeRegister.sort((a, b) => {
        let arrA = a[1];
        let arrB = b[1];
        let arrASum = arrA.reduce((a, b) => a + b);
        let arrBSum = arrB.reduce((a, b) => a + b);
        let arrAAverage = arrASum / arrA.length;
        let arrBAverage = arrBSum / arrB.length;

        return arrAAverage - arrBAverage;
    });

    gradeRegister.forEach(element => {
        console.log(`${element[0]}: ${element[1].join(', ')}`);
    })
}

solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);