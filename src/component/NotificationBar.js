import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { userSelector } from "../store/reducers/login";

function NotificationBar() {
  const { isLoggedIn } = useSelector(userSelector);
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setVisible(false);
    }, 3000);
  }, [isLoggedIn]);
  return (
    <div
      style={{ visibility: isVisible ? "visible" : "hidden" }}
      className={` notificationBar  ${
        isLoggedIn ? "bar__colorSuccess" : "bar__colorFail"
      } `}
    >
      <p className="notificationBar__text">
        Lisatty <a href="">Kokelmaan</a>
      </p>
    </div>
  );
}

export default NotificationBar;
