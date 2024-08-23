import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utlis/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

function Notifications({ displayDrawer = false }) {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <>
      {displayDrawer ? (
        <div className="notifiactionsContainer">
          <div className="menuItem">Your notifications</div>
          <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Close"
              onClick={handleClick}
            >
              <img
                style={{
                  display: "inline",
                  marginTop: "5px",
                  marginRight: "5px",
                  padding: "0",
                }}
                src={closeIcon}
                alt="Close"
                width="15px"
              />
            </button>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">Your notifications</div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
