const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const _ = require("lodash");
const { User, validate } = require("../models/userModel");
const userService = require("../services/user");

router.post("/", async (req, res) => {
   let user = await userService.userExists({ username: req.body.username });
   if (user) return res.status(400).send("User already registered");

   const { error } = validate(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   try {
      user = await userService.register(req.body);
      res.send(user);
   } catch (ex) {
      res.status(500).send(ex.message);
   }
});

// router.get("/me", auth, async (req, res) => {
//    const userId = req.user._id;
//    try {
//       const user = await User.findById(userId).select("-password");
//       res.send(user);
//    } catch (ex) {
//       res.status(500).send(ex.message);
//    }
// });

// async function userExists(userId) {
//    const users = await User.find();
//    return users.find(u => u._id.toString() === userId);
// }

module.exports = router;
