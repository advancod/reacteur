const Button = ({
    isDanger = false,
    isFlat = false,
    children,
    className = "",
    ...buttonProps
  }) => {
    className += " button";
    if (isDanger) {
      className += " button--danger";
    }
    if (isFlat) {
      className += " button--flat";
    }
  
    return (
      <button {...buttonProps} className={className}>
        {children}
      </button>
    );
  };
  
  const Expense = ({ name, userColor, userName, amount }) => {
    const intergerPart = Math.floor(amount);
    const decimalPart = Math.floor((amount - Math.floor(amount)) * 100);
    const decimalPadded = decimalPart < 10 ? "0" + decimalPart : decimalPart;
  
    return (
      <div className="expense">
        <div className="expense--info">
          <p className="expense--description">{name}</p>
          <div className="expense--user">
            <div
              className="expense--user-color"
              style={{ background: userColor }}
            />
            <p className="expense--user-text">{userName}</p>
          </div>
        </div>
        <div className="amount expense--amount ">
          <span className="amount--big-num">{intergerPart}</span>
          <span className="amount--small-num">,{decimalPadded}</span>
          <span className="amount--currency">€</span>
        </div>
        <Button
          isDanger={true}
          isFlat={true}
          className="expense--delete"
          type="button"
        >
          Delete
        </Button>
      </div>
    );
  };
  
  const Card = ({ title, children }) => {
    return (
      <div className="card">
        <h2 className="card--title">{title}</h2>
        {children}
      </div>
    );
  };
  
  const NewExpenseFrom = ({ users }) => {
    return (
      <form>
        <Card title="New Expense">
          <div className="input">
            <input
              type="text"
              name="description"
              className="input--input"
              placeholder="Description"
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="amount"
              className="input--input"
              placeholder="Amount"
            />
          </div>
          <div className="select">
            <label htmlFor="userId" className="select--label">
              User
            </label>
            <select className="select--select" name="userId">
              <option value="none">Select an user</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </Card>
        <div className="button-container" style={{ justifyContent: "flex-end" }}>
          <Button
            type="submit"
            onClick={() => {
              console.log("button clicked");
            }}
          >
            Add Expense
          </Button>
        </div>
      </form>
    );
  };
  
  function App() {
    const data = {
      users: [
        { id: "user1", name: "Etienne", color: "hsl(350, 70%, 47%)" },
        { id: "user2", name: "Superman", color: "hsl(202, 70%, 47%)" },
        { id: "user3", name: "Farid", color: "hsl(130, 70%, 47%)" }
      ],
      expenses: [
        { name: "First Expense", userId: "user1", amount: 20.6 },
        { name: "Second Expense", userId: "user2", amount: 79.11 },
        { name: "Third Expense", userId: "user1", amount: 10.13 }
      ]
    };
  
    return (
      <div className="panels">
        <div className="panel">
          <Card title="Expenses">
            <div className="list">
              {data.expenses.map(({ amount, name, userId }, index) => {
                const user = data.users.find(user => user.id === userId);
                return (
                  <Expense
                    key={index}
                    name={name}
                    userName={user.name}
                    userColor={user.color}
                    amount={amount}
                  />
                );
              })}
            </div>
          </Card>
          <NewExpenseFrom users={data.users} />
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  