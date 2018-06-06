import {deposit, withdraw, transfer} from './Bank.js'

describe('Bank case Deposit', () => {
  it('throws when product is not an object', () => {
  	expect( () => deposit(null) ).toThrow();
  });
  it('throws account when not contain {name, balance}', () => {
    expect( () => deposit({ name: 'kalle'}, amount) ).toThrow();
    expect( () => deposit({ balance: 1337 }, amount) ).toThrow();
  });
  it('deposit case', () =>{
    let kalle = { name: 'Kalle', balance: 150 };
    deposit(kalle,110);
    expect(kalle.balance).toBe(260);
  });
})

describe('Bank case withdraw', () => {
  it('throws when product is not an object', () => {
  	expect( () => withdraw(null) ).toThrow();
  });
  it('throws account when not contain {name, balance}', () => {
    expect( () => withdraw({ name: 'kalle'}, amount) ).toThrow();
    expect( () => withdraw({ balance: 7777 }, amount) ).toThrow();
  });
  it('withdraw case', () =>{
    let kalle = { name: 'Kalle', balance: 150 };
    withdraw(kalle,140);
    expect(kalle.balance).toBe(10);
  });
})

describe('Bank case transfer', () => {
  it('transfer case send and receive amount', () => {
    let bella = { name: 'Bella', balance: 1200 };
    let kalle = { name: 'Kalle', balance: 150 };
    transfer(kalle, bella, 100);
    expect(bella.balance).toBe(1300);
  });
})
