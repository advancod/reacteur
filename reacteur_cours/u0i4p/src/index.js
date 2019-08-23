// State
var counters = [0, 0, 0];

// Render
function render() {
  var elems = [];

  var addCounterButton = React.createElement(
    "button",
    {
      onClick: function() {
        counters.push(0);
        renderWithReact();
      }
    },
    "Add counter"
  );
  elems.push(addCounterButton);
  elems.push(React.createElement("br"));

  for (var i = 0; i < counters.length; i++) {
    (function(index) {
      // Counter value
      var counterValue = React.createElement("span", null, counters[index]);
      elems.push(counterValue);
      // Decrease button
      var dencreaseCounter = React.createElement(
        "button",
        {
          onClick: function() {
            counters[index] = counters[index] - 1;
            renderWithReact();
          }
        },
        "-"
      );
      if (counters[index] > 0) {
        // push decrease only of counter is > 0
        elems.push(dencreaseCounter);
      }
      // Increase button
      var increaseCounter = React.createElement(
        "button",
        {
          onClick: function() {
            counters[index] = counters[index] + 1;
            renderWithReact();
          }
        },
        "+"
      );
      if (counters[index] < 10) {
        // Append + only of counter is < 10
        elems.push(increaseCounter);
      }
      // Break line for readability
      elems.push(React.createElement("br"));
    })(i);
  }

  return elems;
}

function renderWithReact() {
  ReactDOM.render(render(), document.getElementById("app"));
}

renderWithReact();
