import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    return (
      <div
        className={
          displayDrawer
            ? css(styles.notificationsContainer, styles.drawerOpen)
            : css(styles.notificationsContainer)
        }
      >
        <div
          className={
            displayDrawer
              ? css(styles.none)
              : css(styles.menuItem, styles.hover)
          }
          onClick={() => {
            handleDisplayDrawer();
          }}
        >
          Your notifications
        </div>
        {displayDrawer ? (
          <div className={css(styles.Notifications, styles.noBorder)}>
            <button
              className={css(styles.button)}
              aria-label="Close"
              onClick={() => {
                console.log("Close button has been clicked");
                handleHideDrawer();
              }}
            >
              <img
                src={closeIcon}
                alt="close icon"
                width="10px"
                height="10px"
              />
            </button>
            <p className={css(styles.center)}>
              Here is the list of notifications
            </p>
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map(({ type, value, html, id }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    value={value}
                    html={html}
                    markAsRead={this.markAsRead}
                    id={id}
                    styles={
                      html || type === "urgent" ? styles.urgent : styles.default
                    }
                  />
                ))
              ) : (
                <NotificationItem value="No new notification for now" />
              )}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const styles = StyleSheet.create({
  Notifications: {
    padding: "1em",
    border: "2px dashed red",
    position: "absolute",
    top: "1.8em",
    right: "0",
    zIndex: "100",
    "@media (max-width: 900px)": {
      width: "100%",
      padding: "0px",
      fontSize: 20,
      position: "relative",
      right: 0,
      left: 0,
      border: "none",
    },
  },

  "notification-header": {
    display: "flex",
    justifyContent: "space-between",
  },

  menuItem: {
    position: "relative",
    zIndex: 100,
    textAlign: "right",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },

  ul: {
    "@media (max-width: 900px)": {
      padding: 0,
    },
  },
  button: {
    "@media (max-width: 900px)": {
      position: "relative",
      float: "right",
    },
  },
});

export default Notifications;
