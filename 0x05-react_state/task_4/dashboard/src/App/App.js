import React from "react";
import Notifications from "../Notifiacations/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { getLatestNotification } from "../utlis/utils";
import { StyleSheet, css } from "aphrodite";
import { AppContext, user } from "./AppContext";

const styles = StyleSheet.create({
  global: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  app: {
    borderBottom: "3px solid #e0354b",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  },
  appBody: {
    padding: "30px",
    borderBottom: "3px solid #e0354b",
    height: "80vh",
  },
  appFooter: {
    backgroundColor: "white",
    padding: "20px",
    color: "black",
    fontStyle: "italic",
    textAlign: "center",
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

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

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: user,
    });
  }

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter(
      (notification) => notification.id !== id
    );

    this.setState({ listNotifications: newList });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logout: this.state.logOut,
        }}
      >
        <>
          <div className={css(styles.app)}>
            <Notifications
              markNotificationAsRead={this.markNotificationAsRead}
              listNotifications={this.listNotifications}
              displayDrawer={this.state.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis at tempora odio, necessitatibus repudiandae
                reiciendis cum nemo sed asperiores ut molestiae eaque aliquam
                illo ipsa iste vero dolor voluptates.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.appFooter)}>
            <Footer />
          </div>
        </>
      </AppContext.Provider>
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
