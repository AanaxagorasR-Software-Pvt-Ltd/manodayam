const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const { getDatabase } = require("../../db/mongo");
const multer = require("multer");
const path = require("path");
const { env } = process;

const { DOMAIN_NAME, PORT, MEDIA_PATH } = require("../../config");

const imageStorage = multer.diskStorage({
  destination: `${env.MEDIA_PATH}/${env.MEDIA_TYEP_1}`,
  
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fieldSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

router.post(
  `/`,
  imageUpload.single("img_url"),
  async (req, res) => {
    try {
      const db = await getDatabase();
      const body = req.body;
      let data = {
        name: body.name,
        experience: body.experience,
        specialist: body.specialist,
        email: body.email,
      };

      if (typeof req.file !== "undefined") {
        const imagefile = req.file.filename;
        const imageurl =
          DOMAIN_NAME + "/" + MEDIA_PATH + "/images/" + imagefile;
        data.img_url = imageurl;
      } else {
        data.img_url = body.img_url;
      }

      console.log(data);
      if (!body?._id) {
        data.created = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let insertedId = null;
      let doctor = await db.collection("doctorListing");
      if (body._id) {
        insertedId = await doctor.updateOne(
          { _id: new ObjectId(body._id) },
          { $set: data }
        ).insertedId;
      } else {
        insertedId = await doctor.insertOne(data).insertedId;
        console.log(insertedId);
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

router.get("/", async (req, res) => {
  try {
    const db = await getDatabase();
    let dt = await db.collection("doctorListing").find().toArray();
    res.send(dt);
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
    let dt = await db.collection("doctorListing").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
    res.end();
  }

  // res.send('hello')
});

const validate = (req, res, next) => {
  console.log("=fgf===", req.body.collectionDoctor);
  if (req.body.collectionDoctor) {
    next();
  } else {
    res.status(400).json({
      status: false,
      message: "bad request",
    });
  }
};
router.post("/doctorlists", validate, async (req, res) => {
  const db = await getDatabase();

  try {
    const { collectionDoctor } = req.body;
    console.log("collectionDoctor", req.body);
    const data = await db.collection(`${collectionDoctor}`).find().toArray();
    // console.log('=====jfgjh', data);
    if (Array.isArray(data)) {
      res.status(200).json({
        data: data,
        status: true,
        message: "data fetched sucseccfully",
        id: "lllll",
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
// if (body.status=="booked") {
//   EmailService.sendEmailToPatient(body.email, body.doctor.name);
//   EmailService.sendEmailToDoctor(body.email, body.fullname);

// }
