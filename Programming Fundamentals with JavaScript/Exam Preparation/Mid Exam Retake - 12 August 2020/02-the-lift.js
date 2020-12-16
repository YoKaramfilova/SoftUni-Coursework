function solve(arr) { 
    let tourists = +arr[0];
    let lift = arr[1].split(' ');

    for (let i = 0; i < lift.length; i++) {
        let wagon = +lift[i];
        while (wagon < 4) {
            if (tourists === 0) {
                break;
            }
            tourists--;
            wagon++;
        }
        lift[i] = wagon;
    }

    let lastWagon = lift[lift.length - 1];
    lift = lift.join(' ');


    if (lastWagon === 4 && tourists === 0) {
        console.log(lift);
    } else if (tourists > 0) {
        console.log(`There isn\'t enough space! ${tourists} people in a queue!`);
        console.log(lift);
    } else if (lastWagon < 4) {
        console.log('The lift has empty spots!');
        console.log(lift);
    } 

}

solve([
    "15",
    "0 0 0 0 0"
   ]);
solve([
    "20",
    "0 2 0"
   ]);