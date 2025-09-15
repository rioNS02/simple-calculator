const output = document.querySelector(".output");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operand");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const equal = document.querySelector(".equal");
const percent = document.querySelector(".percent");

//event for print button value to input value

let expression = ""; // variable for contain output value

// get all button
numbers.forEach((number) => {
  // add event click
  number.addEventListener("click", () => {
    // change result value with number value
    output.value += number.value;
    expression = output.value;

    // Change text clear button
    clear.innerHTML = "C";
  });
});

// function for operand
// get all operand
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    // check last value expression and operand value is operand
    if (/[+\-*/]$/.test(expression) && /[+\-*/]/.test(operand.value)) {
      expression = expression.slice(0, -1) + operand.value;
      output.value = expression;
    } else {
      expression += operand.value;
      output.value = expression;
    }
  });
});

// equal function
equal.addEventListener("click", () => {
  output.value = eval(expression);
});

// function for percent
percent.addEventListener("click", () => {});

// add clear function
clear.addEventListener("click", () => {
  // clear output
  output.value = "";

  // return text clear button
  clear.innerHTML = "AC";
});

// Deleted function
del.addEventListener("click", () => {
  output.value = output.value.slice(0, -1);
});
