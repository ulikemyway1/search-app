import React from "react";
import "./popup.scss";
import User from "../User/User";

const Popup = ({ selectedUser, show, setShow }) => {
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="popup" style={{ display: show ? "block" : "none" }}>
      <div className="popup__header">
        <button className="btn popup__close-btn" onClick={toggle}>
          X
        </button>
      </div>
      <div className="popup__body">
        <User user={selectedUser} />
      </div>
    </div>
  );
};

export default Popup;
