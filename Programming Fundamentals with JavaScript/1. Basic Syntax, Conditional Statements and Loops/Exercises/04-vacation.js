function solve(group, type, day) {
    let pricePerPerson = 0; 
    let totalPrice = 0;
    if (type === "Students") {
        if (day === "Friday") {
            pricePerPerson = 8.45;
        } else if (day === "Saturday") {
            pricePerPerson = 9.80;
        } else if (day === "Sunday") {
            pricePerPerson = 10.46;
        }
        
        totalPrice = pricePerPerson * group;

        if (group >= 30) {
            totalPrice *= 0.85;
        }

    } else if (type === "Business") {
        if (day === "Friday") {
            pricePerPerson = 10.90;
        } else if (day === "Saturday") {
            pricePerPerson = 15.60;
        } else if (day === "Sunday") {
            pricePerPerson = 16;
        }

        totalPrice = pricePerPerson * group;
        
        if (group >= 100) {
            totalPrice -= 10 * pricePerPerson;

        }
    } else if (type === "Regular") {
        if (day === "Friday") {
            pricePerPerson = 15;
        } else if (day === "Saturday") {
            pricePerPerson = 20;
        } else if (day === "Sunday") {
            pricePerPerson = 22.50;
        }

        totalPrice = pricePerPerson * group;

        if (group >= 10 && group <= 20) {
            totalPrice *= 0.95;
        }
    } 

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}