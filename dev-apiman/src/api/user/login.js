const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validate = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    next();
    // res.redirect("/");
  } else {
    res.status(400).json({ status: false, message: "Bad request " });
  }
};
router.post("/user/login", validate, async (req, res) => {
  // res.send({kk: 1111});
  try {

    const { email, password } = req.body;
    const db = await getDatabase();
    const user = await db.collection("user").findOne({ email: email });
    console.log("user login", user);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { type, name, age, _id, email, password } = user;

      const token = jwt.sign( {
          email: email,
          password: password,
        },
        "STERETE8998858JUJFHKJ*8",
        { expiresIn: 9860 }
      );

      res.send({ message: "login sucessfully", status: true, token: token ,user});
      // res.write("=======this is your");
      // console.log("[[[[[[[[");
    } else {
      res.send({ message: "bad credentails", status: false });
      
    }
  } catch (e) {
    res.send(e);
    // res.status(500).json({ message: "please try again taler", status: false, data:JSON.stringify(e)});
  }
});


module.exports = router;
