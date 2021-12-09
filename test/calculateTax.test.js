const expect = require('chai').expect;
const calculateTax = require('../calculateTax.js');


describe('Tax Calculation Tests', ()=> {

  const testFunc = (grossIncome) => {
    return calculateTax.calculateTax(grossIncome);
  };

  it('Gross income below 0.', () => {
    expect(testFunc(-500)).to.equal("We don't tax that amount.");
  })

  it('Gross income between 0 and 195850.', () => {
    expect(testFunc(1200)).to.equal(216);
  })

  it('Gross income between 195851 and 305850 .', () => {
    expect(testFunc(196000)).to.equal(86213);
  })

  it('Gross income between 305851 and 423300 .', () => {
    expect(testFunc(306000)).to.equal(158713);
  })

  it('Gross income between 423301 and 555600 .', () => {
    expect(testFunc(424000)).to.equal(252903);
  })

  it('Gross income between 555601 and 708310 .', () => {
    expect(testFunc(556000)).to.equal(364731);
  })

  it('Gross income between 708311 and 1500000 .', () => {
    expect(testFunc(709000)).to.equal(498138);
  })

  it('Gross income above 1,500,000.', () => {
    expect(testFunc(1600000)).to.equal(1252041);
  })
})