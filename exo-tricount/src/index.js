function App() {
    return (
      <div className="panels">
        <div className="panel">
          <div className="card">
            <h2 className="card--title">Expenses</h2>
            <div className="list">
              <div className="expense">
                <div className="expense--info">
                  <p className="expense--description">First Expense</p>
                  <div className="expense--user">
                    <div className="expense--user-color" style={{ background: 'hsl(270, 70%, 47%)' }} />
                    <p className="expense--user-text">Etienne</p>
                  </div>
                </div>
                <div className="amount expense--amount ">
                  <span className="amount--big-num">20</span>
                  <span className="amount--small-num">,70</span>
                  <span className="amount--currency">€</span>
                </div>
                <button className="button button--flat expense--delete button--danger" type="button">
                  Delete
                </button>
              </div>
              <div className="expense">
                <div className="expense--info">
                  <p className="expense--description">Second Expense</p>
                  <div className="expense--user">
                    <div className="expense--user-color" style={{ background: 'hsl(202, 70%, 47%)' }} />
                    <p className="expense--user-text">Superman</p>
                  </div>
                </div>
                <div className="amount expense--amount ">
                  <span className="amount--big-num">79</span>
                  <span className="amount--small-num">,11</span>
                  <span className="amount--currency">€</span>
                </div>
                <button className="button button--flat expense--delete button--danger" type="button">
                  Delete
                </button>
              </div>
              <div className="expense">
                <div className="expense--info">
                  <p className="expense--description">Third Expense</p>
                  <div className="expense--user">
                    <div className="expense--user-color" style={{ background: 'hsl(270, 70%, 47%)' }} />
                    <p className="expense--user-text">Etienne</p>
                  </div>
                </div>
                <div className="amount expense--amount ">
                  <span className="amount--big-num">10</span>
                  <span className="amount--small-num">,13</span>
                  <span className="amount--currency">€</span>
                </div>
                <button className="button button--flat expense--delete button--danger" type="button">
                  Delete
                </button>
              </div>
              <div className="expense">
                <div className="expense--info">
                  <p className="expense--description">Fourth Expense</p>
                  <div className="expense--user">
                    <div className="expense--user-color" style={{ background: 'hsl(202, 70%, 47%)' }} />
                    <p className="expense--user-text">Superman</p>
                  </div>
                </div>
                <div className="amount expense--amount ">
                  <span className="amount--big-num">68</span>
                  <span className="amount--small-num">,88</span>
                  <span className="amount--currency">€</span>
                </div>
                <button className="button button--flat expense--delete button--danger" type="button">
                  Delete
                </button>
              </div>
              <div className="expense">
                <div className="expense--info">
                  <p className="expense--description">Fifth Expense</p>
                  <div className="expense--user">
                    <div className="expense--user-color" style={{ background: 'hsl(202, 70%, 47%)' }} />
                    <p className="expense--user-text">Superman</p>
                  </div>
                </div>
                <div className="amount expense--amount ">
                  <span className="amount--big-num">95</span>
                  <span className="amount--small-num">,18</span>
                  <span className="amount--currency">€</span>
                </div>
                <button className="button button--flat expense--delete button--danger" type="button">
                  Delete
                </button>
              </div>
            </div>
          </div>
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
                  <option value="user1">Etienne</option>
                  <option value="user2">Farid</option>
                  <option value="user3">Superman</option>
                </select>
              </div>
            </div>
            <div className="button-container" style={{ justifyContent: 'flex-end' }}>
              <button className="button   " type="submit">
                Add Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('app'));