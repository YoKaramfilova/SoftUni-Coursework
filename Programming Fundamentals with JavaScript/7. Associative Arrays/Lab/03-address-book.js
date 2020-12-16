function solve(arr) {
    let addressBook = {};
    arr.forEach(element => {
        let [name, address] = element.split(':');
        addressBook[name] = address;
    })
   
  Object.entries(addressBook)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .forEach(entry => {
      console.log(`${entry[0]} -> ${entry[1]}`);
  })

}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);