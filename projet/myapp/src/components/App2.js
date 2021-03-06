// App.jsx

import React from 'react';
import { Store } from './Store';

export default function App() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <React.Fragment>
      {console.log(state)}
      <div>
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes</p>
      </div>
    </React.Fragment>
  );
}

const fetchDataAction = async () => {
  const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  });
};