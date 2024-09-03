import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  inputGroup: {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
  },
  label: {
    marginRight: "10px",
    minWidth: "80px",
  },
  input: {
    padding: "8px",
    flex: "1",
    border: "none",
  },
  buttonGroup: {
    marginTop: "10px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "white",
    border: "2px solid orange",
    color: "black",
    cursor: "pointer",
  },
});

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        {/* Email */}
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email" className={css(styles.label)}>
            Email:
          </label>
          <input type="email" id="email" className={css(styles.input)} />
        </div>

        {/* Password */}
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password" className={css(styles.label)}>
            Password:
          </label>
          <input type="password" id="password" className={css(styles.input)} />
        </div>

        {/* OK Button */}
        <div className={css(styles.buttonGroup)}>
          <button className={css(styles.button)}>OK</button>
        </div>
      </form>
    </>
  );
}

export default Login;
