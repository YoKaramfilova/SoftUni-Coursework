function oldBooks(input) {
    let favouriteBook = input[0];
    let index = 1;
    let checkedBooks = 0;
    let foundFavourite = false;
    while (input[index] !== 'No More Books') {
        if (input[index] == favouriteBook) {
            foundFavourite = true;
            break;
        } else {
            checkedBooks++
        }
        index++
    }

    if (foundFavourite) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${checkedBooks} books.`)
    }
}
oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"])
oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])
oldBooks(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])