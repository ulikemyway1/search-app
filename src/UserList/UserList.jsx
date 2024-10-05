import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Spinner from "../UIKit/Spinner";
import "./userList.scss";
import findUser from "./findUser";
import UserListItem from "./UserListItem";
import { v4 as uuidv4 } from "uuid";

const UserList = ({ users, targetName, setShow, setSelectedUser }) => {
  const [loading, setLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(handleTargetNameChange, [targetName]);

  function handleTargetNameChange() {
    setLoading(true);
    const result = findUser(targetName, users);
    setFilteredUsers(result);
    setLoading(false);
  }

  const userListTable =
    filteredUsers.length > 0 ? (
      <View
        users={filteredUsers}
        setShow={setShow}
        setSelectedUser={setSelectedUser}
      />
    ) : null;
  const spinner = loading ? <Spinner /> : null;
  const placeholder =
    filteredUsers.length === 0 && targetName.length > 2 ? (
      <UserListPlaceholder />
    ) : null;

  return (
    <div
      className="user-list__container"
      style={{
        display:
          !loading && filteredUsers.length === 0 && targetName.length < 2
            ? "none"
            : "block",
      }}
    >
      {spinner}
      {placeholder}
      {userListTable}
    </div>
  );
};

export default UserList;

const View = ({ users, setShow, setSelectedUser }) => {
  const userList = [];
  users.forEach((user) => {
    userList.push(
      <UserListItem
        key={user.id || uuidv4()}
        user={user}
        setShow={setShow}
        setSelectedUser={setSelectedUser}
      />,
    );
  });
  return (
    <>
      <table className="user-list__wrapper">
        <thead>
          <tr>
            <th className="table-header">Photo</th>
            <th className="table-header">First Name</th>
            <th className="table-header">Last Name</th>
            <th className="table-header">Age</th>
            <th className="table-header">Country</th>
          </tr>
        </thead>
        <tbody>{userList}</tbody>
      </table>
      {createPortal(
        <p className="user-list__statistics">Found {users.length} users</p>,
        document.querySelector(".app"),
      )}
    </>
  );
};

const UserListPlaceholder = () => {
  return (
    <div className="user-list__placeholder">
      <h2>Users not found...</h2>
    </div>
  );
};
