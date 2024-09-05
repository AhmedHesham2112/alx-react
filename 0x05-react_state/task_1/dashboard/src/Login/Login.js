import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useState, useEffect } from "react";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        {/* Email */}
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email" className={css(styles.label)}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
            className={css(styles.input)}
          />
        </div>

        {/* Password */}
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password" className={css(styles.label)}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
            className={css(styles.input)}
          />
        </div>

        {/* OK Button */}
        <div className={css(styles.buttonGroup)}>
          <input
            type="submit"
            value="Ok"
            disabled={!enableSubmit}
            className={css(styles.button)}
          />
        </div>
      </form>
    </>
  );
}

export default Login;
