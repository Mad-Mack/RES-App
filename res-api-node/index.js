const config = require("config");
const Joi = require("joi");
const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const auth = require("./routes/auth");
const cors = require("cors");
const app = express();
Joi.objectId = require("joi-objectid")(Joi);

if (!config.get("applicationSecret")) {
   console.error("FATAL ERROR: applicationSecret is not defined.");
   process.exit(1);
}

if (!config.get("connectionString")) {
   console.error("FATAL ERROR: connection string is not defined.");
   process.exit(1);
}

const connectionString = config.get("connectionString");
mongoose
   .connect(connectionString)
   .then(() => console.log("Connected to MongoDB..."))
   .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
// app.use(cors);
app.use(cors({ credentials: true, origin: true }));
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
