import PropTypes from "prop-types";

export const ShowIncrement = ({ increment }) => {
  console.log("Me volvi a generar :(");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Increment
    </button>
  );
};

ShowIncrement.PropTypes = {
  increment: PropTypes.func.isRequired,
};
