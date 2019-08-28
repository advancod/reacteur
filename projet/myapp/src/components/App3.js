import React from 'react';
import Card from './Card';
import { TextField } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';

export default function App() {

  const [addInput, setAddInput] = React.useState(0);

  const [data, setData] = React.useState([
    { user: 'TOTO', amount: 1000, completed: 0 },
    { user: 'TATA', amount: 20000, completed: 0 }
  ])

  const [user, setUser] = React.useState(data[0].user);

  const currentUser = data.find(u => u.user === user);
  const amount = currentUser.amount - currentUser.completed;

  // React.useEffect(() => {
  // 	if (amount <= 0) {
  // 		setInbox(0)
  // 		setAmount(0)
  // 	}
  // }, [amount]);

  return (

    <div className="container">
      <p>
        <Card>
          <TextField
            select
            label="CHOISIR UN USER"
            fullWidth
            value={user}
            onChange={event => { setUser(event.target.value) }}
          >
            {data.map(choice => (
              <MenuItem value={choice.user} key={choice.user}>
                {choice.user}
              </MenuItem>
            ))}
          </TextField>
        </Card>
      </p>
      <p>
        <Card>
          <TextField
            disabled
            label="USER"
            value={user}
            fullWidth
            InputProps={{
              readOnly: true,
              style: { color: 'blue' }
            }}
          />
          {/* <TextField
            disabled
            label="DESCRIPTION"
            value={description}
            fullWidth
            InputProps={{
              readOnly: true,
              style: { color: 'blue' }
            }}
          /> */}
          <TextField
            disabled
            label="MONTANT RESTANT"
            value={amount}
            fullWidth
            InputProps={{
              readOnly: true,
              style: { color: 'blue' }
            }}
          />
          <TextField
            disabled
            label="INBOX"
            value={currentUser.completed}
            fullWidth
            InputProps={{
              readOnly: true,
              style: { color: 'blue' }
            }}
          />
        </Card>
      </p>
      <p>
        <Card>
          <TextField
            label="ADD"
            fullWidth
            value={addInput}
            type="number"
            onChange={event => { setAddInput(event.target.value) }}
          />
          <button className="btn-primary btn-block" onClick={() => {
            setData(prevData => {
              return prevData.map(u => {
                if (u.user === user) {
                  return {
                    ...u,
                    completed: u.completed + parseInt(addInput, 10)
                  }
                }
                return u;
              })
            })
            setAddInput('');
          }}>DONNER</button>
        </Card>
      </p>
    </div>

  );

}
