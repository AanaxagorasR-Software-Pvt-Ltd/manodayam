const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const { getDatabase } = require("../../db/mongo");
const multer = require("multer");
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

const imageStorage = multer.diskStorage({
  // destination: `${env.MEDIA_PATH}/${env.MEDIA_TYEP_1}`,
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../uploads/images"));
  },
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
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

router.post(
  `/media`,
  imageUpload.single("image"),
  async (req, res) => {
    try {
      const db = await getDatabase();
      const body = req.body;
      let data = {
        type: body.type,
        title: body.title,
        audio_link: body.audio_link,
        description: body.description,
        category: body.category,
      };

      if (typeof req.file !== "undefined") {
        const imagefile = req.file.filename;
        const imageurl =
          DOMAIN_NAME + PORT + "/" + MEDIA_PATH + "/images/" + imagefile;
        data.image = imageurl;
        console.log("77777", imageurl)
      } else {
        data.image = body.image;
      }

      console.log(data);
      if (!body?._id) {
        data.created = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let insertedId = null;
      let vedios = await db.collection("audio");
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

router.get("/", async (req, res) => {
  const db = await getDatabase();
  let filter = {};
  if (req.query.id && req.query.id != "null") {
    filter._id = ObjectId(req.query.id);
  }
  try {
    // const { collectiontype } = req.body;
    let dt = await db.collection("audio").find(filter).toArray();
    res.json(dt);
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
    let dt = await db.collection("audio").deleteOne({ _id: _id });
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
