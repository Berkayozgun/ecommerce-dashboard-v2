import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 glassmorphism hover-scale ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
