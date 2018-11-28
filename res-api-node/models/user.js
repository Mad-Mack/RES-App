const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const _ = require("lodash");

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
      unique: true
   },
   password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024
   },
   email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
   },
   firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20
   },
   lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20
   },
   middleName: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 20
   },
   jobTitle: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
   },
   website: {
      type: String,
      minlength: 5,
      maxlength: 100
   },
   contactNumbers: [String]
});

userSchema.methods.generateAuthToken = function() {
   const token = jwt.sign(_.pick(this, ["_id", "firstName", "lastName", "middleName", "email"]), config.get("applicationSecret"));
   return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
   const schema = {
      username: Joi.string()
         .min(5)
         .max(20)
         .required(),
      password: Joi.string()
         .min(5)
         .max(255)
         .required(),
      firstName: Joi.string()
         .min(5)
         .max(20)
         .required(),
      middleName: Joi.string()
         .min(5)
         .max(20)
         .required(),
      lastName: Joi.string()
         .min(5)
         .max(20)
         .required(),
      email: Joi.string()
         .min(5)
         .max(255)
         .required()
         .email(),
      contactNumbers: Joi.array().required(),
      jobTitle: Joi.string()
         .min(5)
         .max(50)
         .required(),
      website: Joi.string()
         .min(5)
         .max(100)
   };

   return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
