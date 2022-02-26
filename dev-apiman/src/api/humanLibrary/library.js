const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectId = require("mongodb").ObjectId;
const multer = require("multer");
const path = require("path");
const { env } = process;
const { DOMAIN_NAME, PORT, MEDIA_PATH } = require("../../config");

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
    cb(undefined, true);
  },
});

router.post(
  `/media`,
  imageUpload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 },
    { name: "thumbnail_image", maxCount: 1 },

  ]),
  async (req, res) => {
    try {
      const db = await getDatabase();
      const body = req.body;
      let data = {
        video_type: body.video_type,
        title: body.title,
        expert_email: body.expert_email,
        video_link: body.video_link,
        description: body.description,
        image: body.image,
        thumbnail_image: body.thumbnail_image,
        status: body.status,
      };
      if (typeof req.files !== "undefined") {
        if (typeof req.files.image !== "undefined") {
          const imagefile = req.files.image[0].filename;
          const imageurl =
            DOMAIN_NAME + "/" + MEDIA_PATH + "/images/" + imagefile;
          data.image = imageurl;
        } else {
          data.image = body.image;
        }
        if (typeof req.files.thumbnail_image !== "undefined") {
          const imagefile = req.files.thumbnail_image[0].filename;
          const thumbnail_imageurl =
            DOMAIN_NAME + "/" + MEDIA_PATH + "/images/" + imagefile;
          data.thumbnail_image = thumbnail_imageurl;
        } else {
          data.thumbnail_image = body.thumbnail_image;
        }

        if (typeof req.files.video !== "undefined") {
          const videofile = req.files.video[0].filename;
          const videourl =
            DOMAIN_NAME + "/" + MEDIA_PATH + "/images/" + videofile;
          data.video = videourl;
        } else {
          data.video = body.video;
        }
      } else {
        data.image = body.image;
        data.thumbnail_image = body.thumbnail_image;
        data.video = body.video;
      }

      console.log(data);
      if (!body?._id) {
        data.created = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let insertedId = null;
      let vedios = await db.collection("library_content");
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


  try {
    const db = await getDatabase();

    let dt = await db.collection("library_content").find().toArray();
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
    let dt = await db.collection("library_content").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
    res.end();
  }

  // res.send('hello')
});
router.delete("/delete/:_id", async (req, res) => {
  const _id = new ObjectId(req.params._id);
  console.log("delete", _id);

  try {
    const db = await getDatabase();
    const body = req.body;
    let dt = await db.collection("library_content").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
    res.end();
  }

  // res.send('hello')
});

////// display
const validate = (req, res, next) => {
  console.log("===library_data===", req.body.collectiondata);
  if (req.body.collectiondata) {
    next();
  } else {
    res.status(400).json({
      status: false,
      message: "bad request",
    });
  }
};
router.post("/library-data", validate, async (req, res) => {
  let filter = {


  };
  if (req.query.humanId) {
    filter._id = new ObjectId(req.query.humanId)

  }
  const db = await getDatabase();

  try {
    const { collectiondata } = req.body;
    console.log("collectiondata", req.body);
    const data = await db.collection(`${collectiondata}`).find(filter).toArray();
    // console.log('=====jfgjh', data);
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

module.exports = router;
