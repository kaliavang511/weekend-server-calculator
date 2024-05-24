const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

const cal = [];

app.get('/cal', (req, res) => {
  res.send(cal)
})


app.post('/cal', (req, res) => {
let history = (req.body)
console.log('history is',history)


 history.num1 = parseInt(history.num1)
 history.num2 = parseInt(history.num2)

let result = calculate(history)

history.result = result

cal.push(history);

console.log('history is',history)



  res.sendStatus(201);
});

function calculate(calc){
  console.log('incoming data is', calc)
  
  let num1 = calc.num1
  let num2 = calc.num2
  let operator = calc.currentOperator

  if (operator === "+"){
   return num1 + num2
  } else if (operator === "-"){
    return num1 - num2
  } else if( operator === '*'){
   return num1 * num2
  } else if (operator === '/'){
   return num1 / num2 
  }else {
    return 'Inavlid operator'
  }
 

}




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
