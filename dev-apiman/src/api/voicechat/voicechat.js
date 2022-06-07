
const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const { getDatabase } = require("../../db/mongo");
const multer = require("multer");
const path = require("path");
const { env } = process;
const { DOMAIN_NAME, PORT, MEDIA_PATH } = require("../../config");
router.post("/new", async (req, res) => {
  const db = await getDatabase();
  const body = req.body;
  console.log("data", req.body);

  try {
    let resp = await db
      .collection("voicechat")
      .findOne({ welcome: body.welcome });
    if (resp) {
      if (resp._id == body._id) {
        resp = null;
      }
    }
    if (!resp) {
      let data = {
        welcome: body.welcome,
        first_ques: body.first_ques,
        second_ques: body.second_ques,
        third_ques: body.third_ques,
        fourth_ques: body.fourth_ques,
        fifth_ques: body.fifth_ques,
      };
      if (!body?._id) {
        data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let insertedId = null;
      let voicechat = await db.collection("voicechat");
      if (body._id) {
        insertedId = await voicechat.updateOne(
          { _id: new ObjectID(body._id) },
          { $set: data }
        ).insertedId;
      } else {
        insertedId = await voicechat.insertOne(data).insertedId;
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
const audioStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../uploads/images"));
  },
});
const audioUpload = multer({
  storage: audioStorage,
  limits: {
    fieldSize: 1000000,
  },
});
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../../../uploads/images"));
  },
  filename(req, file, cb) {
    cb(
      null,
      // Set file name to
      // filename-Date.now().extension
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  preservePath: true,
  storage,
});
console.log("upload", upload);
// uploadAudio = upload.single("audio");
// mcy - sppo - psk;

router.post(
  `/voice`,
  upload.single("audio"),
  async (req, res) => {
    try {
      const db = await getDatabase();
      const body = req.body;
      let data = {
        audio_link: body.audio_link,
        audioblob: body.audioBlob,
        fullname: body.fullname,
        mail: body.mail
      };

      const imageurl =
        DOMAIN_NAME + PORT + "/" + MEDIA_PATH + "/images/" + req.file.filename;
      data.image = imageurl;
      data.audiourl = imageurl;
      console.log(data);
      if (!body?._id) {
        data.created = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let audios = await db.collection("voicechat");
      const insertedId = await audios.insertOne(data);

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

// router.get("/", async (req, res) => {
//   const db = await getDatabase();
//   let filter = {};
//   if (req.query.id && req.query.id != "null") {
//     filter._id = ObjectId(req.query.id);
//   }
//   try {
//     // const { collectiontype } = req.body;
//     let dt = await db.collection("voicechat").find(filter).toArray();
//     res.json(dt);
//   } catch (err) {
//     console.log("err", err.message);
//   }
//   // res.send('hello')
// });
router.delete("/delete/:_id", async (req, res) => {
  const _id = new ObjectId(req.params._id);
  console.log("delete", _id);

  try {
    const db = await getDatabase();
    const body = req.body;
    let dt = await db.collection("voicechat").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
    res.end();
  }

  // res.send('hello')
});
// display
router.get("/chat/list", async (req, res) => {
  try {
    const db = await getDatabase();
    let dt = await db.collection("voicechat").find().toArray();
    res.json(dt);
  } catch (err) {
    console.log("err", err.message);
  }
});
module.exports = router;