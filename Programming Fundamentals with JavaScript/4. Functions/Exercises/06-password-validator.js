function passwordValidator(input) {

    checkLength(input);
    checkForSpecialChars(input);
    checkForDigits(input);

    if (checkLength(input) && checkForSpecialChars(input) && checkForDigits(input)) {
        console.log('Password is valid')
    } 
    
    if (!checkLength(input)) {
        console.log('Password must be between 6 and 10 characters');
    } 
    
    if (!checkForSpecialChars(input)) {
        console.log('Password must consist only of letters and digits');
    } 
    
    if (!checkForDigits(input)) {
        console.log('Password must have at least 2 digits');
    }

    function checkLength(a) {
        if (a.length >= 6 && a.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function checkForSpecialChars(a) {
        let specialCharacters = /[^a-zA-Z0-9]/;
        if (!specialCharacters.test(a)) {
            return true;
        } else {
            return false;
        }
    }

    function checkForDigits(a) {
        let digits = /\d/g;
        let digitMatches = a.match(digits);
        if (digitMatches === null) {
            digitMatches = 0;
        }
        if (digitMatches.length >= 2) {
            return true;
        } else {
            return false;
        }
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');