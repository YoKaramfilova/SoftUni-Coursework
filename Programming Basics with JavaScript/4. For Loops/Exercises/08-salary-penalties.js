function solve(arr) {
    let tabs = Number(arr[0]);
    let salary = Number(arr[1]);

    for (let i = 2; i <= (tabs + 2) && salary > 0; i++) {
        if (arr[i] === 'Facebook') {
            salary = salary - 150;
        } else if (arr[i] === 'Instagram') {
            salary = salary - 100;
        } else if (arr[i] === 'Reddit') {
            salary = salary - 50;
        } 
    }

    if (salary <= 0) {
        console.log('You have lost your salary.');
    } else {
        console.log(salary);
    }
}
solve(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])

