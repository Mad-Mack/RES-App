import React from "react";
import { TextField, InputLabel, FormControl, FormHelperText } from "@material-ui/core";

const AppInput = ({ path, value, label, outlined, error, ...props }) => {
  return (
    <div>
      <FormControl error={!!error} aria-describedby={error && "component-error-text"} fullWidth>
        <TextField error={!!error} label={label} value={value} margin="normal" variant={outlined ? "outlined" : "standard"} />
        {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default AppInput;
