function architectureProjects(architect, projects) {
    let architectName = architect;
    let numProjects = Number(projects);
    let numHours = numProjects * 3;
    console.log(`The architect ${architectName} will need ${numHours} hours to complete ${numProjects} project/s.`);
}
architectureProjects('Peter', '20')