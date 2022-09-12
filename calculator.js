const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});


app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var operationType = req.body.operation;
  var result = 0;

  if (operationType === "+") {
    result = String(num1 + num2);
  } else if (operationType === "-") {
    result = String(num1 - num2);
  } else if (operationType === "*") {
    result = String(num1 * num2);
  } else if (operationType === "/") {
    result = String((num1 / num2).toFixed(2));
  } else {
    result = "Your operation is not planned for, sorry!";
  }
  res.send(result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmicalculator", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = (weight / Math.pow(height, 2)).toFixed(2);
  var interpretation = " ";
  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  res.send(interpretation);

});
app.listen(3000, function() {
  console.log("Server is running on port 3000")
});
