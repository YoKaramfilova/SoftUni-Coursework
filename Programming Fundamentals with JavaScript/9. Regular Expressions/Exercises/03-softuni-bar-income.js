function solve(arr) {
    let index = 0;
    let regex = /^\%(?<name>[A-Z][a-z]+?)\%[^\|\$\!\.]*<(?<product>\w+)>[^\|\$\!\.]*\|(?<count>\d+)\|[^\|\$\!\.]*?(?<price>\d+(\.\d+)?)\$$/;
    let income = 0;

    while (arr[index] !== 'end of shift') {
        if (regex.test(arr[index])) {
            let match = regex.exec(arr[index]);
            let name = match.groups.name;
            let product = match.groups.product;
            let count = +(match.groups.count);
            let price = +(match.groups.price);
            let cost = count * price;
            income += cost;

            console.log(`${name}: ${product} - ${cost.toFixed(2)}`);
        }

        index++;
    }

    console.log(`Total income: ${income.toFixed(2)}`);

}

solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift',]);
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);
