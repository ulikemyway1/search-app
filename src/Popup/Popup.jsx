import React from "react";
import "./popup.scss";
import User from "../User/User";
import { RiCloseLine } from "react-icons/ri";

const Popup = ({ selectedUser, show, setShow }) => {
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="overlay" style={{ display: show ? "block" : "none" }}>
      <div className="popup" style={{ display: show ? "block" : "none" }}>
        <div className="popup__header">
          <button className="btn popup__close-btn" onClick={toggle}>
            <RiCloseLine />
          </button>
        </div>
        <div className="popup__body">
          <User user={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
