const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");

const validate = (req, res, next) => {
  console.log("=fgf===", req.body.collectiontypedata);
  if (req.body.collectiontypedata) {
    next();
  } else {
    res.status(400).json({
      status: false,
      message: "bad request",
    });
  }
};
router.post("/bannertext",validate, async (req, res) => {
  const db = await getDatabase();

  try {
    const { collectiontypedata } = req.body;
    console.log('collectiontypedata', req.body);
    const data = await db.collection(`${collectiontypedata}`).find().toArray();
    // console.log('=====jfgjh', data);
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
