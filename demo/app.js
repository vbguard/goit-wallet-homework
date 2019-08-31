const express = require("express");
const app = express();
const logger = require("morgan");

const config = require("./config");

const PORT = config.PORT;

const routes = require("./routes/routes.js");

// write connection to DB

// use logger
app.use(logger("dev"));

// Routes
// main route return static
app.get("/", express.static("public"));

app.use("/api", routes);

// add error handlers

app.listen(PORT, () => {
  console.log(`➡️  Wallet app listening on port ${PORT} 🤟`);
});

//Run app, then load http://localhost:PORT in a browser to see the output.
