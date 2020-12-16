function solve(input) {
    input.split(' ')
    .filter(a => a.startsWith('#'))
    .forEach(element => {
       let word = element.replace('#', '');

       if (/^[a-zA-Z]+$/g.test(word)) {
           console.log(word);
       }      
    });

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');