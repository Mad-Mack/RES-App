import React from "react";

const AppButton = ({ label, onClick, icon, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {icon && <i className={icon} />}
      {label}
    </button>
  );
};

export default AppButton;
