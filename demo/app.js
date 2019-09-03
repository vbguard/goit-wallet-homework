require('./core/express-promise');
const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require('body-parser');
const expressDomain = require('express-domain');
const config = require("./config");
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const validationErrorHandler = require('./middleware/validation-error-handler');

const PORT = config.PORT;

const routes = require('./routes/routes');

app.use(expressDomain());

// write connection to DB
// https://remotemysql.com/login.php can be used for free MySQL db
// www.elephantsql.com/‎



/*
* Username: kLtnk2xqwN

Database name: kLtnk2xqwN

Password: Lw8Zr7l2Dv

Server: remotemysql.com

Port: 3306
* 
* */


// use logger
app.use(logger("dev"));

// Routes
// main route return static
app.get("/", express.static("public"));

app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '2mb'}));

app.use("/api", routes);
app.use('/*', notFound);
app.use(validationErrorHandler);
app.use(errorHandler);

// add error handlers

const server = app.listen(PORT, () => {
  console.log(`➡️  Wallet app listening on port ${PORT} 🤟`);
});

app.set('server', server);

//Run app, then load http://localhost:PORT in a browser to see the output.
