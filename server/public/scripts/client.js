let currentOperator

function operator(event, operator){
    event.preventDefault()

    currentOperator = operator
    console.log('operator',currentOperator)
    
}

function addCal(event){
    event.preventDefault()
  
    let numOne = document.getElementById('numOne')
    let numTwo =  document.getElementById('numTwo')

    let newCal ={
        numOne:(numOne.value),
        numTwo:(numTwo.value),
        operator: currentOperator

    }
console.log('new calculation', newCal)
axios({
    method: 'POST',
    url: '/calculations',
    data: newCal
  }).then(function(response) {
    numOne.value = '';
    numTwo.value = ''
getCal()
  })
}




function getCal(){
    axios({
        method: 'GET', 
        url: '/calculations'
    })
        .then((response) => { 
            let calList = response.data
 

            renderCal(calList)
        })
        .catch((error) => { 
            alert("Sorry, that didnt work.")
        })

}

getCal()


function renderCal(calList){

    let outputList = document.getElementById('resultHistory')
    outputList.innerHTML = " "
    for (let list of calList) {
        console.log(list)
        outputList.innerHTML += `
        <ul>
        <li>
       
        ${list.numOne} ${list.operator}  ${list.numTwo} = ${list.result}
        </li>
        </ul>
           `

}

let recentResult = document.getElementById('recentResult')
if (calList.length > 0){
let lastResult = calList[calList.length-1]
console.log('last result is', lastResult)

    recentResult.innerHTML = `
    <div>
    ${lastResult.result}

    </div>
    `
}
}


