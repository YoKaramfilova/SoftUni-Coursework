function solve(arr) {

    class Cat{
        constructor(name, age, meow) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    let arrOfObjects = [];

    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        let name = catData[0];
        let age = catData[1];
        arrOfObjects.push(new Cat(name, age));
    }

    for (let i = 0; i < arrOfObjects.length; i++) {
        arrOfObjects[i].meow();
    }

}

solve(['Mellow 2', 'Tom 5']);