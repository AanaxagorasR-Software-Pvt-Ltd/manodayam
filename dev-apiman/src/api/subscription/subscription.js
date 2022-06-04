const express = require("express");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;
// var ObjectId = require('mongodb').ObjectID;
const EmailService = require("../Service/EmailService");
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
        schedule: body.schedule,
        price: body.price,

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
          { _id: new ObjectID(body._id) },
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
    res.end();
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      message: "server error 2",
      error: e,
    });
  }
});
router.post("/bookplane", async (req, res) => {
  const data = {
    id: req.query.subid,
    email: req.query.subemail,
  };
  console.log(data);
  const db = await getDatabase();
  try {
    console.log(data);
    if (!data?._id) {
      data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    } else {
      data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    }

    let subscriptionbook = await db.collection("Subscription_Book");
    let subscriptiondata = await db
      .collection("Subscription_Book")
      .insertOne(data);
    let subscriptionplane = await db
      .collection("Subscription_Plan")
      .findOne({ _id: new ObjectID(data.id) });
    var date = new Date(subscriptionplane.schedule);
    var dates = date.toLocaleString("en-IN");

    EmailService.sendEmailToPlanebooked(data.email, subscriptionplane);
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      message: "server error",
      error: e,
    });
  }
}),
  // router.get("/list", async (req, res) => {
  //   const db = await getDatabase();

  //   // res.send('hello')
  // });


//   const schedule = require('node-schedule');
// schedule.scheduleJob('*/1 * * * *', function(){


//     console.log('err');
//     // email.send(config)
// })




  router.get("/list", async (req, res) => {
    let filter = {};
    if (req.query.usertype) {
      filter.type = req.query.usertype;
    }

    try {
      const db = await getDatabase();
      const data = await db
        .collection("Subscription_Plan")
        .find(filter)
        .sort({ type: -1 })
        .toArray();
      res.send(data);
    } catch (err) {
      console.log("err", err.message);
    }
  });

router.get("/", async (req, res) => {
  try {
    const _id = req.query._id;
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
          $match: { _id: { $eq: new ObjectID(_id) } },
        },

        {
          $addFields: {
            userid: {
              $toObjectId: "$userid",
            },
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
  const _id = new ObjectID(req.params._id);
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
