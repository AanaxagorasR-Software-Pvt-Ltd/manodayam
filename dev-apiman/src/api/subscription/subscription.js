const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const { getDatabase } = require("../../db/mongo");

const path = require("path");
const { env } = process;
const { DOMAIN_NAME, PORT, MEDIA_PATH } = require("../../config");

const validate = (req, res, next) => {
  const {
    query: { pid },
  } = req;
  if (query && pid) {
    next();
  } else {
    res.status(400).json({ status: false, message: "Please provide pid" });
  }

  console.log("data", query);
  // next()
};

// const imageStorage = multer.diskStorage({
//   // destination: `${env.MEDIA_PATH}/${env.MEDIA_TYEP_1}`,
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../../../uploads/images"))

//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "_" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });


router.post(
  `/sub`,

  async (req, res) => {
    try {

      const db = await getDatabase();
      const body = req.body;
      let data = {
        type: body.type,
        therapy: body.therapy,
        selfassessment: body.selfassessment,
        doctorassessment: body.doctorassessment,
        grouptherapy: body.grouptherapy,
        meditation: body.meditation,
        benefitsdescription: body.benefitsdescription,
        price: body.price
        



        // type: body.type,
      };

      console.log(data);
      if (!body?._id) {
        data.created = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let insertedId = null;
      let vedios = await db.collection("Subscription_Plan");
      if (body._id) {
        insertedId = await vedios.updateOne(
          { _id: new ObjectId(body._id) },
          { $set: data }
        ).insertedId;
      } else {
        insertedId = await vedios.insertOne(data).insertedId;
      }

      res.status(200).json({
        data: {
          _id: insertedId,
          ...req.body,
        },
        status: true,
        message: "data inserted",
      });

    } catch (e2) {
      res
        .status(400)
        .json({ status: false, message: "please try again later try" });
    }
  },
  (error, req, res, next) => {
    console.log(error);
    res.status(500).json({ status: false, message: "please try again2 " });
  }
);

router.post("/usersubscription", async (req, res) => {
  const db = await getDatabase();
  const body = req.body;


  try {
    let insertedId = null;
    let Addsublist = await db.collection("Users_Subscription");

    let data = await Addsublist.insertOne(body).insertedId;
    res.end()
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      message: "server error",
      error: e,
    });
  }
});
router.get("/list", async (req, res) => {
  const db = await getDatabase();
  let filter = {


  };
  if(req.query.id && req.query.id != "null" ){
    filter._id =  ObjectId(req.query.id);

  }
  try {
  
    // const { collectiontype } = req.body;
    let dt = await db.collection("Subscription_Plan").find(filter).toArray();
    res.json(dt);
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});

router.get("/", async (req, res) => {
  try {
   
    const _id = req.query._id
    const db = await getDatabase();

    // let dt = await db
    // 	.collection("appointments")
    // 	.find({ status: { $nin: ["booked"] } })
    // 	.sort({ _id: -1 })
    // 	.toArray();
    // res.send(dt);
    let result = await db
      .collection("Subscription_Plan")
      .aggregate([
        {
          $match: { _id: { $eq: new ObjectId(_id) } },
        },
       
        {
          $addFields: {
            userid: {
              $toObjectId: "$userid",
            }
           
          },
        },
        {
          $lookup: {
            from: "Users_Subscription",
            localField: "userid",
            foreignField: "_id",
            as: "subscription ",
          },
        },
        {
          $unwind: {
            path: "$subscription",
            preserveNullAndEmptyArrays: true,
          },
        },
      ])
      .toArray();
    res.json(result);
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});
router.delete("/delete/:_id", async (req, res) => {
  const _id = new ObjectId(req.params._id);
  console.log("delete", _id);

  try {
    const db = await getDatabase();
    const body = req.body;
    let dt = await db.collection("Subscription_Plan").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
    res.end();
  }

  // res.send('hello')
});


module.exports = router;
