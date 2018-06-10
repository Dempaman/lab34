import {canGetLicense} from './License.js'

describe('Will you get license', ()=>{
  it('#1 will get license', ()=>{
    expect(canGetLicense('A', 24)).toBe(true)
  })
  it('#2 will not get license', ()=>{
    expect(canGetLicense('A', 23)).toBe(false)
  })
  it('#3 will not get license', ()=>{
    expect(canGetLicense('A', 23)).toBe(false)
  })
  it('#4 will not get license', ()=>{
    expect(canGetLicense('A', 121)).toBe(false)
  })
});
