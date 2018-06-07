import {toFahrenheit} from './Temperatur.js'

describe('converte to fahrenheit', ()=>{
  it('#1 renders celsius to fahrenheit', ()=>{
    expect(toFahrenheit(0)).toBe(32)
  });
  it('#2 convert string to number', ()=>{
    expect(toFahrenheit('32')).toBe(89.6)
  });
})
