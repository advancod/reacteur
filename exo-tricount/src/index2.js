const list = [{ name: "First Expense", 
                user: "Etienne",
                amount: 20.13},
                { name: "Second Expense", 
                user: "Superman",
                amount: 79.76},
                { name: "Third Expense", 
                user: "Etienne",
                amount: 10.89},
                { name: "Fourth Expense", 
                user: "Superman",
                amount: 68.65},
                { name: "Fifth Expense", 
                user: "Superman",
                amount: 95.45}]


function App() {
    return (
      <div className="panels">
        <div className="panel">
          <div className="card">
            <h2 className="card--title">Expenses</h2>
            <div className="list">
            {list.map((item) =>
            <Expense amount={item.amount} name={item.name} user={item.user} />)}
            </div>
          </div>          
            <NewExpense/>
        </div>
      </div>
    );
  }

  const Expense = ({name, user, amount}) => {
    return (
      <div className="expense">
        <div className="expense--info">
          <p className="expense--description">{ name }</p>
          <div className="expense--user">
            <div className="expense--user-color" style={{ background: 'hsl(270, 70%, 47%)' }} />
            <p className="expense--user-text">{ user }</p>
          </div>
        </div>
        <div className="amount expense--amount ">
         <span className="amount--big-num">{Math.floor(amount)}</span>
         <span className="amount--small-num">,{Math.floor((amount - Math.floor(amount)) * 100)}</span>
          <span className="amount--currency">€</span>
        </div>
        <button className="button button--flat expense--delete button--danger" type="button">
          Delete
        </button>
      </div>
);
  };


  const NewExpense = () => {
    return (

          <form>
            <div className="card">
              <h2 className="card--title">New Expense</h2>
              <div className="input">
                <input type="text" name="description" className="input--input" placeholder="Description" />
              </div>
              <div className="input">
                <input type="text" name="amount" className="input--input" placeholder="Amount" />
              </div>
              <div className="select">
                <label htmlFor="userId" className="select--label">
                  User
                </label>
                <select className="select--select" name="userId">

                  <option value="none">Select an user</option>
                  {list.map((item) =>
                  <option value="user1">{item.user}</option> )}
                </select>
              </div>
            </div>
            <div className="button-container" style={{ justifyContent: 'flex-end' }}>
              <button className="button   " type="submit">
                Add Expense
              </button>
            </div>
          </form>
    );
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  