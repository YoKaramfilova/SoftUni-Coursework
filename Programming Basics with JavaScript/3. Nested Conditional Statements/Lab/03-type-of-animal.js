function typeOfAnimal(animal) {
    switch (animal) {
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
        case 'dog':
            console.log('mammal');
            break;
        default:
            console.log('unknown');
            break;
    }
}
typeOfAnimal('dog')