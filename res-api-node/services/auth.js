const { User } = require("../models/user");
const bcrypt = require("bcrypt");

async function login({ username, password }) {
   const user = await User.find({ username })[0];
   if (!user) return null;

   const valid = await bcrypt.compare(password, user.password);
   if (!valid) return null;

   return user.generateAuthToken() || null;
}

module.exports = {
   login
};
