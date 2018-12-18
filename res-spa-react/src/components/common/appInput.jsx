import { FormControl, FormHelperText, TextField } from "@material-ui/core";
import React from "react";

const AppInput = ({ path, value, label, outlined, error, ...props }) => {
   return (
      <div>
         <FormControl error={!!error} aria-describedby={error && "component-error-text"} fullWidth>
            <TextField error={!!error} label={label} name={path} value={value} margin="normal" variant={outlined ? "outlined" : "standard"} {...props} />
            {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
         </FormControl>
      </div>
   );
};

export default AppInput;
