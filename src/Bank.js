let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };


//deposit
function deposit(account, amount) {
  if( (typeof account) !== 'object' || !account){
    throw new Error('Wrong account or amount')
  }
  if((typeof amount) !== 'number'){
    throw new Error('To low amount or wrong type of number')
  }
  if(amount < 1){
    throw new Error('no amount to deposit')
  }
  else if(!account.name){
    throw new Error('Missing name in object')
  }
  else if(!account.balance){
    throw new Error('Missing balance in object')
  }else{
    account.balance += amount
  }
}
//withdraw
function withdraw(account, amount) {
  if( (typeof account) !== 'object' || !account){
    throw new Error('Wrong account or amount')
  }
  if((typeof amount) !== 'number'){
    throw new Error('To low amount or wrong type of number')
  }
  if(amount < 1){
    throw new Error('no amount to withdraw')
  }
  else if(account.balance < amount){
    throw new Error('account balance is to low')
  }
  else if(!account.name){
    throw new Error('Missing name in object')
  }
  else if(!account.balance){
    throw new Error('Missing balance in object')
  }else{
    account.balance -= amount
  }
}
//transfer
function transfer(accountSender, accountReceiver, amount) {
    withdraw(accountSender, amount)
    deposit(accountReceiver, amount)
}

export {deposit, withdraw, transfer}
