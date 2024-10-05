import React from "react";
import "./initialPlaceholder.scss";
import { FaGithub } from "react-icons/fa";

const InitialPlaceholder = () => {
  return (
    <div className="initial-placeholder__container">
      <p>
        This application allows you to find a user by their first or last name.
      </p>
      <p>Just enter the first or last name of the user you want to find.</p>
      <br />
      <strong>
        Developed by
        <br />
        Alexander Potapchik
      </strong>
      <p>
        <a href="https://github.com/ulikemyway1">
          GitHub <FaGithub />
        </a>{" "}
      </p>
      <br />
      <p>
        API:{" "}
        <a href="https://randomuser.me/" target="__blank">
          randomuser.me
        </a>
      </p>
    </div>
  );
};

export default InitialPlaceholder;
