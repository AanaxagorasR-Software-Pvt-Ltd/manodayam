const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validate = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    next();
  } else {
    res.status(400).json({ status: false, message: "Bad request " });
  }
};
router.post("/user/login", validate, async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = await getDatabase();
    const user = await db.collection("users").findOne({ email: email });
	  console.log("user login",user);
	  
    if (user && (await bcrypt.compare(password, user.password))) {
	    	const { type, name, age, _id } = user; 
      
		 const token = jwt.sign({
			name: name,
			type: type,
			email: email,
      age: age,
			id: _id
		}, "STERETE8998858JUJFHKJ*8",{expiresIn:5860})
	    res.status(200).json({ message: "login sucessfully", status: true, token: token });
      res.write('=======this is your');
      console.log('[[[[[[[[');
    } else {
      res.status(200).json({ message: "bad credentails", status: false });
      console.log("======", )
    }
  } catch (e) {
    res.send(e);
    // res.status(500).json({ message: "please try again taler", status: false, data:JSON.stringify(e)});
  }
});
module.exports = router;
