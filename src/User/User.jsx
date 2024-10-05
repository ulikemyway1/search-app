import React, { useState, useEffect } from "react";
import "./user.scss";
import Spinner from "../UIKit/Spinner";

const User = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (user && user.avatar) {
      setIsLoading(true);
      const img = new Image();

      img.src = user.avatar;
      img.onload = () => {
        setIsLoading(false);
        setIsError(false);
        setImgSrc(user.avatar);
      };

      img.onerror = () => {
        setIsLoading(false);
        setIsError(true);
      };
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const { firstName, lastName, title, country, phone, email, age } = user;

  return (
    <div className="user__container">
      <h2 className="user__title">{`${title} ${firstName} ${lastName}, ${age} years old`}</h2>

      {isLoading && <Spinner />}

      {!isLoading && !isError && imgSrc && (
        <img
          className="user__avatar"
          src={imgSrc}
          alt={`${title} ${firstName} ${lastName}`}
        />
      )}

      {isError && <div className="error">Failed to load image</div>}

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
