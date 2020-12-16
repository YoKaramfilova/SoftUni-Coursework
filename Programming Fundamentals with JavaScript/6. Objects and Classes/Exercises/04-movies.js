function solve(arr) {
    let movies = [];

    arr.forEach(command => {
        if (command.includes('addMovie')) {
            let name = command.substring(9);
            addMovie(name);

        } else if (command.includes('directedBy')) {
            let [name, director] = command.split(' directedBy ');
            let currentMovie = movies.find(movie => movie.name === name);

            if (checkForMovie(name)) {
                addDirector(currentMovie, director);
            } 

        } else if (command.includes('onDate')) {
            let [name, date] = command.split(' onDate ');
            let currentMovie = movies.find(movie => movie.name === name);

            if (checkForMovie(name)) {
                addDate(currentMovie, date);
            } 
        }
    })

    movies.forEach(movie => {
        if (Object.keys(movie).length === 3) {
            console.log(JSON.stringify(movie));
        }
    })

    function addMovie(name) {
        let movie = {
            name,
        }
        movies.push(movie);
    }

    function checkForMovie(name) {
        if (movies.some(movie => movie.name === name)) {
            return true;
        } else {
            return false;
        }
    }

    function addDirector(movie, director) {
        movie.director = director;
    }

    function addDate(movie, date) {
        movie.date = date;
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
