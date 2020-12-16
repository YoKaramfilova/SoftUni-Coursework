function fruitMarket(strawberriesPrice, bananas, oranges, raspberries, strawberries){
    let raspberriesPrice = Number(strawberriesPrice) / 2;
    let bananasPrice = raspberriesPrice * 0.2;
    let orangesPrive = raspberriesPrice * 0.6;
    let totalCost = (Number(strawberries) * Number(strawberriesPrice)) + (Number(raspberries) * Number(raspberriesPrice)) + (Number(oranges) * Number(orangesPrive)) + (Number(bananas) * Number(bananasPrice));
    console.log(totalCost);
}
fruitMarket('48', '10', '3.3', '6.5', '1.7');