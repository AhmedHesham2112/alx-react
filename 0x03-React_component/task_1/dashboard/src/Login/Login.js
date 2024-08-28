import "./Login.css";

function Login() {
  return (
    <>
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
    </>
  );
}

export default Login;
