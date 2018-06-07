import {deposit, withdraw, transfer} from './Bank.js'

describe('Bank case Deposit', () => {
  it('throws when product is not an object', () => {
  	expect( () => deposit(null) ).toThrow();
    expect( () => deposit(5) ).toThrow(); // Withdraw with number
    expect( () => deposit("hej") ).toThrow(); //Withdraw with string
  });
  it('throws account when not contain {name, balance}', () => {
    expect( () => deposit({ name: 'kalle'}, amount) ).toThrow();
    expect( () => deposit({ balance: 1337 }, amount) ).toThrow();
  });
  it('deposit case', () =>{
    let kalle = { name: 'Kalle', balance: 150 };
    deposit(kalle,110);
    expect(kalle.balance).toBe(260);
    expect( () => withdraw(kalle, 0)).toThrow(); // withdraw amount = 0
    expect( () => withdraw(annika, 50)).toThrow(); // withdraw non-excisting account
  });
  it('throws if there is not enough money in balance', ()=> {
    let kalle = { name: 'Kalle', balance: 150 };
    expect( () => deposit(kalle, 300)).toThrow(); // withdraw more money than in balance
  });
})

describe('Bank case withdraw', () => {
  it('throws when product is not an object', () => {
  	expect( () => withdraw(null) ).toThrow(); //Withdraw with null
    expect( () => withdraw(5) ).toThrow(); // Withdraw with number
    expect( () => withdraw("hej") ).toThrow(); //Withdraw with string
  });
  it('throws account when not contain {name, balance}', () => {
    expect( () => withdraw({ name: 'kalle'}, amount) ).toThrow();
    expect( () => withdraw({ balance: 7777 }, amount) ).toThrow();
  });
  it('withdraw case', () =>{
    let kalle = { name: 'Kalle', balance: 150 };
    withdraw(kalle, 140);
    expect(kalle.balance).toBe(10); // withdraw money
    expect( () => withdraw(kalle, 0)).toThrow(); // withdraw amount = 0
    expect( () => withdraw(annika, 50)).toThrow(); // withdraw non-excisting account
  });
  it('throws if there is not enough money in balance', ()=> {
    let kalle = { name: 'Kalle', balance: 150 };
    expect( () => withdraw(kalle, 300)).toThrow(); // withdraw more money than in balance
  })
})

describe('Bank case transfer', () => {
  it('transfer case send and receive amount', () => {
    let bella = { name: 'Bella', balance: 1200 };
    let kalle = { name: 'Kalle', balance: 150 };
    transfer(kalle, bella, 100);
    expect(bella.balance).toBe(1300);

    expect( () => transfer(kalle, bella, 5000)).toThrow(); // Send more money than in balance
    expect( () => transfer(kalle, annika, 300)).toThrow(); // Send to non-excisting account
  });
})
