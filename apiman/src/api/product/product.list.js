// const express = require("express");
// const router = express.Router();
// const { getDatabase } = require("../../db/mongo");
// const validate = (req, res, next) => {
//   console.log("====", req.body);
//   if (req.body.collectiontype) {
//     next();
//   } else {
//     res.status(400).json({
//       status: false,
//       message: "bad request",
//     });
//   }
// };
// router.get("/lists", validate, async (req, res) => {
//   const db = await getDatabase();

//   try {
//     const { collectiontype } = req.body;
//     const data = await db.collection(`${collectiontype}`).find().toArray();
//     if (Array.isArray(data)) {
//       res.status(200).json({
//         data: data,
//         status: true,
//         message: "data fetched sucseccfully",
//       });
//     } else {
//       res.status(200).json({
//         data: [],
//         status: false,
//         message: "no data found",
//       });
//     }
//   } catch (e) {
//     res.status(500).json({
//       status: false,
//       message: "server error",
//     });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const product = require('./data');

console.log("@@@@@@@@@", product);

const validate = (req, res, next) => {
  console.log("====", req.body);
  if (req.body.collectiontype) {
    next();
  } else {
    res.status(400).json({
      status: false,
      message: "bad request",
    });
  }
};
router.get("/lists", async (req, res) => {
  // res.send('hello');
  const db = await getDatabase();

  try {
    const { collectiontype } = req.body;
    const data = await db.collection(`${collectiontype}`).find().toArray();
    if (Array.isArray(data)) {
      res.status(200).json({
        data: product,
        status: true,
        message: "data fetched sucseccfully",
        id: "kkkkk",
      });
    } else {
      res.status(200).json({
        data: [],
        status: false,
        message: "no data found",
      });
    }
  } catch (e) {
    res.status(500).json({
      status: false,
      message: "server error",
    });
  }
});

module.exports = router;
