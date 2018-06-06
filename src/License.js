function canGetLicense(license, age){
  let info = [
    {license: 'A', age: 24},
    {license: 'B', age: 18},
    {license:'BE', age: 18},
    {license: 'C', age: 21},
    {license: 'D', age: 24}
  ];

  let getInfo = info.find(item => item.license === license)
  if(getInfo.license !== license || (typeof getInfo.age) !== 'number'){
    throw new Error('Wrong value on ' + license + ' or ' + age);
  }
  if(getInfo.age <= age && getInfo.license === license){
    return true
  }else{
    return false
  }
}

export {canGetLicense}
