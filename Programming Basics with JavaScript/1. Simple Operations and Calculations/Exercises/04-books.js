function books(pages, pageRate, days) {
    let readingHours = (Number(pages) / Number(pageRate)) / Number(days);
    console.log(readingHours);
}
books('212', '20', '2');