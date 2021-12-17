const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
// const projectDetails = require('./data2');

// console.log("#########", projectDetails);


router.get("/:slug", async (req, res) => {
  const slug = req.params.slug
  const db = await getDatabase();
  try {
    const data = await db.collection("products").find({slug : slug}).toArray();
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
