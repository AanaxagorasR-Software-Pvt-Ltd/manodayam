const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { getDatabase } = require("../../db/mongo");

const validate = (req, res, next ) => {
  const { email, password, name } = req.body;
console.log('888888', );
  if (email && password && name) {
    next();
  } else {
    res.status(400).json({ status: false, message: "Bad request1" });
  }
};
router.post("/user/new", validate, async (req, res) => {
  try {
    const db = await getDatabase();
    const { email, password, name  } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await db.collection("user").findOne({ email: email });
	  console.log("user ragister", user);

    if (!user) {
   
      db.collection("user")
        .insertOne({
          name: name,
          email: email,
          password: encryptedPassword,
          // type: type,
        })
        .then((resp) => {
          res.status(200).json({
            message: "new user created ",
            status: true,
            data: resp,
          });
          
        
        })
        .catch((e) => {
          console.error(e);
          res.status(200).json({
            message: "please try again later ",
            status: false,
            data: [],
          });
        });
    } else {
      return res
        .status(200)
        .json({ message: "user already exist", status: false });
        
      }
  } catch (e) {
    res
      .status(500)
      .json({ message: "please try again later!", status: false, e: e });
  }
});
router.get("/user/list", async (req, res) => {
  try {
    const db = await getDatabase();
    let dt = await db
      .collection("user")
      .find().toArray()
    res.json(dt);
    
   
  } catch (err) {
    console.log("err", err.message);
  }
});
module.exports = router;
