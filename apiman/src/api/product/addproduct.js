const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");

router.post("/add", async (req, res) => {
  const db = await getDatabase();
  console.log("mmmmmmm", productname);
  try {
    let resp = await db
      .collection("products")
      .findOne({ productname: req.body.productname });
    if (!resp) {
      const { insertedId } = await db.collection("products").insertOne({
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
    res.status(500).json({
      message: "server error",
      error: e,
    });
  }
});
module.exports = router;
