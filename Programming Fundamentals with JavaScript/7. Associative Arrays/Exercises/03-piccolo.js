function solve(arr) {
    let parking = new Map();

    arr.forEach(entry => {
        let [command, carNumber] = entry.split(', ');

        if (command === "IN") {
            parking.set(carNumber);
        } else if (command === "OUT") {
            parking.delete(carNumber);
        }
    })

    let arrOfParking = Array.from(parking.keys())
        .sort((a, b) => a.localeCompare(b));

    if (arrOfParking.length > 0) {
        arrOfParking.forEach(number => console.log(number));
    } else {
        console.log('Parking Lot is Empty');
    }
}


solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);