// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  // write your code here
  let num = promnpt('What number do you want the Fibonacci Sequence up to')
  let first = 0
  let second = 1 
  let fibNum = 0
  let square = ''
  let left = 0
  while (fibNum < num){
    fibNum = first + second
    first = fibNum
    squence = (squence + fibNum + ',')
  }
  left = fibNum - num
  alert ('0,1' + squence)
}
