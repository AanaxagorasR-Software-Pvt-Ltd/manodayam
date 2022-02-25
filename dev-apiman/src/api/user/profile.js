const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");


router.get("/profil", async (req, res) => {
  const _id = req.params._id
  const db = await getDatabase();
  try {
    // const { collectiontype } = req.body;
    const data = await db.collection("user").find({_id : _id}).toArray();
    console.log('|||||||||', data);
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
