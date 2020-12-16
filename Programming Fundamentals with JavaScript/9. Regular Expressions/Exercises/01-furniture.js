// function solve(arr) {
//     let index = 0;
//     let furniture = [];
//     let totalPrice = 0;

//     while (arr[index] !== 'Purchase') {
//         let regex = />>[a-zA-Z]+<<\d+(\.\d+)?!\d+/;
//         let [item, price, quantity] = arr[index].split(/\<\<|!/);
//         item = item.replace('>>', '');
//         if (regex.test(arr[index])) {
//             furniture.push(item);
//             totalPrice += +price * +quantity;
//         }
//         index++;
//     }

//     console.log('Bought furniture:');
//     if (furniture.length > 0) {
//         furniture.forEach(item => console.log(item));
//     }
//     console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
// }

function solve(input) {
    let index = 0;
    const boughtFurniture = [];
    let regex = new RegExp('>{2}([A-z]+)<{2}([0-9.]+)!([0-9]+)');
    let sum = 0;

    while (input[index] !== 'Purchase') {

        let match = input[index].match(regex);

        if (match !== null && match !== undefined) {
            let townName = match[1];
            let price = Number(match[2]);
            let quantity = Number(match[3]);

            boughtFurniture.push(townName);
            sum += price * quantity;
        }

        index++;
    }

    console.log('Bought furniture:');

    if (boughtFurniture.length > 0) {
        console.log(boughtFurniture.join('\n'));
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);

}

solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);