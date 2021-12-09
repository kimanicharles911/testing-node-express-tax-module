exports.calculateTax = (grossIncome) => {

  const calculate = (acc = 0, percentage) => {
    const decimal = percentage/100;
    const decimalByGrossIncome = decimal * grossIncome;
    return acc + decimalByGrossIncome;
  }

  if(grossIncome >= 0 && grossIncome <= 195850){
    return calculate(undefined, 18);
  }else if(grossIncome > 195850 && grossIncome <= 305850){
    return calculate(35253, 26);
  }else if(grossIncome >305850  && grossIncome <= 423300){
    return calculate(63853, 31);
  }else if(grossIncome > 423300 && grossIncome <= 555600){
    return calculate(100263, 36);
  }else if(grossIncome > 555600 && grossIncome <= 708310){
    return calculate(147891, 39);
  }else if(grossIncome > 708310 && grossIncome <= 1500000){
    return calculate(207448, 41);
  }else if(grossIncome > 1500000){
    return calculate(532041, 45);
  }else{
    return "We don't tax that amount."
  }

};