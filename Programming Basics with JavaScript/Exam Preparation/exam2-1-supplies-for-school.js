function schoolSupplies(pens, markers, cleaner, discount) {
    pens = Number(pens);
    markers = Number(markers);
    cleaner = Number(cleaner);
    discount = Number(discount);
    let penPrice = pens * 5.80;
    let markerPrice = markers * 7.20;
    let cleanerPrice = cleaner * 1.20;
    let totalPrice = (penPrice + markerPrice + cleanerPrice) * ((100 - discount) * 0.01);
    console.log(totalPrice.toFixed(3));

}
schoolSupplies(2, 3, 2.5, 25)