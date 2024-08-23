import "./App.css";
import Notifications from "../Notifiacations/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn = false }) {
  return (
    <>
      <div className="App">
        <Notifications />
        <Header />
      </div>
      <div className="App-body">{isLoggedIn ? <CourseList /> : <Login />}</div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
