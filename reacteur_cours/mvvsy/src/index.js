import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const Home = () => <div>Home</div>;
const Hello = () => <div>Hello</div>;
const Welcome = () => <div>Welcome</div>;
class Router extends React.Component {
  state = {
    location: history.location
  };
  componentDidMount() {
    this.unlistenHistory = history.listen(this.onLocationChange);
  }
  componentWillUnmount() {
    this.unlistenHistory();
  }
  onLocationChange = location => {
    this.setState({ location: location });
  };
  render() {
    return (
      <div>
        <nav>
          <button onClick={() => history.push("/")}>Home</button>
          <button onClick={() => history.push("/hello")}>Hello</button>
          <button onClick={() => history.push("/welcome")}>Welcome</button>
        </nav>
        {this.state.location.pathname === "/" ? <Home /> : null}
        {this.state.location.pathname === "/hello" ? <Hello /> : null}
        {this.state.location.pathname === "/welcome" ? <Welcome /> : null}
      </div>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById("root"));
