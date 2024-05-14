const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));


let calcHistory = []



app.get('/getHistory', (req, res) => {
  res.send(calcHistory)
})


app.post('/postHistory', (req, res) => {
  let newHistory = req.body

  newHistory.num1 = Number(newHistory.num1)
  newHistory.num2 = Number(newHistory.num2)
  console.log("touchdown /postHistory, incoming history:", newHistory)


  let result = calcResult(newHistory)

  

  newHistory.result = result


  calcHistory.push(newHistory)

  res.sendStatus(200)
})

let calcResult = (toCalculate) => {



  let num1 = toCalculate.num1
  let num2 = toCalculate.num2


  switch (toCalculate.operator) {
    case "+":
      return num1 + num2
    case "-":
      return num1 - num2
    case "*":
      return num1 * num2
    case "/":
      return num1 / num2
    default:
      return NaN
  }

}

// Here's a wonderful place to make some routes:

// GET /calculations

// POST /calculations


// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
