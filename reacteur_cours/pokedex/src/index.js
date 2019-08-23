import React from "react";
import ReactDOM from "react-dom";
import ky from "ky";

import "./styles.css";

const wait = time => new Promise(resolve => window.setTimeout(resolve, time));

const useFetch = url => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await ky(url);
      await wait(1000);
      const responseData = await response.json();
      setData(responseData.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, [url]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    error,
    data,
    fetchData
  };
};

function App() {
  const [mode, setMode] = React.useState("pokemon");

  const url =
    mode === "pokemon"
      ? "https://pokeapi.co/api/v2/pokemon"
      : "https://pokeapi.co/api/v2/location";

  const { error, fetchData, data, loading } = useFetch(url);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <button
        onClick={() => {
          setMode(mode === "pokemon" ? "location" : "pokemon");
        }}
      >
        {mode === "pokemon" ? "location" : "pokemon"}
      </button>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Refresh
      </button>
      {error && <p>{error.toString()}</p>}
      {loading && <p>Loading</p>}
      {data &&
        data.map(poke => (
          <div key={poke.url}>
            <a href={poke.url}>{poke.name}</a>
          </div>
        ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
