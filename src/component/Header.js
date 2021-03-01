import PropTypes from "prop-types";
import Button from "./Button";
import { useState } from "react";
const Header = ({ title, onAdd, showAdd }) => {
  // rafce

  return (
    <div>
      <header className="header">
        <h1>{title} </h1>
        <Button color="green" name={showAdd ? "Close" : "Add"} onAdd={onAdd} />
      </header>
    </div>
  );
};
Header.defaultProps = {
  title: "To Do List ",
};
Header.propTypes = {
  title: PropTypes.string.isRequired, // mac dinh kieu du lieu , yeu cau phai co
};

// const HeadingStyle = {
//   color: "red",
// };
export default Header;
