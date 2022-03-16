const express = require("express");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;
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
          $match: { userId: { $eq: req.query.userId} },
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
            localField:"productId",
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
    res.json({data:result,status:true});
  } catch (e) {
    res.status(500).json({
      status: false,
      message: "server error",
    });
  }
})
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
//           path: "$products",
//           preserveNullAndEmptyArrays: true,
//         },
//       },
//     ])
//     .toArray();
//   res.json(result);