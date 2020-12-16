function skiTripPrice(days, roomType, review) {
    let nights = Number(days) - 1;
    let roomForOnePrice = 18;
    let apartmentPrice = 25;
    let presidentApartmentPRice = 35;
    let price = 0;
    let discount = 0;
    let pricePlusTip = 0; 

    if (roomType === 'room for one person') {
        price = roomForOnePrice * nights;
    } else if (roomType === 'apartment') {
        price = apartmentPrice * nights;
    } else if (roomType === 'president apartment') {
        price = presidentApartmentPRice * nights;
    } 

    if (nights < 10) {
        if (roomType === 'apartment') {
            discount = price * 0.30;
        } else if (roomType === 'president apartment') {
            discount = price * 0.10;
        }
    } else if (nights >= 10 && nights <= 15) {
        if (roomType === 'apartment') {
            discount = price * 0.35;
        } else if (roomType === 'president apartment') {
            discount = price * 0.15;
        }
    } else if (nights > 15) {
        if (roomType === 'apartment') {
            discount = price * 0.50;
        } else if (roomType === 'president apartment') {
            discount = price * 0.20;
        }
    } 
    
    let finalPrice = price - discount;
        
    if (review === 'positive') {
        pricePlusTip = finalPrice * 1.25;
    } else if (review === 'negative') {
        pricePlusTip = finalPrice * 0.90;
    }

    console.log(pricePlusTip.toFixed(2));
}
skiTripPrice("12", "room for one person", "positive");
skiTripPrice("2", "apartment", "positive");