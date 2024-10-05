import React from "react";
import "./initialPlaceholder.scss";
import { FaGithub } from "react-icons/fa";

const InitialPlaceholder = () => {
  return (
    <div className="initial-placeholder__container">
      <p>
        This application allows you to find a&nbsp;user by their first or
        last&nbsp;name.
      </p>
      <p>
        Just enter the first or last&nbsp;name of the&nbsp;user you want to
        find.
      </p>
      <br />
      <div className="line"></div>
      <strong>
        Developed by
        <br />
        Alexander&nbsp;Potapchik
      </strong>
      <p>
        <a href="https://github.com/ulikemyway1">
          GitHub&nbsp;
          <FaGithub />
        </a>{" "}
      </p>
      <div className="line"></div>
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
