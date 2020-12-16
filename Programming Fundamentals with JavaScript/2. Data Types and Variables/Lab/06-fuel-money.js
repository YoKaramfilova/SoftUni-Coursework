function solve(distance, passengers, price) {
    let consumption = (7 * (distance / 100)) + passengers * 0.1;
    let totalPrice = consumption * price; 

    console.log(`Needed money for that trip is ${totalPrice}lv.`)
}

solve(260, 9, 2.49)

