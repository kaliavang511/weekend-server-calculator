
function handleSubmit(event){
    event.preventDefault()


    
    let firstNum = parseInt(document.getElementById('firstNumInput').value)
    let secNum = parseInt(document.getElementById('secNumInput').value)
    
    let addButton = document.getElementById('equals')
    addButton = firstNum + secNum
    
    console.log(addButton)





let adding = document.getElementById('history')
adding.innerHTML +=`
<span> ${firstNum} + ${secNum} = ${addButton} </span>
`

let subtrackButton = document.getElementById('subtrack')
subtrackButton = parseInt(firstNum )- parseInt(secNum)
let subtracking = document.getElementById('history')
subtracking.innerHTML +=`
<span> ${firstNum} - ${secNum} = ${subtrackButton} </span>
`




let multiplyButton = document.getElementById('multiply')
multiplyButton = parseInt(firstNum )* parseInt(secNum)
let mutiplying = document.getElementById('history')
mutiplying.innerHTML +=`
<span> ${firstNum} * ${secNum} = ${multiplyButton} </span>
`



let divideButton = document.getElementById('divide')
divideButton = parseInt(firstNum )/ parseInt(secNum)
let dividing = document.getElementById('history')
dividing.innerHTML +=`
<span> ${firstNum} / ${secNum} = ${divideButton} </span>
`







}
