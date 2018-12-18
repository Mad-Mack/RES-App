import { FormControl, FormHelperText, InputAdornment, TextField } from "@material-ui/core";
import React from "react";

const AppInput = ({ path, value, label, outlined, error, icon, ...props }) => {
  return (
    <div>
      <FormControl error={!!error} aria-describedby={error && "component-error-text"} fullWidth>
        <TextField
          InputProps={
            icon
              ? {
                  [icon.position + "Adornment"]: <InputAdornment position={icon.position}>{icon.component}</InputAdornment>
                }
              : null
          }
          error={!!error}
          label={label}
          name={path}
          value={value}
          margin="normal"
          variant={outlined ? "outlined" : "standard"}
          {...props}
        />
        {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default AppInput;
