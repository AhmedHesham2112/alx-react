import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer = false, listNotifications = [] }) {
  return (
    <>
      {displayDrawer ? (
        <div className="notifiactionsContainer">
          <div className="menuItem">Your notifications</div>
          <div className="Notifications">
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map(({ id, html, type, value }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    value={value}
                    html={html}
                  />
                ))
              ) : (
                <div className="notification-header">
                  <NotificationItem value="No new notification for now" />
                  <button
                    aria-label="Close"
                    onClick={console.log("Close button has been clicked")}
                  >
                    <img
                      style={{ display: "inline" }}
                      src={closeIcon}
                      alt="Close"
                    />
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
