function scholarship(income, score, minimalSalary) {
    let social = 0;
    let success = 0;
    income = Number(income)
    score = Number(score)
    minimalSalary = Number(minimalSalary)
    if (income < minimalSalary && score > 4.5) {
      social = 0.35 * minimalSalary;
    }
    if (score >= 5.5) {
      success = score * 25;
    } 
    if (social == 0 && success == 0) {
      console.log("You cannot get a scholarship!")
    } else if (social > success) {
      console.log(`You get a Social scholarship ${Math.floor(social)} BGN`)
    } else {
      console.log(`You get a scholarship for excellent results ${Math.floor(success)} BGN`)
    }
  }
  scholarship("300.00", "5.65", "450.00");