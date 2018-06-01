import {toFahrenheit} from './Temperatur.js'

describe('converte to fahrenheit', ()=>{
  it('renders celsius to fahrenheit', ()=>{
    expect(toFahrenheit('0')).toBe(32)
  });
})
