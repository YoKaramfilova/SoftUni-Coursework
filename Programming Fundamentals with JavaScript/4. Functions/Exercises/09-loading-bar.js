function loadingBar(a) {
    
    if (a < 100) {
        console.log(`${a}% ${drawBar(a)}`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`${a}% ${drawBar(a)}`);
    }

    
    function drawBar(a) {
        let bar = '['
        for (let i = 1; i <= a / 10; i++) {
            bar += '%';
        }

        for (let i = (a / 10) + 1; i <= 10; i++) {
            bar += '.';
        }

        bar += ']';

        return bar;
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);