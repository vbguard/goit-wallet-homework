require('./core/express-promise');
const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require('body-parser');
const expressDomain = require('express-domain');
const config = require("./config");
const cookieParser = require('cookie-parser');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const validationErrorHandler = require('./middleware/validation-error-handler');
const passport = require('./auth');
const session = require('express-session');
const PORT = config.PORT;

const routes = require('./routes/routes');

app.use(expressDomain());

// use logger
app.use(logger("dev"));

// Routes
// main route return static
app.get("/", express.static("public"));

app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '2mb'}));
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: config.cookieSecret
  })
);


app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);
app.use('/*', notFound);

// add error handlers
app.use(validationErrorHandler);
app.use(errorHandler);


const server = app.listen(PORT, () => {
  console.log(`➡️  Wallet app listening on port ${PORT} 🤟`);
});

app.set('server', server);


