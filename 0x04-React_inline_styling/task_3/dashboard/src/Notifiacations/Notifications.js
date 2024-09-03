// Notifications.js
import React from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const styles = StyleSheet.create({
  notificationsPanel: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    zIndex: 1000,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
  notifications: {
    flex: 1,
    padding: 0,
  },
  notificationList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "20px",
  },
  notificationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItem: {
    textAlign: "right",
    padding: "10px",
  },
  closeButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayDrawer ? (
          <div className={css(styles.notificationsPanel)}>
            <div className={css(styles.menuItem)}>
              <p>Your notifications</p>
            </div>
            <div className={css(styles.notifications)}>
              <ul className={css(styles.notificationList)}>
                <p>Here is the list of notifiactions</p>
                {this.props.listNotifications &&
                this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map(
                    ({ id, html, type, value }) => (
                      <NotificationItem
                        key={id}
                        markAsRead={this.markAsRead}
                        type={type}
                        value={value}
                        html={html}
                      />
                    )
                  )
                ) : (
                  <div className={css(styles.notificationHeader)}>
                    <NotificationItem value="No new notification for now" />
                    <button
                      aria-label="Close"
                      className={css(styles.closeButton)}
                      onClick={() =>
                        console.log("Close button has been clicked")
                      }
                    >
                      <img src={closeIcon} alt="Close" />
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
