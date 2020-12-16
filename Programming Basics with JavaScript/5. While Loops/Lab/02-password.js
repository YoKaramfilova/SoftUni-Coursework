function login(input) {
    let user = input[0];
    let password = input[1];
    let index = 2;

    while (password !== input[index]) {
        index++;
    }

    console.log(`Welcome ${user}!`);
}

login(["Nakov",

"1234",

"Pass",

"1324"])