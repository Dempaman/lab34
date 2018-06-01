function toFahrenheit(degrees){
  let toFa = (degrees * 9/5) + 32
  if(typeof (Number(degrees)) !== 'number'){
    throw new Error(degrees +' is not a number');
  }else if(degrees < -273.15 || degrees === Infinity){
    throw new Error(degrees +' is non existent celsius temperature');
  }else if(degrees === null || !degrees){
    throw new Error(degrees + ' is not an correct value')
  }
  return Math.round(toFa * 100) / 100
}

export {toFahrenheit}
