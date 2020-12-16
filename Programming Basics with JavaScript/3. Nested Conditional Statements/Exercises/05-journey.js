function journey(budget, season) {
    budget = Number(budget);
    let spend
    let destination
    let accomodation

    if (budget <= 100) {
        destination = 'Bulgaria';
    } else if (budget <= 1000) {
        destination = 'Balkans';
    } else if (budget > 1000) {
        destination = 'Europe';
    }
    
    if (destination === 'Europe') {
            spend = budget * 0.90;
            accomodation = 'Hotel';
    } else if (destination === 'Balkans') {
        if (season === 'summer') {
            spend = budget * 0.40;
            accomodation = 'Camp';   
        } else if (season === 'winter') {
            spend = budget * 0.80;
            accomodation = 'Hotel';   
        } 
    } else if (destination === 'Bulgaria') {
        if (season === 'summer') {
            spend = budget * 0.30;
            accomodation = 'Camp';   
        } else if (season === 'winter') {
            spend = budget * 0.70;
            accomodation = 'Hotel';   
        } 
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${spend.toFixed(2)}`);

}
journey("50", "summer");
journey("75", "winter");
journey("312", "summer");
journey("678.53", "winter");
journey("1500", "summer")
