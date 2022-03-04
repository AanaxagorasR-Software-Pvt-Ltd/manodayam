const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectId = require("mongodb").ObjectId;
// const product = require('./data');

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
router.post("/lists", validate, async (req, res) => {
  // res.send('hello');
  const db = await getDatabase();
  // const videoid = new ObjectId(req.params.videoid);
 const bodyimage={}
 console.log(req.query)
  if(req.query.id && req.query.id != "null" ){
     bodyimage._id =  ObjectId(req.query.id);

  }
  
  try {
    const { collectiontype } = req.body;

    const data = await db.collection(`${collectiontype}`).find(bodyimage).toArray();
    if (Array.isArray(data)) {
      res.status(200).json({
        data: data,
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
