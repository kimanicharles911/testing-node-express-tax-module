// comments on the end of this file.

exports.calculateTax = (grossIncome) => {

  const calculate = (compulsoryAmount = 0, rate) => {
    const decimalRate = rate/100;
    const rateByGrossIncome = decimalRate * grossIncome;
    return compulsoryAmount + rateByGrossIncome;
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
/* 
 * I first create and export a function with one parameter.
  * I then create a function calculate that will reduce code duplication in the if else condition that has two parameters.
  * I then create an if else condition that takes in different levels of income ranges with their respective rates.
  * Each condition returns the result from the calculate function that has two values. The first compulsory amount and the other the taxation rate.
*/