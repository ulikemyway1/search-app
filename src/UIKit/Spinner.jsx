import { Blocks } from "react-loader-spinner";

const Spinner = ({ text }) => {
  return (
    <div className="spinner">
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="loading"
        wrapperClass="spiner-wrapper"
        visible={true}
      />
      <p style={{ textAlign: "center" }}>{text}</p>
    </div>
  );
};

export default Spinner;
