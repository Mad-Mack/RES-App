import { Fab, CircularProgress } from "@material-ui/core";
import Joi from "joi-browser";
import _ from "lodash";
import React, { Component } from "react";
import AppButton from "./appButton";
import toastService from "../../services/toastService";
import AppInput from "./appInput";

class Form extends Component {
   validateForm = () => {
      const { error } = Joi.validate(this.state.data, this.schema, {
         abortEarly: false
      });

      return error ? error.details : null;
   };

   handleInputChange = ({ currentTarget: input }) => {
      this.validateInput(input);
      const data = { ...this.state.data };
      data[input.name] = input.value;
      this.setState({ data });
   };

   validateInput = input => {
      const errors = { ...this.state.errors };
      const { error } = Joi.validate({ [input.name]: input.value }, _.pick(this.schema, [input.name]));
      if (!error) {
         delete errors[input.name];
         return this.setState({ errors });
      }

      errors[input.name] = error.details[0].message;
      this.setState({ errors });
   };

   handleSubmit = async e => {
      e.preventDefault();
      this.props.onLoad(true);
      let validationErrors = null;
      if (this.schema) validationErrors = this.validateForm();
      const errors = { ...this.state.errors };
      if (validationErrors) {
         toastService.error("Please fill out the fields properly.");
         for (const path in this.state.data) {
            errors[path] = validationErrors.filter(e => e.path[0] === path).map(e => e.message)[0];
         }
         return this.setState({ errors });
      }
      try {
         await this.doSubmit();
      } catch (ex) {
         if (ex.response) toastService.error(ex.response.data.errors[0]);
         else toastService.error(ex.message);
         this.setState({ isLoading: false });
      }
   };

   renderInput = ({ path, value, onChange, type, label, placeholder, outlined, icon, error }) => (
      <AppInput path={path} icon={icon} value={value} onChange={onChange} label={label} placeholder={placeholder} type={type} error={error} outlined={outlined} />
   );

   renderButton = ({ label, onClick, icon, disabled = false, color = "primary", variant = "outlined" }) => (
      <AppButton
         label={this.state.isLoading ? <CircularProgress size={22} /> : label}
         icon={icon}
         onClick={onClick}
         disabled={this.state.isLoading ? true : disabled}
         color={color}
         variant={variant}
         fullWidth={true}
      />
   );

   renderSocialMediaButton = ({ icon, text, style, color = "primary" }) => {
      return (
         <Fab color={color} style={{ margin: "5px" }}>
            <i className={`fa fa-${icon}`} style={style} /> {text}
         </Fab>
      );
   };
}

export default Form;
