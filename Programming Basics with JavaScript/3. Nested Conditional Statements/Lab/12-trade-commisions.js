function tradeComissions(city, sales) {
    let comission = 0;
    sales = Number(sales);
    if (sales >= 0 && sales <= 500) {
        if (city === 'Sofia') {
            comission = sales * 0.05;
        } else if (city === 'Varna') {
            comission = sales * 0.045;
        } else if (city === 'Plovdiv') {
            comission = sales * 0.055;
        }
    } else if (sales > 500 && sales <= 1000) {
        if (city === 'Sofia') {
            comission = sales * 0.07;
        } else if (city === 'Varna') {
            comission = sales * 0.075;
        } else if (city === 'Plovdiv') {
            comission = sales * 0.08;
        }
    } else if (sales > 1000 && sales <= 10000) {
        if (city === 'Sofia') {
            comission = sales * 0.08;
        } else if (city === 'Varna') {
            comission = sales * 0.10;
        } else if (city === 'Plovdiv') {
            comission = sales * 0.12;
        }
    } else if (sales > 10000) {
        if (city === 'Sofia') {
            comission = sales * 0.12;
        } else if (city === 'Varna') {
            comission = sales * 0.13;
        } else if (city === 'Plovdiv') {
            comission = sales * 0.145;
        }
    }

    if (['Sofia', 'Varna', 'Plovdiv'].includes(city) && comission > 0) {
        console.log(comission.toFixed(2));
    } else {
        console.log('error');
    }
}
tradeComissions('Sofia', '1500');
tradeComissions('Plovdiv', '499.99');
tradeComissions('Varna', '3874.50');
tradeComissions('Kaspichan', '500');
