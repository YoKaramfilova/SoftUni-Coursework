function solve(arr) {
    let totalPrice = 0;
    let taxes = 0;
    let totalPricePlusTaxes = 0;
    let index = 0;

    while (arr[index] !== 'special' && arr[index] !== 'regular') {
        if (+arr[index] > 0) {
            totalPrice += +arr[index];
        } else {
            console.log('Invalid price!');
        }
        index++;
    }

    taxes = totalPrice * 0.2;
    totalPricePlusTaxes = totalPrice + taxes;

    if (arr[index] === 'special') {
        totalPricePlusTaxes *= 0.9;
    }

    if (totalPrice ===  0) {
        console.log('Invalid order!');
    } else {
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPricePlusTaxes.toFixed(2)}$`);
    }
}

solve([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]);
solve([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]
    );
solve([
    'regular'
    ]);
