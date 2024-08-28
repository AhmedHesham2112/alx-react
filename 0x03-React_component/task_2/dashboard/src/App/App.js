import "./App.css";
import React from "react";
import Notifications from "../Notifiacations/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utlis/utils";

class App extends React.Component {
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  // Lifecycle method: componentDidMount
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Method to handle key down event
  handleKeyDown = (event) => {
    const { logOut } = this.props; // Destructure logOut prop

    // Check if Control + H is pressed
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props; // Destructure isLoggedIn prop

    return (
      <>
        <div className="App">
          <Notifications listNotifications={this.listNotifications} />
          <Header />
        </div>
        <div className="App-body">
          {isLoggedIn ? (
            <CourseList listCourses={this.listCourses} />
          ) : (
            <Login />
          )}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}, // Default value is an empty function
};

export default App;
