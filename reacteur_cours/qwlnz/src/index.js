var body = document.body;

// Some helper
function createElement(type, content) {
  var elem = document.createElement(type);
  elem.innerText = content !== undefined ? content : null;
  return elem;
}

// State
var counters = [0, 0, 0];

// Render
function render() {
  // Clean body
  body.innerHTML = "";

  // Add counter button
  var addCounterButton = createElement("button", "Add counter");
  addCounterButton.addEventListener("click", function() {
    counters.push(0);
    render();
  });
  body.appendChild(addCounterButton);
  // Break line for readability
  body.appendChild(createElement("br"));
  for (var i = 0; i < counters.length; i++) {
    (function(index) {
      var value = counters[index];
      var counterValue = createElement("span", value);
      body.appendChild(counterValue);
      // Decrease button
      var decreaseCounter = createElement("button", "-");
      decreaseCounter.addEventListener("click", function() {
        counters[index] = counters[index] - 1;
        render();
      });
      if (value > 0) {
        body.appendChild(decreaseCounter);
      }
      // Increase button
      var increaseCounter = createElement("button", "+");
      increaseCounter.addEventListener("click", function() {
        counters[index] = counters[index] + 1;
        render();
      });
      if (value < 9) {
        body.appendChild(increaseCounter);
      }

      // Break line for readability
      body.appendChild(createElement("br"));
    })(i);
  }
}

render();
