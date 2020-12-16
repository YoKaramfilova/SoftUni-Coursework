function solve(commands) {
    let index = 0;
    let users = {};

    while (commands[index] !== 'Statistics') {
        let [command, name, email] = commands[index].split('->');

        if (command === 'Add') {

            if (users.hasOwnProperty(name)) {
                console.log(`${name} is already registered`);
            } else {
                users[name] = [];
            }
        } else if (command === 'Send') {
            if (users.hasOwnProperty(name)) {
                users[name].push(email);
            }
        } else if (command === 'Delete') {
            if (users.hasOwnProperty(name)) {
                delete users[name];
            } else {
                console.log(`${name} not found`);
            }
        }
        index++;
    }

    console.log(`Users count: ${Object.keys(users).length}`);

    Object.entries(users)
    .sort((a, b) => {
        return b[1].length - a[1].length || a[0].localeCompare(b[0]);
    })
    .forEach(entry => {
        console.log(entry[0]);

        entry[1].forEach(email => console.log(` - ${email}`));
        
    });

}

solve(['Add->Mike', 'Add->George', 'Send->George->Hello World', 'Send->George->Your loan is overdue', 'Add->Mike', 'Send->Mike->Hello, do you want to meet up tomorrow?', 'Delete->Peter', 'Send->George->I am super busy', 'Send->Mike->Another random test mail', 'Delete->George', 'Statistics']);