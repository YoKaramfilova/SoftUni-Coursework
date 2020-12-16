function solve(input) {
    let neighboorhoods = input.shift().split(', ');
    let map = new Map();

    neighboorhoods.forEach(neighboorhood => {
        map.set(neighboorhood, []);
    });

    input.forEach(element => {
        let [neighboorhood, person] = element.split(' - ');

        if (map.has(neighboorhood)) {
            map.get(neighboorhood).push(person);
        }
    });
    
    Array.from(map.entries())
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(entry => {
        console.log(`${entry[0]}: ${entry[1].length}`); 
        entry[1].forEach(person => console.log(`--${person}`));
    });

}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);