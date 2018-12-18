import React from "react";
import Button from "@material-ui/core/Button";

const AppButton = ({ label, onClick, icon, ...props }) => {
   return (
      <Button onClick={onClick} {...props}>
         {icon && <i className={icon} />}
         {label}
      </Button>
   );
};

export default AppButton;
