function solve(arr) {
    let storage = new Map();

    arr.forEach(element =>{
        let [product, quantity] = element.split(' ');
        quantity = +quantity;

        if (!storage.has(product)) {
            storage.set(product, quantity);
        } else {
            let currentQuantity = storage.get(product);
            let newQuantity = currentQuantity + quantity;
            storage.set(product, newQuantity);
        }        
    });
   
    for (let [key, value] of storage.entries()) {
        console.log(`${key} -> ${value}`);
    }

}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);