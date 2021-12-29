const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");

const validate = (req, res, next) => {
  console.log("=fgf===", req.body.collectionDoctor);
  if (req.body.collectionDoctor) {
    next();
  } else {
    res.status(400).json({
      status: false,
      message: "bad request",
    });
  }
};
router.post("/doctorlists",validate, async (req, res) => {
  const db = await getDatabase();

  try {
    const { collectionDoctor } = req.body;
    console.log('collectionDoctor', req.body);
    const data = await db.collection(`${collectionDoctor}`).find().toArray();
    // console.log('=====jfgjh', data);
    if (Array.isArray(data)) {
      res.status(200).json({
        data: data,
        status: true,
        message: "data fetched sucseccfully",
        id: "lllll",
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
