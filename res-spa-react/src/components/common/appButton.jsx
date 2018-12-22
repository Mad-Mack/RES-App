import React from "react";
import Button from "@material-ui/core/Button";

const AppButton = ({ label, onClick, icon: Icon, iconPosition = "start", ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {Icon && iconPosition === "start" && <Icon className="mr-1" color="primary" />}
      {label}
      {Icon && iconPosition === "end" && <Icon className="mr-1" color="primary" />}
    </Button>
  );
};

export default AppButton;
