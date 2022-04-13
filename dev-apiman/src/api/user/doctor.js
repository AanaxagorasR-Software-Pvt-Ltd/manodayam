// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");

// const { getDatabase } = require("../../db/mongo");

// const validate = (req, res, next ) => {
//   const {name, address, email, speciality, password } = req.body;
// console.log('888888', );
//   if (name, address, email, speciality, password ) {
//     next();
//   } else {
//     res.status(400).json({ status: false, message: "Bad request" });
//   }
// };
// router.post("/user/doctor", validate, async (req, res) => {
//   try {
//     const db = await getDatabase();
//     const { name, address, email, speciality, password  } = req.body;
//     // const email = await bcrypt.hash(email, 10);
//     console.log("#######", req.body);
//     const user = await db.collection("users").findOne({ name: name });
// 	  console.log("user ragister",user);

//     if (!user) {
//       db.collection("users")
//         .insertOne({
//           name: name,
//           address: address,
//           email: email,
//           speciality: speciality,
//           password: password,
//         })
//         .then((resp) => {
//           res.status(200).json({
//             message: "new user created ",
//             status: true,
//             data: resp,
//           });
          
//           alert('New user created')

//         })
//         .catch((e) => {
//           res.status(200).json({
//             message: "please try again later ",
//             status: false,
//             data: [],
//           });
//         });
//     } else {
//       return res
//         .status(200)
//         .json({ message: "user already exist", status: false });
        
//       }
//   } catch (e) {
//     res
//       .status(500)
//       .json({ message: "please try again later!", status: false, e: e });
//   }
// });
// module.exports = router;
