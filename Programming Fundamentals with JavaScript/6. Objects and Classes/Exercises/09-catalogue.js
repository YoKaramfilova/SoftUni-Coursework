function solve(arr) {
    let catalogue = [];

    arr.forEach(element => {
        let [name, price] = element.split(' : ');
        let product = {
            name,
            price: +price,
        };
        catalogue.push(product);
    });

    

    catalogue
    .sort((a, b) => Object.values(a)[0].localeCompare(Object.values(b)[0]))
    .forEach((element, index) => {
            let firstLetter = element.name[0];
            let previousFirstLetter = '';
            
            if (index - 1 >= 0) {
                previousFirstLetter = catalogue[index - 1].name[0];
            }

            if (!(firstLetter === previousFirstLetter)) {
                console.log(firstLetter);
                console.log(`  ${element.name}: ${element.price}`);
            } else {
                console.log(`  ${element.name}: ${element.price}`);
            }
        })

}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);