function aboutYou(fname, lname, age, town) {
    let firstName = fname;
    let lastName = lname;
    let yourAge = Number(age);
    let homeTown = town;
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
aboutYou('Yoanna','Karamfilova','23','Sofia')