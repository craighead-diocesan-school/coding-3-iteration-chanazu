// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = 10
 
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}

function make1() {
  let max = prompt( 'Enter the maxium')
  let inc = prompt ('Enter the increment')
  let count = 0
  max = Number(max)
  inc = NUmber(inc)

  while(count <= max){
    alert(count)
    left = max - count
    count = count + inc
  }
    alert('Done with' + left + 'left over.')
  }
}