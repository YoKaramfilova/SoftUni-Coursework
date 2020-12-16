function solve(arr) {
    let resources = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = arr[i + 1];

        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = +quantity;
        } else {
            resources[resource] += +quantity;

        }
    }

    for (let key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }

}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
);
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
);