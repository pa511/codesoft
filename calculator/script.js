let display = document.getElementById("display");

function appendNumber(num) {
  if (display.innerText === "0") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  let lastChar = display.innerText.slice(-1);
  if ("+-*/%".includes(lastChar)) return;
  display.innerText += op;
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.length > 1
    ? display.innerText.slice(0, -1)
    : "0";
}

function calculate() {
  try {
    let result = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}
