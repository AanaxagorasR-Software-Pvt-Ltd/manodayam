const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");

router.post("/new", async (req, res) => {
  const db = await getDatabase();
  const { name } = req.body;

  try {
    let resp = await db
      .collection("categories")
      .findOne({name: name});
    if (!resp) {
      const { insertedId } = await db.collection("categories").insertOne({
        ...req.body
      });

      res.status(200).json({
        data: {
          _id: insertedId,
          ...req.body
        },
        status: true,
        message: "data inserted"
      });
    } else {
      res.status(200).json({
        message: "data already exist.",
        data: [],
      });
    }
  } catch (e) {
    console.log("error",e);
    res.status(500).json({
      message: "server error",
      error: e,
    });
  }
});
module.exports = router;
