import React from "react";
import ReactDOM from "react-dom";
import UsersList from './components/users-list'
import "./styles.css";

function App() {
  return (
    <div className="App">
      <UsersList/>
    </div>
  );
}
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
