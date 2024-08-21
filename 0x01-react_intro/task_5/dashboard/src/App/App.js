import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFullYear } from "./utils";
import { getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          {/* Email */}
          <div className="login-form">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" />
          </div>

          {/* Password Input */}
          <div className="login-form">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" />
          </div>
          {/* OK Button */}
          <button>OK</button>
        </form>
      </div>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
