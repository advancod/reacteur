"use strict";

var list = [{
  name: "First Expense",
  user: "Etienne",
  amount: 20.02
}, {
  name: "Second Expense",
  user: "Superman",
  amount: 79.76
}, {
  name: "Third Expense",
  user: "Etienne",
  amount: 10.89
}, {
  name: "Fourth Expense",
  user: "Superman",
  amount: 68.65
}, {
  name: "Fifth Expense",
  user: "Superman",
  amount: 95.45
}];

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
  }, list.map(function (item) {
    return React.createElement(Expense, {
      amount: item.amount,
      name: item.name,
      user: item.user
    });
  }))), React.createElement(NewExpense, null)));
}

var Expense = function Expense(_ref) {
  var name = _ref.name,
      user = _ref.user,
      amount = _ref.amount;
  return React.createElement("div", {
    className: "expense"
  }, React.createElement("div", {
    className: "expense--info"
  }, React.createElement("p", {
    className: "expense--description"
  }, name), React.createElement("div", {
    className: "expense--user"
  }, React.createElement("div", {
    className: "expense--user-color",
    style: {
      background: 'hsl(270, 70%, 47%)'
    }
  }), React.createElement("p", {
    className: "expense--user-text"
  }, user))), React.createElement("div", {
    className: "amount expense--amount "
  }, React.createElement("span", {
    className: "amount--big-num"
  }, Math.floor(amount)), React.createElement("span", {
    className: "amount--small-num"
  }, ",", Math.floor((amount - Math.floor(amount)) * 100)), React.createElement("span", {
    className: "amount--currency"
  }, "\u20AC")), React.createElement("button", {
    className: "button button--flat expense--delete button--danger",
    type: "button"
  }, "Delete"));
};

var NewExpense = function NewExpense() {
  return React.createElement("form", null, React.createElement("div", {
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
  }, "Select an user"), list.map(function (item) {
    return React.createElement("option", {
      value: item.name
    }, item.user);
  })))), React.createElement("div", {
    className: "button-container",
    style: {
      justifyContent: 'flex-end'
    }
  }, React.createElement("button", {
    className: "button   ",
    type: "submit"
  }, "Add Expense")));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));