const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectID = require("mongodb").ObjectID;
const { env } = process;
const multer = require("multer");
const path = require("path");
const { DOMAIN_NAME, PORT, MEDIA_PATH, MEDIA_TYEP_1 } = require("../../config");

// const axios = require("axios");

console.log("skjfhcklxckj", path.join(__dirname, "../../../uploads/images"))
const imageStorage = multer.diskStorage({
  // destination: `${env.MEDIA_PATH}/${env.MEDIA_TYEP_1}`,
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../uploads/images"))
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
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

router.post("/new",imageUpload.single("img_url"), async (req, res) => {
  const db = await getDatabase();
  const body = req.body;
  console.log("data", req.body);

  try {
    let resp = await db.collection("categories").findOne({ name: body.name });
    if (resp) {
      if (resp._id == body._id) {
        resp = null;
      }
    }
    if (!resp) {
      let data = {
        img: body.img,
        name: body.name,
        slug: body.slug,
        description: body.description,
        status: body.status,
      };

      console.log(req.file);
      if (typeof req.file !== 'undefined') {
        const imagefile = req.file.filename;
        const imageurl = DOMAIN_NAME + PORT + "/" + MEDIA_PATH + "/" + MEDIA_TYEP_1 + "/" + imagefile;
        data.img_url = imageurl;
      } else {
        data.img_url = body.img_url
      } 
      
      if (!body?._id) {
        data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let insertedId = null;
      let category = await db.collection("categories");
      if (body._id) {
        insertedId = await category.updateOne(
          { _id: new ObjectID(body._id) },
          { $set: data }
        ).insertedId;

      } else {
        insertedId = await category.insertOne(data).insertedId;
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
      message: "server error",
      error: e,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const db = await getDatabase();
    let dt = await db.collection("categories").find().toArray();
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
    let dt = await db.collection("categories").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});
module.exports = router;
