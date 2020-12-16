function cinemaRevenue(projectionType, rows, colomns) {
    let premiereTicket = 12;
    let normalTicket = 7.5;
    let discountTicket = 5;
    let projectionRevenue = 0;
    rows = Number(rows);
    colomns = Number(colomns);
    
    
    switch (projectionType) {
        case 'Premiere':
            projectionRevenue = premiereTicket * rows * colomns;
            break;
        case 'Normal':
            projectionRevenue = normalTicket * rows * colomns;
            break;
        case 'Discount':
            projectionRevenue = discountTicket * rows * colomns;
            break;
    }

    console.log(`${projectionRevenue.toFixed(2)} leva`);
}
cinemaRevenue('Premiere', '10', '12')