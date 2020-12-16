function depositCalculator(amount, period, interest) {
    let depositAmount = Number(amount) + Number(period) * ((Number(amount) * (Number(interest) / 100)) / 12);
    console.log(depositAmount);
}
