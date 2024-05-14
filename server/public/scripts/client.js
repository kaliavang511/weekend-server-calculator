function getHistory ()  {
    axios({
        method: "GET",
        url: "/getHistory"        
    })
    .then((response) => {
        let history = response.data
        renderHistory(history)
    })
    .catch((error) => {
        alert("GET /getHistory didn't work")
    })
}

getHistory()