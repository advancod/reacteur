"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var _ref$isDanger = _ref.isDanger,
      isDanger = _ref$isDanger === void 0 ? false : _ref$isDanger,
      _ref$isFlat = _ref.isFlat,
      isFlat = _ref$isFlat === void 0 ? false : _ref$isFlat,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      buttonProps = _objectWithoutProperties(_ref, ["isDanger", "isFlat", "children", "className"]);

  className += " button";

  if (isDanger) {
    className += " button--danger";
  }

  if (isFlat) {
    className += " button--flat";
  }

  return React.createElement("button", _extends({}, buttonProps, {
    className: className
  }), children);
};

var Expense = function Expense(_ref2) {
  var name = _ref2.name,
      userColor = _ref2.userColor,
      userName = _ref2.userName,
      amount = _ref2.amount;
  var intergerPart = Math.floor(amount);
  var decimalPart = Math.floor((amount - Math.floor(amount)) * 100);
  var decimalPadded = decimalPart < 10 ? "0" + decimalPart : decimalPart;
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
      background: userColor
    }
  }), React.createElement("p", {
    className: "expense--user-text"
  }, userName))), React.createElement("div", {
    className: "amount expense--amount "
  }, React.createElement("span", {
    className: "amount--big-num"
  }, intergerPart), React.createElement("span", {
    className: "amount--small-num"
  }, ",", decimalPadded), React.createElement("span", {
    className: "amount--currency"
  }, "\u20AC")), React.createElement(Button, {
    isDanger: true,
    isFlat: true,
    className: "expense--delete",
    type: "button"
  }, "Delete"));
};

var Card = function Card(_ref3) {
  var title = _ref3.title,
      children = _ref3.children;
  return React.createElement("div", {
    className: "card"
  }, React.createElement("h2", {
    className: "card--title"
  }, title), children);
};

var NewExpenseFrom = function NewExpenseFrom(_ref4) {
  var users = _ref4.users;
  return React.createElement("form", null, React.createElement(Card, {
    title: "New Expense"
  }, React.createElement("div", {
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
  }, "Select an user"), users.map(function (user) {
    return React.createElement("option", {
      key: user.id,
      value: user.id
    }, user.name);
  })))), React.createElement("div", {
    className: "button-container",
    style: {
      justifyContent: "flex-end"
    }
  }, React.createElement(Button, {
    type: "submit",
    onClick: function onClick() {
      console.log("button clicked");
    }
  }, "Add Expense")));
};

function App() {
  var data = {
    users: [{
      id: "user1",
      name: "Etienne",
      color: "hsl(350, 70%, 47%)"
    }, {
      id: "user2",
      name: "Superman",
      color: "hsl(202, 70%, 47%)"
    }, {
      id: "user3",
      name: "Farid",
      color: "hsl(130, 70%, 47%)"
    }],
    expenses: [{
      name: "First Expense",
      userId: "user1",
      amount: 20.6
    }, {
      name: "Second Expense",
      userId: "user2",
      amount: 79.11
    }, {
      name: "Third Expense",
      userId: "user1",
      amount: 10.13
    }]
  };
  return React.createElement("div", {
    className: "panels"
  }, React.createElement("div", {
    className: "panel"
  }, React.createElement(Card, {
    title: "Expenses"
  }, React.createElement("div", {
    className: "list"
  }, data.expenses.map(function (_ref5, index) {
    var amount = _ref5.amount,
        name = _ref5.name,
        userId = _ref5.userId;
    var user = data.users.find(function (user) {
      return user.id === userId;
    });
    return React.createElement(Expense, {
      key: index,
      name: name,
      userName: user.name,
      userColor: user.color,
      amount: amount
    });
  }))), React.createElement(NewExpenseFrom, {
    users: data.users
  })));
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));