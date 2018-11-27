const { User } = require("../models/user");
const bcrypt = require("bcrypt");

async function register(user) {
   let user = new User(_.pick(req.body, ["username", "password", "email", "firstName", "middleName", "lastName", "jobTitle", "website", "contactNumbers"]));
   const salt = await bcrypt.genSalt();
   user.password = await bcrypt.hash(req.body.password, salt);

   try {
      const createdUser = await user.save();
      const token = user.generateAuthToken();
      return {
         ..._.pick(createdUser, ["username", "email", "firstName", "middleName", "lastName", "jobTitle", "website", "contactNumbers"]),
         token
      };
   } catch (ex) {
      return null;
   }
}

async function userExists(propName, propValue) {
   try {
      let users = await User.find({
         [propName]: propValue
      });
      return users.length > 0;
   } catch (ex) {
      return null;
   }
}

module.exports = {
   register,
   userExists
};
