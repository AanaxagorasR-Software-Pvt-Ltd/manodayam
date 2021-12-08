const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const { getDatabase } = require("../../db/mongo");

router.post("/update", async (req, res) => {
  const db = await getDatabase();
  
  try {
    let resp = await db
      .collection("products")
      .findOne({ _id: ObjectId(req.body.id) });
      
    if (resp) {
      const { insertedId } = await db.collection("products").update(
        {
          _id: ObjectId(req.body.id),
        },
        {
          $set: {
            ...req.body,
          },
        }
      );
      res.status(200).json({
        data: {
          ...req.body,
          _id: insertedId,
        },
        status: true,
        message: "fields updated ",
      });
    } else {
      res.status(400).json({
        message: "data already exist",
        data: [],
      });
    }
  } catch (e) {
    res.status(500).json({
      message: "server error",
      error: e,
    });
  }
});
module.exports = router;
