import React from "react";
import "./user.scss";

const User = ({ user }) => {
  const { firstName, lastName, title, country, avatar, phone, email, age } =
    user;
  return (
    <div className="user__container">
      <h2 className="user__title">{`${title} ${firstName} ${lastName}, ${age} years old`}</h2>
      <img
        className="user__avatar"
        src={avatar}
        alt={`${title} ${firstName} ${lastName}`}
      />
      <div className="contacts">
        <p>Country: {country}</p>
        <p>
          Phone: <a href={`tel:${phone}`}> {phone}</a>
        </p>
        <p>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
};

export default User;
