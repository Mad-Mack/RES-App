import React, { Component } from "react";
import { notify } from "react-notify-toast";
import Joi from "joi-browser";
import _ from "lodash";
import { Link } from "react-router-dom";
import AppInput from "./appInput";
import AppButton from "./appButton";

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
    let validationErrors = null;
    if (this.schema) validationErrors = this.validateForm();
    const errors = { ...this.state.errors };
    if (validationErrors) {
      notify.show("Please fill out the fields properly.", "error");
      for (const path in this.state.data) {
        errors[path] = validationErrors.filter(e => e.path[0] === path).map(e => e.message)[0];
      }
      return this.setState({ errors });
    }
    try {
      await this.doSubmit();
    } catch (ex) {
      if (ex.response) notify.show(ex.response.data.errors[0], "error");
      else notify.show(ex.message, "error");
    }
  };

  renderInput = (path, value, onChange, type, label, placeholder, outlined, error) => (
    <AppInput path={path} value={value} onChange={onChange} label={label} placeholder={placeholder} type={type} error={error} outlined={outlined} />
  );

  renderButton = (label, onClick, icon, className, style, disabled = false) => {
    return <AppButton label={label} icon={icon} onClick={onClick} disabled={disabled} style={style} className={className} />;
  };

  renderSocialMediaButton = (icon, text, style, urlPath = "/") => {
    return (
      <Link to={urlPath} className="btn btn-primary mr-2" style={{ fontSize: "20px" }}>
        <i className={`fa fa-${icon}`} style={style} /> {text}
      </Link>
    );
  };
}

export default Form;
