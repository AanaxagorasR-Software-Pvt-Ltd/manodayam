const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const { getDatabase } = require("../../db/mongo");
// const projectDetails = require('./data2');

// console.log("#########", projectDetails);


router.get("/:slug", async (req, res) => {
  const slug = req.params.slug
  const db = await getDatabase();
  try {
    const { collectiontype } = req.body;
    const data = await db.collection("products").find({ slug: slug }).toArray();
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
router.post("/addtocarts", async (req, res) => {
  // res.send('hello');


  //   const cart=req.body
  //   const db = await getDatabase();
  //  const data = await db.collection("Add_to_cartlist").insertOne(cart)
  try {

    const cart = req.body
    const db = await getDatabase();
    const data = await db.collection("Add_to_cartlist").insertOne(cart)
    console.log('|||||||||', data);
    res.json({
      status: true,
      message: "successfully add",
    })

  } catch (e) {
    res.status(500).json({
      status: false,
      message: "server error",
    });
  }


});

router.post('/allcart', async (req, res) => {
  const db = await getDatabase();
  console.log("hyyyyyyyy")
  try {

    let result = await db
      .collection("Add_to_cartlist")
      .aggregate([
        {
          $match: { userId: { $eq: req.query.userId } },
        },

        {
          $addFields: {
            productId: {
              $toObjectId: "$productId",
            },
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "products",
          },
        },
        {
          $unwind: {
            path: "$products",
            preserveNullAndEmptyArrays: true,
          },
        },
      ])
      .toArray();
    res.json({ data: result, status: true });
  } catch (e) {
    res.status(500).json({
      status: false,
      message: "server error",
    });
  }
})
router.delete("/deletecart/:_id", async (req, res) => {
  const _id = new ObjectId(req.params._id);
  console.log("deletes fsdf", _id);

  try {
    const db = await getDatabase();

    const body = req.body;
    let dt = await db.collection("Add_to_cartlist").deleteOne({ _id: _id });
    console.log("Log ", dt);
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
    res.end();
  }

  // res.send('hello')
});

router.post("/quantity", async (req, res) => {
  const db = await getDatabase();
  const body = req.body;


  try {
    let insertedId = null;
    let Addcartlist = await db.collection("Add_to_cartlist");

    insertedId = await Addcartlist.updateOne(
      { _id: new ObjectId(body._id) },
      { $set: { quantity: body.quantity } }
    )
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      message: "server error",
      error: e,
    });
  }
});
router.post("/orderdetails", async (req, res) => {
  const db = await getDatabase();

  try {
    const cart = req.body
    cart.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    const data = await db.collection("Order_list").insertOne(cart)
    console.log('orderlist', data);
    res.json({
      status: true,
      message: "successfully add",
    })

  } catch (err) {
    console.log("error", err);
    res.status(500).json({
      message: "server error",
      error: err,
    });
  }
});
module.exports = router;
// try {
//   let result = await db
//     .collection("Add_to_cartlist")
//     .aggregate([
//       {
//         $match: { userId: { $eq: new ObjectID(req.body.userId) } },
//       },

//       {
//         $addFields: {
//           userId: {
//             $toObjectId: "$userId",
//           },
//         },
//       },
//       {
//         $lookup: {
//           from: "products",
//           localField: "userId",
//           foreignField: "_id",
//           as: "products",
//         },
//       },
//       {
//         $unwind: {
//            path: "$products",
//           preserveNullAndEmptyArrays: true,
//         },
//       },
//     ])
//     .toArray();
//   res.json(result);