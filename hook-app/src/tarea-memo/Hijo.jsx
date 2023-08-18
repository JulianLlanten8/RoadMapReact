import { PropTypes } from "prop-types";
export const Hijo = ({ numero, incrementar }) => {

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
};

Hijo.propTypes = {
  numero: PropTypes.number.isRequired,
  incrementar: PropTypes.func.isRequired,
};
