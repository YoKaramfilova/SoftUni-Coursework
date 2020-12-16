function onTimeForTheExam(examHour, examMinutes, arrivalHour, arrivalMinutes) {
    examHour = Number(examHour);
    examMinutes = Number(examMinutes);
    arrivalHour = Number(arrivalHour);
    arrivalMinutes = Number(arrivalMinutes);
    let totalExamMinutes = (examHour * 60) + examMinutes;
    let totalArrivalMinutes = (arrivalHour) * 60 + arrivalMinutes;
    let late = totalArrivalMinutes > totalExamMinutes;
    let onTime = totalArrivalMinutes == totalExamMinutes || totalArrivalMinutes >= (totalExamMinutes - 30);
    let early = totalArrivalMinutes < (totalExamMinutes - 30);
    let arrivalStatus;

    if (late) {
        arrivalStatus = 'Late';
    } else if (onTime) {
        arrivalStatus = 'On time';
    } else if (early) {
        arrivalStatus = 'Early';
    }
      console.log(arrivalStatus);
    
    if (totalArrivalMinutes != totalExamMinutes) {
        if (totalExamMinutes > totalArrivalMinutes && (totalExamMinutes - totalArrivalMinutes) < 60) {
            console.log(`${totalExamMinutes - totalArrivalMinutes} minutes before the start`);
        } else if (totalExamMinutes > totalArrivalMinutes && (totalExamMinutes - totalArrivalMinutes) >= 60) {
            let hoursLeft = Math.floor((totalExamMinutes - totalArrivalMinutes) / 60);
            let minutesLeft = (totalExamMinutes - totalArrivalMinutes) % 60;
            if (minutesLeft < 10) {
                minutesLeft = "0" + minutesLeft;
            }
            console.log(`${hoursLeft}:${minutesLeft} hours before the start`);
        } else if (totalExamMinutes < totalArrivalMinutes && (totalArrivalMinutes - totalExamMinutes) < 60) {
            console.log(`${totalArrivalMinutes - totalExamMinutes} minutes after the start`);
        } else if (totalExamMinutes < totalArrivalMinutes && (totalArrivalMinutes - totalExamMinutes) >= 60) {
            let hoursPast = Math.floor((totalArrivalMinutes - totalExamMinutes) / 60);
            let minutesPast = (totalArrivalMinutes - totalExamMinutes) % 60;
            if (minutesPast < 10) {
                minutesPast = "0" + minutesPast;
            }
            console.log(`${hoursPast}:${minutesPast} hours after the start`);
        } 
    }
}
onTimeForTheExam("9", "30", "9", "50"); //Late
onTimeForTheExam("9", "00", "10", "30"); //Late
onTimeForTheExam("10", "00", "10", "00"); // On time
onTimeForTheExam("9", "00", "8", "30"); // On time
onTimeForTheExam("14", "00", "13", "55"); // On time
onTimeForTheExam("9", "10", "8", "50"); // On time
onTimeForTheExam("11", "30", "10", "55"); // Early
onTimeForTheExam("16", "00", "15", "00"); // Early
onTimeForTheExam("11", "30", "8", "12"); // Early
onTimeForTheExam("11", "30", "12", "29"); // Late
onTimeForTheExam("11", "40", "11", "05"); // Early


// function onTimeForTheExam(examHour, examMinutes, arrivalHour, arrivalMinutes) {
//     examHour = Number(examHour);
//     examMinutes = Number(examMinutes);
//     arrivalHour = Number(arrivalHour);
//     arrivalMinutes = Number(arrivalMinutes);
//     let late = (examHour == arrivalHour && examMinutes < arrivalMinutes) || examHour < arrivalHour;
//     let onTime = (examHour == arrivalHour && examMinutes == arrivalMinutes) || (examHour == arrivalHour && examMinutes > arrivalMinutes && arrivalMinutes >= (examMinutes - 30)) || (examHour == (arrivalHour + 1) && ((60 - arrivalMinutes) + (60 - examMinutes)) <= 30 );
//     let early = (arrivalHour < (examHour - 1)) || (examHour == arrivalHour && examMinutes > arrivalMinutes && arrivalMinutes < (examMinutes - 30)) || (examHour == (arrivalHour + 1) && ((60 - arrivalMinutes) + (60 - examMinutes)) > 30 );
//     let arrivalStatus;

//     if (late) {
//         arrivalStatus = 'Late';
//     } else if (onTime) {
//         arrivalStatus = 'On time';
//     } else if (early) {
//         arrivalStatus = 'Early';
//     }
  
//     console.log(arrivalStatus);
// }
// function timePlus15Mins(hour, minutes) {
//     let newHour = 0;
//     let newMinutes = 0;
//     if ((Number(minutes) + 15) < 60) {
//     newHour = Number(hour);
//     newMinutes = Number(minutes) + 15;
//     } else {
//     newHour = Number(hour) + 1;
//     newMinutes = (Number(minutes) + 15) % 60;
//     }

//     if (newHour >= 24) {
//         newHour = 0
//     }
    
//     if (newMinutes < 10) {
//         console.log(`${newHour}:0${newMinutes}`);
//     } else {
//         console.log(`${newHour}:${newMinutes}`);
//     }
// }