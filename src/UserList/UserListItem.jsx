import React from "react";
import { v4 as uuidv4 } from "uuid";

const UserListItem = ({ user, setShow, setSelectedUser }) => {
  const handleClick = () => {
    setSelectedUser(user);
    setShow(true);
  };
  return (
    <tr key={user.id || uuidv4()} className="table-row" onClick={handleClick}>
      <td className="table-row__content">
        <img
          className="user-list__photo"
          src={user.avatar_thumbnail}
          alt={`Photo of ${user.firstName}`}
        />
      </td>
      <td className="table-row__content">{user.firstName}</td>
      <td className="table-row__content">{user.lastName}</td>
      <td className="table-row__content">{user.age}</td>
      <td className="table-row__content">{user.country}</td>
    </tr>
  );
};

export default UserListItem;
