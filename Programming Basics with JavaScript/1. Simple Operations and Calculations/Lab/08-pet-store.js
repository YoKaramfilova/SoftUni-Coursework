function petStore(dogs, otherPets) {
    let dogFoodPrice = Number(dogs) * 2.5;
    let otherPetsFoodPrice = Number(otherPets) * 4;
    let totalPrice = dogFoodPrice + otherPetsFoodPrice;
    console.log(totalPrice)
}
petStore(4,6)