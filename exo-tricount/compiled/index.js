"use strict";

function App() {
  return React.createElement("div", {
    className: "panels"
  }, React.createElement("div", {
    className: "panel"
  }, React.createElement("div", {
    className: "card"
  }, React.createElement("h2", {
    className: "card--title"
  }, "Expenses"), React.createElement("div", {
    className: "list"
  }, React.createElement("div", {
    className: "expense"
  }, React.createElement("div", {
    className: "expense--info"
  }, React.createElement("p", {
    className: "expense--description"
  }, "First Expense"), React.createElement("div", {
    className: "expense--user"
  }, React.createElement("div", {
    className: "expense--user-color",
    style: {
      background: 'hsl(270, 70%, 47%)'
    }
  }), React.createElement("p", {
    className: "expense--user-text"
  }, "Etienne"))), React.createElement("div", {
    className: "amount expense--amount "
  }, React.createElement("span", {
    className: "amount--big-num"
  }, "20"), React.createElement("span", {
    className: "amount--small-num"
  }, ",70"), React.createElement("span", {
    className: "amount--currency"
  }, "\u20AC")), React.createElement("button", {
    className: "button button--flat expense--delete button--danger",
    type: "button"
  }, "Delete")), React.createElement("div", {
    className: "expense"
  }, React.createElement("div", {
    className: "expense--info"
  }, React.createElement("p", {
    className: "expense--description"
  }, "Second Expense"), React.createElement("div", {
    className: "expense--user"
  }, React.createElement("div", {
    className: "expense--user-color",
    style: {
      background: 'hsl(202, 70%, 47%)'
    }
  }), React.createElement("p", {
    className: "expense--user-text"
  }, "Superman"))), React.createElement("div", {
    className: "amount expense--amount "
  }, React.createElement("span", {
    className: "amount--big-num"
  }, "79"), React.createElement("span", {
    className: "amount--small-num"
  }, ",11"), React.createElement("span", {
    className: "amount--currency"
  }, "\u20AC")), React.createElement("button", {
    className: "button button--flat expense--delete button--danger",
    type: "button"
  }, "Delete")), React.createElement("div", {
    className: "expense"
  }, React.createElement("div", {
    className: "expense--info"
  }, React.createElement("p", {
    className: "expense--description"
  }, "Third Expense"), React.createElement("div", {
    className: "expense--user"
  }, React.createElement("div", {
    className: "expense--user-color",
    style: {
      background: 'hsl(270, 70%, 47%)'
    }
  }), React.createElement("p", {
    className: "expense--user-text"
  }, "Etienne"))), React.createElement("div", {
    className: "amount expense--amount "
  }, React.createElement("span", {
    className: "amount--big-num"
  }, "10"), React.createElement("span", {
    className: "amount--small-num"
  }, ",13"), React.createElement("span", {
    className: "amount--currency"
  }, "\u20AC")), React.createElement("button", {
    className: "button button--flat expense--delete button--danger",
    type: "button"
  }, "Delete")), React.createElement("div", {
    className: "expense"
  }, React.createElement("div", {
    className: "expense--info"
  }, React.createElement("p", {
    className: "expense--description"
  }, "Fourth Expense"), React.createElement("div", {
    className: "expense--user"
  }, React.createElement("div", {
    className: "expense--user-color",
    style: {
      background: 'hsl(202, 70%, 47%)'
    }
  }), React.createElement("p", {
    className: "expense--user-text"
  }, "Superman"))), React.createElement("div", {
    className: "amount expense--amount "
  }, React.createElement("span", {
    className: "amount--big-num"
  }, "68"), React.createElement("span", {
    className: "amount--small-num"
  }, ",88"), React.createElement("span", {
    className: "amount--currency"
  }, "\u20AC")), React.createElement("button", {
    className: "button button--flat expense--delete button--danger",
    type: "button"
  }, "Delete")), React.createElement("div", {
    className: "expense"
  }, React.createElement("div", {
    className: "expense--info"
  }, React.createElement("p", {
    className: "expense--description"
  }, "Fifth Expense"), React.createElement("div", {
    className: "expense--user"
  }, React.createElement("div", {
    className: "expense--user-color",
    style: {
      background: 'hsl(202, 70%, 47%)'
    }
  }), React.createElement("p", {
    className: "expense--user-text"
  }, "Superman"))), React.createElement("div", {
    className: "amount expense--amount "
  }, React.createElement("span", {
    className: "amount--big-num"
  }, "95"), React.createElement("span", {
    className: "amount--small-num"
  }, ",18"), React.createElement("span", {
    className: "amount--currency"
  }, "\u20AC")), React.createElement("button", {
    className: "button button--flat expense--delete button--danger",
    type: "button"
  }, "Delete")))), React.createElement("form", null, React.createElement("div", {
    className: "card"
  }, React.createElement("h2", {
    className: "card--title"
  }, "New Expense"), React.createElement("div", {
    className: "input"
  }, React.createElement("input", {
    type: "text",
    name: "description",
    className: "input--input",
    placeholder: "Description"
  })), React.createElement("div", {
    className: "input"
  }, React.createElement("input", {
    type: "text",
    name: "amount",
    className: "input--input",
    placeholder: "Amount"
  })), React.createElement("div", {
    className: "select"
  }, React.createElement("label", {
    htmlFor: "userId",
    className: "select--label"
  }, "User"), React.createElement("select", {
    className: "select--select",
    name: "userId"
  }, React.createElement("option", {
    value: "none"
  }, "Select an user"), React.createElement("option", {
    value: "user1"
  }, "Etienne"), React.createElement("option", {
    value: "user2"
  }, "Farid"), React.createElement("option", {
    value: "user3"
  }, "Superman")))), React.createElement("div", {
    className: "button-container",
    style: {
      justifyContent: 'flex-end'
    }
  }, React.createElement("button", {
    className: "button   ",
    type: "submit"
  }, "Add Expense")))));
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));