/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Delete = ({ color = "black", className }) => {
  return (
    <svg
      className={`delete ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.2144 13.5251C14.9215 13.2322 14.9215 12.7574 15.2144 12.4645C15.5073 12.1716 15.9822 12.1716 16.275 12.4645L18.75 14.9394L21.2249 12.4645C21.5177 12.1716 21.9926 12.1716 22.2855 12.4645C22.5784 12.7573 22.5784 13.2322 22.2855 13.5251L19.8105 16L22.2855 18.4749C22.5784 18.7678 22.5784 19.2427 22.2855 19.5355C21.9926 19.8284 21.5177 19.8284 21.2249 19.5355L18.75 17.0607L16.275 19.5355C15.9822 19.8284 15.5073 19.8284 15.2145 19.5355C14.9215 19.2426 14.9215 18.7678 15.2145 18.4749L17.6893 16.0001L15.2144 13.5251Z"
        fill={color}
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M12.1213 8.37866L4.5 16L12.1213 23.6213C12.684 24.184 13.447 24.5 14.2427 24.5H24.5C26.1569 24.5 27.5 23.1569 27.5 21.5V10.5C27.5 8.84314 26.1569 7.5 24.5 7.5H14.2427C13.447 7.5 12.684 7.8161 12.1213 8.37866ZM24.5 23.2H14.2427C13.7917 23.2 13.3594 23.0209 13.0405 22.7021L6.3385 16L13.0405 9.29791C13.3594 8.97913 13.7917 8.79999 14.2427 8.79999H24.5C25.4388 8.79999 26.2 9.5611 26.2 10.5V21.5C26.2 22.4389 25.4388 23.2 24.5 23.2Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Delete.propTypes = {
  color: PropTypes.string,
};
