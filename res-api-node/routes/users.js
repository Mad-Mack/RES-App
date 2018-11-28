const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { validate } = require("../models/user");
const userService = require("../services/user");

router.post("/", async (req, res) => {
   let user = await userService.userExists({ username: req.body.username });
   if (user) return res.status(400).send("User already registered");

   const { error } = validate(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   try {
      user = await userService.register(req.body);
      if (user.error) return res.status(400).send(user.error);
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

module.exports = router;
