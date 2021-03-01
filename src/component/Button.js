import PropTypes from "prop-types";

const Button = ({ color, name, onAdd }) => {
  return (
    <button
      style={{
        backgroundColor: color,
      }}
      className="btn"
      onClick={() => onAdd()}
    >
      {name}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue",
};
Button.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string, // mac dinh kieu du lieu
};
export default Button;
