import React from "react";
import logo from "logo.svg";
import "App.scss";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <h2>Its Working Lovely</h2>
        </p>
      </header>
    </div>
  );
}

export default App as React.FC;
