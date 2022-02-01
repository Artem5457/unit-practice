function getPlan(currentProduction, numberOfMonths, percent) {
  const goals = [];
  let production = currentProduction;

  for (let i = 0; i < numberOfMonths; i++) {
    production *= (1 + percent / 100)
    goals.push(production);
  }

  return goals;
}

module.exports = { getPlan };
