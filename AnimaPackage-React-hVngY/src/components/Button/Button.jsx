/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({
  className,
  rectangleClassName,
  divClassName,
  text = "Button",
}) => {
  return (
    <button className={`button ${className}`}>
      <div className={`rectangle ${rectangleClassName}`} />

      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
