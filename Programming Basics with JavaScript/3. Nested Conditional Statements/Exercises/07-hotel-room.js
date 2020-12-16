function roomCost(month, nights) {
    nights = Number(nights);
    let apartmentFullCost = 0;
    let studioFullCost = 0;
    let apartmentWithDiscount = 0;
    let studioWithDiscount = 0;

    if (month === 'May' || month === 'October') {
        apartmentFullCost = 65 * nights;
        studioFullCost = 50 * nights;
    } else if (month === 'June' || month === 'September') {
        apartmentFullCost = 68.70 * nights;
        studioFullCost = 75.20 * nights;
    } else if (month === 'July' || month === 'August') {
        apartmentFullCost = 77 * nights;
        studioFullCost = 76 * nights;
    }
    
    if (nights > 14) {
        apartmentWithDiscount = apartmentFullCost * 0.90;
        if (month === 'May' || month === 'October') {
            studioWithDiscount = studioFullCost * 0.70;
        } else if (month === 'June' || month === 'September') {
            studioWithDiscount = studioFullCost * 0.80;
        } else {
            studioWithDiscount = studioFullCost;
        }
    } else if (nights > 7) {
        apartmentWithDiscount = apartmentFullCost;
        if (month === 'May' || month === 'October') {
            studioWithDiscount = studioFullCost * 0.95;
        } else {
            studioWithDiscount = studioFullCost;
        }
    } else {
        apartmentWithDiscount = apartmentFullCost;
        studioWithDiscount = studioFullCost;
    }

    console.log(`Apartment: ${apartmentWithDiscount.toFixed(2)} lv.`);
    console.log(`Studio: ${studioWithDiscount.toFixed(2)} lv.`);
}
roomCost("May",

"15")