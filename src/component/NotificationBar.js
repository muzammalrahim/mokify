import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { userSelector } from "../store/reducers/login";

function NotificationBar() {
  const { isLoggedIn, isError } = useSelector(userSelector);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      if (isLoggedIn || isError) {
        setVisible(true);
      }
    }, 3000);
  }, [isLoggedIn]);
  return (
    <div
      style={{
        visibility: !isVisible ? "visible" : "hidden",
      }}
      className={` notificationBar  ${
        isLoggedIn ? "bar__colorSuccess" : "bar__colorFail"
      } `}
    >
      <p className="notificationBar__text">
        {isError ? "Email or password incorrect" : " Lissaty kokoelmaan"}
      </p>
    </div>
  );
}

export default NotificationBar;
