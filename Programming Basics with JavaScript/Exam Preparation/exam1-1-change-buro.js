function changeBuro(bitcoin, yuan, comission) { 
    let bitcoinToLeva = Number(bitcoin) * 1168;
    let yuanToDollars = Number(yuan) * 0.15;
    let yuanToLeva = yuanToDollars * 1.76;
    let yuanToEuro = yuanToLeva / 1.95;
    let bitcoinToEuro = bitcoinToLeva / 1.95;

    let totalEuro = (yuanToEuro + bitcoinToEuro) * ((100 - comission) * 0.01);
    console.log(totalEuro.toFixed(2));

}
changeBuro(20,5678,2.4)