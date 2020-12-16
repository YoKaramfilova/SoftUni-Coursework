function solve(arr) {
    arr.forEach(element => {
        let columns = element.split(' | ');
        let town = {
            town: columns[0],
            latitude: (+columns[1]).toFixed(2),
            longitude: (+columns[2]).toFixed(2),
        }
        console.log(town);
    });
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);