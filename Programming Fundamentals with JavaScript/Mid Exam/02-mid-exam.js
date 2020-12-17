function solve(arr) {
    let items = arr[0].split('|');
    let budget = +arr[1];
    let newPrices = [];
    let profit = 0;

    for (let i = 0; i < items.length; i++) {
        let [type, price] = items[i].split('->');
        price = +price;
        let priceIncrease = 0;
        let newPrice = 0;

        if (type === 'Clothes') {

            if (price <= 50 && budget >= price) {
                buyProduct(price);
            }

        } else if (type === 'Shoes') {

            if (price <= 35 && budget >= price) {
                buyProduct(price);
            }

        } else if (type === 'Accessories') {

            if (price <= 20.50 && budget >= price) {
                buyProduct(price);
            }

        }

        function buyProduct(price) {
            budget -= price;
            priceIncrease = price * 0.4;
            profit += priceIncrease;
            newPrice = price + priceIncrease;
            newPrices.push(newPrice);
        }
    }

    let newBudget = budget + newPrices.reduce((a, b) => a + b);

    console.log(newPrices.map(a => a.toFixed(2)).join(' '));

    console.log(`Profit: ${profit.toFixed(2)}`);

    if (newBudget >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }

}

solve((["Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60",
    "120"]));
solve((["Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60",
    "90"]));