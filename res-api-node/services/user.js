const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const _ = require("lodash");

async function register(user) {
   let userToCreate = new User(_.pick(user, ["username", "password", "email", "firstName", "middleName", "lastName", "jobTitle", "website", "contactNumbers"]));
   const salt = await bcrypt.genSalt();
   userToCreate.password = await bcrypt.hash(user.password, salt);

   try {
      const createdUser = await userToCreate.save();
      const token = userToCreate.generateAuthToken();
      return {
         ..._.pick(createdUser, ["username", "email", "firstName", "middleName", "lastName", "jobTitle", "website", "contactNumbers"]),
         token
      };
   } catch (ex) {
      return { error: ex.message };
   }
}

async function userExists(query) {
   try {
      let users = await User.find(query);
      return users.length > 0;
   } catch (ex) {
      return null;
   }
}

module.exports = {
   register,
   userExists
};
