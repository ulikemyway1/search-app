import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./userSearch.scss";

const UserSearch = ({ setTargetUser }) => {
  const [userName, setUserName] = useState("");

  const onChange = (e) => {
    setUserName(e.target.value);
    setTargetUser(e.target.value.trim());
  };

  const onClick = () => {
    const name = userName.trim();
    setTargetUser(name);
    setUserName(name);
  };

  return (
    <div className="user-search__wrapper">
      <input
        type="search"
        className="user-search__input"
        placeholder="Type a name..."
        value={userName}
        onChange={onChange}
      ></input>
      <button className="btn user-search__btn" onClick={onClick}>
        Search
        <span>
          <FaSearch />
        </span>
      </button>
    </div>
  );
};

export default UserSearch;
