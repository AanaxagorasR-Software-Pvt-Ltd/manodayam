const express = require("express");
const path = require("path");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { startDatabase, getDatabase } = require("./db/mongo");
const passport = require("passport");
const session = require("express-session");
const { env } = process;
const app = express();
const Schedule=require("./api/subscription/schedule")
app.use(cors());
app.use(`${env.MEDIA_PATH}`, express.static(`${env.MEDIA_PATH}`));
// allow to use body as json file
app.use(express.json({ limit: "50mb" }));
// adding Helmet to enhance your API's security
app.use(helmet());
app.use(compression());

// enabling CORS for all requests

app.use("/uploads", express.static("uploads"));

  /**
   * Social media login
   */
  
  app.use(
  session({
    secret: "s3cr3t",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
//end

app.get(`/test`, (req, res) => {
  res.status(200).json({ et: `done test` });
});

app.use(`/api`, require(`./api`));
app.get("/", (req, res) => {
  res.send("hello");
});
startDatabase().then(async () => {
  try {
    const db = await getDatabase();
  } catch (e) {
    console.log(`error`, e);
  }
});

// start the server
app.listen(3020, async () => {
  console.log(`listening on port ${3020}`);
});
// app.listen(4070, async () => {
//   console.log(`listening on port ${3020}`);
// });
