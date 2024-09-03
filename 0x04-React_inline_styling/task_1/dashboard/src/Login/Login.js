import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  loginForm: {
    display: "inline-block",
    margin: "5px",
  },
});

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        {/* Email */}
        <div className={css(styles.loginForm)}>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
        </div>

        {/* Password Input */}
        <div className={css(styles.loginForm)}>
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
