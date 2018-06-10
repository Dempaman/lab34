import {toFahrenheit} from './Temperatur.js'

describe('converte to fahrenheit', ()=>{
  it('#1 renders celsius to fahrenheit', ()=>{
    expect(toFahrenheit(0)).toBe(32)
  });
  it('#2 convert string to number', ()=>{
    expect(toFahrenheit('32')).toBe(89.6)
  });
  it('#3 temp is to does not excist', ()=>{
    expect(toFahrenheit(-273.16)).toBeNaN()
  });
  it('#4 undefined is NaN', ()=>{
    expect(toFahrenheit(undefined)).toBeNaN()
  });
  it('#5 null is NaN', ()=>{
    expect(toFahrenheit(null)).toBeNaN()
  });
  it('#5 Infinity is NaN', ()=>{
    expect(toFahrenheit(Infinity)).toBeNaN()
  });
  it('#6 String is NaN', ()=>{
    expect(toFahrenheit("Steffe")).toBeNaN()
  });
  it('#5 Absolute ZERO', ()=>{
    expect(toFahrenheit(-273.15)).toBe(-459.67)
  });

})
