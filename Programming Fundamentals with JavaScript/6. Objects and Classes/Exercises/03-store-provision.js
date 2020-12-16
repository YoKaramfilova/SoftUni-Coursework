function solve(inStock, ordered) {
    // let allProducts = [];

    // for (let i = 0; i < inStock.length; i += 2) {
    //     addNewProduct(inStock, i);
    // }

    // for (let i = 0; i < ordered.length; i += 2) {
    //     if (allProducts.some(x => x.name === ordered[i])) {
    //         changeProductQuantity(ordered, i);            
    //     } else {
    //         addNewProduct(ordered, i);
    //     }

    // }

    // allProducts.forEach(element => {
    //     console.log(`${element.name} -> ${element.quantity}`)
    // });

    // function changeProductQuantity (arr, index) {
    //     for (let i = 0; i < allProducts.length; i++) {
    //         if (allProducts[i].name === arr[index]) {
    //             allProducts[i].quantity += +arr[index + 1];
    //         }
    //     }
    // }

    // function addNewProduct(arr, index) {
    //     let product = {
    //         name: arr[index],
    //         quantity: +arr[index + 1],
    //     }
    //     allProducts.push(product);
    // }

    let shop = {};

    for (let i = 0; i < inStock.length; i+= 2) {
        addProduct(inStock, i);
    }

    for (let i = 0; i < ordered.length; i+= 2) {
        if (!shop.hasOwnProperty(ordered[i])) {
            addProduct(ordered, i);
        } else {
            changeProduct(ordered, i);
        }
    }

    Object.keys(shop).forEach(key => {
        console.log(`${key} -> ${shop[key]}`)
    });


    function addProduct(arr, index) {
        let product = arr[index];
        shop[product] = +arr[index + 1];
    }

    function changeProduct(arr, index) {
        let product = arr[index];
        shop[product] += +arr[index + 1];
    }

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
