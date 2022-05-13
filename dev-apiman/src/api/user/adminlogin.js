const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validate = (req, res, next) => {
  const { email, password, roll } = req.body;
  if (email && password, roll) {
    next();
    // res.redirect("/");
  } else {
    res.status(400).json({ status: false, message: "Bad request " });
  }
};
router.post("/subadmin/login", validate, async (req, res) => {
  // res.send({kk: 1111});
  try {

    const { email, password } = req.body;
    const db = await getDatabase();
    const user = await db.collection("subadmin_user").findOne({ email: email });
    console.log("subadmin login", user);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { roll, name, age, _id, email, password } = user;

      const token = jwt.sign( {
          email: email,
          password: password,
          roll: roll
        },
        "STERETE8998858JUJFHKJ*8",
        { expiresIn: 9860 }
      );
      console.log("9999999", user)
      res.send({ message: "login sucessfully", status: true, token: token ,user: user});
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
