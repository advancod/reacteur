import React from 'react';
import Card from './Card';
import { TextField } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';
import produce from "immer"

const baseUsers = [
	{
		name: "Learn typescript",
		done: true
	},
	{
		todo: "Try immer",
		done: false
	}
]

const nextUsers= produce(baseUsers, draftUsers => {
	draftUsers.push({todo: "Tweet about it"})
	draftUsers[1].done = true
})

const SetProfile = props => {

  if (props.user === "TOTO") {
    props.setAmount(1000)
    props.setDescription("Des sous pour toto")
  }

  if (props.user === "TATA") {
    props.setAmount(20000)
    props.setDescription("Des sous pour tata")
  }

}

export default function App() {

  const [users, setUsers] = React.useState(["TOTO", "TATA"])
  const [add, setAdd] = React.useState(0)

  const [user, setUser] = React.useState("")
  const [amount, setAmount] = React.useState(0)
  const [inbox, setInbox] = React.useState(0)
  const [description, setDescription] = React.useState("")

  return(

      <div className="container">
        <p>
        <Card>
        <TextField
                    select
                    label="CHOISIR UN USER"
                    fullWidth
                    value={user}
                    onChange={event => {setUser(event.target.value)}}
                  >
                  {users.map(choice => (
                    <MenuItem value={choice} key={choice}>
                      {choice}
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
                            style: { color: 'blue'}
               }}
               />
        <TextField
               disabled
               label="DESCRIPTION"
               value={description}
               fullWidth
               InputProps={{
                         readOnly: true,
                         style: { color: 'blue'}
            }}
            />
        <TextField
               disabled
               label="MONTANT"
               value={amount}
               fullWidth
               InputProps={{
                         readOnly: true,
                         style: { color: 'blue'}
            }}
            />
        <TextField
               disabled
               label="INBOX"
               value={inbox}
               fullWidth
               InputProps={{
                         readOnly: true,
                         style: { color: 'blue'}
            }}
            />
        </Card>
        </p>
        <p>
        <Card>
        <TextField
               label="ADD"
               fullWidth
               value={add}
               type="number"
               onChange={event => {setAdd(event.target.value)}}

            />
            <button className="btn-primary btn-block" onClick={() => setInbox(parseInt(parseInt(inbox,10) + parseInt(add,10)),10)}>DONNER</button>
       </Card>
        </p>
      </div>

  );

}
