function addCal(event){
    event.preventDefault()
  
    let num1 = document.getElementById('num1')
    let num2 =  document.getElementById('num2')

    let newCal ={
        num1: num1.value,
        num2: num2.value
    }

console.log('new cal', newCal)
axios({
    method: 'POST',
    url: '/cal',
    data: newCal
  }).then(function(response) {



    num1.value = '';
    num2.value = ''
getCal()
  })
}




function getCal(){
    axios({
        method: 'GET', 
        url: '/cal'
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
    outputList.innerHTML = ""
    for (let list of calList) {
        outputList.innerHTML += `
        <div>
        <p>
        ${list.num1}    ${list.num2}
        </p>
      
     
        
        </div>
        `


}
}