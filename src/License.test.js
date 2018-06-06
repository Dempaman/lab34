import {canGetLicense} from './License.js'

describe('Will you get license', ()=>{
  it('will get license', ()=>{
    expect(canGetLicense('A', 24)).toBe(true)
  })
  it('will not get license', ()=>{
    expect(canGetLicense('A', 23)).toBe(false)
  })
});
