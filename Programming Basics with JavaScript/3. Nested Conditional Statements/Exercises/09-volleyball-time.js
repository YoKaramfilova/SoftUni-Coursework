function volleyballTime(year, holidays, weekendsHome) {
    holidays = Number(holidays);
    weekendsHome = Number(weekendsHome);
    let weekendsSofia = 48 - weekendsHome;
    let playWeekendsSofia = weekendsSofia * 0.75;
    let playholidays = holidays * (2 / 3);
    let playDays = playWeekendsSofia + playholidays + weekendsHome;

    if (year === 'leap') {
        playDays = playDays * 1.15;
    }

    console.log(Math.floor(playDays));

}
volleyballTime("normal", "3","2")
// 38
volleyballTime("leap", "2", "3")
//43
volleyballTime("normal","11","6")
//44
volleyballTime("leap","0","1")
//41
volleyballTime("normal","6","13")
//43