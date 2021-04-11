import React from "react";

import { StyledNotification } from "./style";
import { INotification } from "../../type";

const Notification: React.FC<INotification> = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

export default Notification;
