let currentOperator


let setOperator = (event, op) => {
    event.preventDefault()

    currentOperator = op

}


let getHistory = () => {
    

    axios({
        method: "GET",
        url: "/getHistory"
    })
        .then((response) => {
            console.log("response.data from /getHistory: ", response.data)
            let history = response.data
            renderHistory(history)

        })
        .catch((error) => {
            console.error("There was an error on GET /getHistory", error)

        })
}

getHistory()


let postHistory = (event) => {
    event.preventDefault()
    console.log("New History created...")


    let numOne = document.getElementById("numOne").value
    let numTwo = document.getElementById("numTwo").value

    let newHistory = {
        num1: numOne,
        num2: numTwo,
        operator: currentOperator,
    }
    console.log("New history to send...", newHistory)

    axios({
        method: "POST",
        url: "/postHistory",
        data: newHistory
    })
        .then((response) => {

        
            getHistory()
            clearForm(event)
        })
        .catch((error) => {
            console.error("There was an error on POST /postHistory", error)
            alert("POST /postHistory didn't work Barbie girl...")
        })
}


let renderHistory = (calcHistory) => {

    
    let resultHistory = document.getElementById("resultHistory")
    

    resultHistory.innerHTML = ""

    for (let history of calcHistory) {
        resultHistory.innerHTML += `
            <div>${history.num1} ${history.operator} ${history.num2} = ${history.result}</div>
        `
    }

    let recentResult = document.getElementById("recentResult")
    let lastHistory = calcHistory[calcHistory.length - 1]
    

    if (lastHistory) {
        recentResult.innerHTML = `
        <div>${lastHistory.result}</div>
    `
    }

}

let clearForm = (event) => {
    event.preventDefault()
    document.getElementById("calcForm").reset()
    currentOperator = undefined
}