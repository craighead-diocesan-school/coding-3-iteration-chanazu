// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  let factorNum = prompt('What number do you want the factorial for')
  factorNum = Number (factorNum)
  let factore = 1
  while (factorNum > 0 ){
    factor = factor * factorNum
    factorNum = factorNum -1 
  }
  alert('The factorial is ' + factor)
}
