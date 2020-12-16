function converter(radians){
    let degrees = Number(radians) * (180 / Math.PI);
    console.log(degrees.toFixed(0));
}
converter(5)