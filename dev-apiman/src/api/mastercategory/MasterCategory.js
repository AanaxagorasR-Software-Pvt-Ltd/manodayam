const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectID = require("mongodb").ObjectID;

router.post("/new", async (req, res) => {
  const db = await getDatabase();
  const body = req.body;
  console.log("data", req.body);
  

  try {
    let resp = await db
      .collection("master_category")
      .findOne({ mastercategory: body.mastercategory });
    if (resp) {
      if (resp._id == body._id) {
        resp = null;
      }
    }
    if (!resp) {
      let data = {
        mastercategory: body.mastercategory,
        status: body.status,
      };
      if (!body?._id) {
        data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let insertedId = null;
      let master_category = await db.collection("master_category");
      if (body._id) {
        insertedId = await master_category.updateOne(
          { _id: new ObjectID(body._id) },
          { $set: data }
        ).insertedId;
      } else {
        insertedId = await master_category.insertOne(data).insertedId;
      }

      res.status(200).json({
        data: {
          _id: insertedId,
          ...req.body,
        },
        status: true,
        message: "data inserted",
      });
    } else {
      res.status(200).json({
        message: "data already exist.",
        data: [],
      });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      message: "server error 1",
      error: e,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const db = await getDatabase();
    let dt = await db.collection("master_category").find().toArray();
    res.send(dt);
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});

router.delete("/delete/:_id", async (req, res) => {
  const _id = new ObjectID(req.params._id);
  console.log("delete", _id);

  try {
    const db = await getDatabase();
    const body = req.body;
    let dt = await db.collection("master_category").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});
// display banner
// const validate = (req, res, next) => {
//   console.log("=fgf===", req.body.collectiontypedata);
//   if (req.body.collectiontypedata) {
//     next();
//   } else {
//     res.status(400).json({
//       status: false,
//       message: "bad request",
//     });
//   }
// };
// router.post("/",validate, async (req, res) => {
//   const db = await getDatabase();

//   try {
//     const { collectiontypedata } = req.body;
//     console.log('collectiontypedata', req.body);
//     const data = await db.collection(`${collectiontypedata}`).find().toArray();
//     // console.log('=====jfgjh', data);
//     if (Array.isArray(data)) {
//       res.status(200).json({
//         data: data,
//         status: true,
//         message: "data fetched sucseccfully",
//         id: "kkkkk",
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
//       message: "server error 9",
//     });
//   }
// });

module.exports = router;
