function localShops(product, city, quantity) {
    let coffePrice = 0;
    let waterPrice = 0;
    let beerPrice = 0;
    let sweetsPrice = 0;
    let peanutsPrice = 0;
    switch (city) {
        case 'Sofia':
            coffePrice = 0.50;
            waterPrice = 0.80;
            beerPrice = 1.20;
            sweetsPrice = 1.45;
            peanutsPrice = 1.60;
            break;
        case 'Plovdiv':
            coffePrice = 0.40;
            waterPrice = 0.70;
            beerPrice = 1.15;
            sweetsPrice = 1.30;
            peanutsPrice = 1.50;
            break;
        case 'Varna':
            coffePrice = 0.45;
            waterPrice = 0.70;
            beerPrice = 1.10;
            sweetsPrice = 1.35;
            peanutsPrice = 1.55;
            break;
    }
     switch (product) {
        case 'coffee':
            console.log(coffePrice * Number(quantity));
            break;
        case 'water':
            console.log(waterPrice * Number(quantity));
            break;
        case 'beer':
            console.log(beerPrice * Number(quantity));
            break;
        case 'sweets':
            console.log(sweetsPrice * Number(quantity));
            break;
        case 'peanuts':
            console.log(peanutsPrice * Number(quantity));
            break;
     }
        
}
localShops("coffee", "Varna", "2");