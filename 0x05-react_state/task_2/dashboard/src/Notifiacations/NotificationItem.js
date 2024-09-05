import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  item: {
    width: "100%",
    borderBottom: "1px solid black",
    fontSize: "20px",
    padding: "10px 8px",
    cursor: "pointer",
  },
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    const itemStyle = type === "default" ? styles.default : styles.urgent;

    return (
      <>
        {type && value ? (
          <li
            className={css(styles.item, itemStyle)}
            onClick={() => markAsRead(id)}
            data-notification-type={type}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            className={css(styles.item, styles.urgent)}
            onClick={() => markAsRead(id)}
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
