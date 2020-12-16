function solve(input) {
    let username = input[0];
    let password = "";
    let attempts = 0; 
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    for (let i = 1; i < input.length; i++) {
        if (input[i] === password) {
            console.log(`User ${username} logged in.`);
        } else {
            attempts++
            if (attempts <= 3) {
                console.log(`Incorrect password. Try again.`);
            } else {
                console.log(`User ${username} blocked!`);
                break;
            }
        }
    }

}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);