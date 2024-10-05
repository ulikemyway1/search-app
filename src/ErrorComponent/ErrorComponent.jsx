import React from "react";
import { Comment } from "react-loader-spinner";

const ErrorComponent = () => {
  return (
    <div>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
      <h1>Error</h1>
    </div>
  );
};

export default ErrorComponent;
