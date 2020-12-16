function solve(arr) {
    let email = arr.shift();

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].includes('Make Upper')) {
            email = email.toUpperCase();
            console.log(email);

        } else if (arr[i].includes('Make Lower')) {
            email = email.toLowerCase();
            console.log(email);

        } else if (arr[i].includes('GetDomain')) {
            let index = +(arr[i].split(' ').pop());
            let domain = email.substring(email.length - index);
            console.log(domain);

        } else if (arr[i].includes('GetUsername')) {
            if (email.includes('@')) {
                let userName = email.substring(0, email.indexOf('@'));
                console.log(userName);
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`)
            }

        } else if (arr[i].includes('Replace')) {
            let index = arr[i].split(' ').pop();
            while (email.includes(index)) {
                email = email.replace(index, '-');
            }
            console.log(email);

        } else if (arr[i].includes('Encrypt')) {
            let arr = email.split('');
            let result = [];

            for (let i = 0; i < arr.length; i++) {
                let charCode = arr[i].charCodeAt(0);
                result.push(charCode);

            }

            email = result.join(' ');
            console.log(email);


        } else if (arr[i].includes('Complete')) {
            break;
        }

    }

}

// solve(['Mike123@somemail.com', 'Make Upper', 'GetDomain 3', 'GetUsername', 'Encrypt', 'Complete']);
solve(['AnotherMail.com', 'Make Lower', 'GetUsername', 'Replace a', 'Complete']);