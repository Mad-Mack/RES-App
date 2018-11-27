const _ = require("lodash");
const express = require("express");
const auth = require("../services/auth");
const router = express.Router();

router.post("/", async (req, res) => {
   const errorMessage = "Invalid username or password.";
   try {
      const token = await auth.login(_.pick(req.body, ["username", "password"]));
      if (!token) return res.status(400).send({ error: errorMessage });

      res.send({ token });
   } catch (ex) {
      res.send({ error: ex });
   }
});

module.exports = router;
