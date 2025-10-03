let numZero = document.getElementById("number0").innerHTML;
let numOne = document.getElementById("number1").innerHTML;
let numTwo = document.getElementById("number2").innerHTML;
let numThree = document.getElementById("number3").innerHTML;
let numFour = document.getElementById("number4").innerHTML;
let numFive = document.getElementById("number5").innerHTML;
let numSix = document.getElementById("number6").innerHTML;
let numSeven = document.getElementById("number7").innerHTML;
let numEight = document.getElementById("number8").innerHTML;
let numNine = document.getElementById("number9").innerHTML;
let dot = document.getElementById("numberDOT");
let equal = document.getElementById("numberEQUAL");
let over100 = document.getElementById("numberOVER100");
let plus = document.getElementById("numberPLS");
let minus = document.getElementById("numberMIN");
let by = document.getElementById("numberBY");
let over = document.getElementById("numberOVER");
let models = document.getElementById("numberMOD");
let dlte = document.getElementById("numberREMOVE");
let dlteAll = document.getElementById("numberAC");
let isCalculated = false;

function writeNumber(num) {
  const inputField = document.getElementById("inptNum");
  inputField.value += num;
}

let x = "*";

function calculateResult() {
  const inputField = document.getElementById("inptNum");
  let expression = inputField.value.trim();

  inputField.value = eval(expression);

}


document.getElementById("number0").addEventListener("click", function() {
  writeNumber(numZero);
});
document.getElementById("number1").addEventListener("click", function() {
  writeNumber(numOne);
});
document.getElementById("number2").addEventListener("click", function() {
  writeNumber(numTwo);
});
document.getElementById("number3").addEventListener("click", function() {
  writeNumber(numThree);
});
document.getElementById("number4").addEventListener("click", function() {
  writeNumber(numFour);
});
document.getElementById("number5").addEventListener("click", function() {
  writeNumber(numFive);
});
document.getElementById("number6").addEventListener("click", function() {
  writeNumber(numSix);
});
document.getElementById("number7").addEventListener("click", function() {
  writeNumber(numSeven);
});
document.getElementById("number8").addEventListener("click", function() {
  writeNumber(numEight);
});
document.getElementById("number9").addEventListener("click", function() {
  writeNumber(numNine);
});
document.getElementById("numberDOT").addEventListener("click", function() {
  writeNumber(dot.innerHTML);
});
document.getElementById("numberPLS").addEventListener("click", function() {
  writeNumber(plus.innerHTML);
});
document.getElementById("numberMIN").addEventListener("click", function() {
  writeNumber(minus.innerHTML);
});
document.getElementById("numberBY").addEventListener("click", function() {
  writeNumber(x);
});
document.getElementById("numberOVER").addEventListener("click", function() {
  writeNumber(over.innerHTML);
});
document.getElementById("numberOVER100").addEventListener("click", function() {
  writeNumber(over100.innerHTML);
});
document.getElementById("numberMOD").addEventListener("click", function() {
  writeNumber(models.innerHTML);
});
document.getElementById("numberEQUAL").addEventListener("click", function(){
  calculateResult();
});

document.getElementById("numberAC").addEventListener("click", function() {
  document.getElementById("inptNum").value = '';
});


document.getElementById("numberREMOVE").addEventListener("click", function() {
  const inputField = document.getElementById("inptNum");
  inputField.value = inputField.value.slice(0, -1);

});
