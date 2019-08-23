var body = document.body;

// Some helper
function createElement(type, content) {
  var elem = document.createElement(type);
  elem.innerText = content !== undefined ? content : null;
  return elem;
}

function addCounter() {
  var counterValue = createElement("span", "0");
  body.appendChild(counterValue);

  // Decrease button
  var decreaseButton = createElement("button", "-");
  decreaseButton.addEventListener("click", function() {
    var value = parseInt(counterValue.innerText, 10);
    if (value === 10) {
      body.insertBefore(increaseButton, decreaseButton.nextSibling);
    }
    value -= 1;
    if (value === 0) {
      body.removeChild(decreaseButton);
    }
    counterValue.innerText = value;
  });

  var increaseButton = createElement("button", "+");
  increaseButton.addEventListener("click", function() {
    var value = parseInt(counterValue.innerText, 10);
    if (value === 0) {
      body.insertBefore(decreaseButton, increaseButton);
    }
    value += 1;
    if (value === 10) {
      body.removeChild(increaseButton);
    }
    counterValue.innerText = value;
  });
  body.appendChild(increaseButton);
  body.appendChild(createElement("br"));
}

var addCounterButton = createElement("button", "Add counter");
addCounterButton.addEventListener("click", addCounter);
body.appendChild(addCounterButton);
body.appendChild(createElement("br"));

addCounter();
addCounter();
addCounter();
