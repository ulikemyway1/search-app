import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../UIKit/Spinner";
import "./userList.scss";
import findUser from "./findUser";

const UserList = ({ users, targetName }) => {
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
    filteredUsers.length > 0 ? <View users={filteredUsers} /> : null;
  const spinner = loading ? <Spinner /> : null;
  const placeholder =
    filteredUsers.length === 0 && targetName.length > 0 ? (
      <UserListPlaceholder />
    ) : null;

  return (
    <div className="user-list__container">
      {spinner}
      {placeholder}
      {userListTable}
    </div>
  );
};

export default UserList;

const View = ({ users }) => {
  return (
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
      <tbody>
        {users.map((user) => (
          <tr key={user.id || uuidv4()} className="table-row">
            <td className="table-row__content">
              <img
                src={user.avatar_thumbnail}
                alt={`Photo of ${user.firstName}`}
              />
            </td>
            <td className="table-row__content">{user.firstName}</td>
            <td className="table-row__content">{user.lastName}</td>
            <td className="table-row__content">{user.age}</td>
            <td className="table-row__content">{user.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const UserListPlaceholder = () => {
  return (
    <div className="user-list__placeholder">
      <h2>Users not found...</h2>
    </div>
  );
};
