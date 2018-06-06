function toFahrenheit(degrees){
  let toFa = (degrees * 9/5) + 32
  if(typeof (Number(degrees)) !== 'number'){
    return NaN
  }else if(degrees < -273.15 || degrees === Infinity || degrees === null || degrees === undefined){
    return NaN
  }else
  return Math.round(toFa * 100) / 100
}

export {toFahrenheit}
