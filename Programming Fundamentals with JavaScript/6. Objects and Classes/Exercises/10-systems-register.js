function solve(arr) {
    let register = {};
    
    arr.forEach(element => {
        let [systemName, componentName, subcomponentName] = element.split(' | ');   

        if (!register.hasOwnProperty(systemName)) {
            register[systemName] = {};
        }

		if (!register[systemName].hasOwnProperty(componentName)) {
            register[systemName][componentName] = [];
        }

		register[systemName][componentName].push(subcomponentName);
    });

    
	let sortedSystems = Object.keys(register).sort((a, b) => {
       return Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b);
    });

    sortedSystems.forEach(system => {
        console.log(system);
		let sortedComponents = Object.keys(register[system]).sort((a, b) => {
            return Object.keys(register[system][b]).length - Object.keys(register[system][a]).length;
        });
		sortedComponents.forEach((component) => {
			console.log(`|||${component}`);
			register[system][component].forEach((subComponent) => {
				console.log(`||||||${subComponent}`);				
			});			
		});
    });
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);