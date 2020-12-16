function workingHours(hour, day) {
    if (Number(hour) >= 10 && Number(hour) < 18 && day !== 'Sunday') {
        console.log('open');
    } else {
        console.log('closed');
    }
}
workingHours('19','Friday');
workingHours('18','Friday');
workingHours('17','Friday');
workingHours('10','Friday');
workingHours('9','Friday');
workingHours('9','Sunday');
workingHours('18','Saturday');
workingHours('17','Monday');
workingHours('10','Sunday');
workingHours('9','Monday');