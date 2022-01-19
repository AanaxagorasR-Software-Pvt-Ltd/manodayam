const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectId = require("mongodb").ObjectId;
const multer = require("multer");
const path = require("path");
const { env } = process;
const { DOMAIN_NAME, PORT, MEDIA_PATH } = require("../../config");

// const validate = (req, res, next) => {
//   const { fullname, email, phone, date, msg } = req.body;
//   if (fullname && email && phone && date && msg) {
//     next();
//   } else {
//     res.status(400).json({ status: false, message: "bad request" });
//   }
// };
// router.post("/digitalHumanLibrary", validate, async (req, res) => {
//   const db = await getDatabase();
//   const { fullname, email, phone, date, msg } = req.body;

//   try {
//     let resp = await db.collection("humanLibrary").findOne({
//       $and: [
//         { fullname: fullname },
//         { email: email },
//         { phone: phone },
//         { date: date },
//         { msg: msg },
//       ],
//     });
//     if (!resp) {
//       const { insertedId } = await db.collection("humanLibrary").insertOne({
//         ...req.body,
//       });

//       res.status(200).json({
//         data: {
//           _id: insertedId,
//           ...req.body,
//         },
//         status: true,
//         message: "data inserted",
//       });
//     } else {
//       res.status(200).json({
//         message: "data already exist.",
//         data: [],
//       });
//     }
//   } catch (e) {
//     console.log("error", e);
//     res.status(500).json({
//       message: "server error",
//       error: e,
//     });
//   }
// });

///////
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
    cb(undefined, true);
  },
});

router.post(
  `/media`,
  imageUpload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const db = await getDatabase();
      const body = req.body;
      let data = {
        video_type: body.video_type,
        title: body.title,
        video_link: body.video_link,
        description: body.description,
        auth_image: body.auth_image,
        status: body.status,
      };
      if (typeof req.files !== "undefined") {
        if (typeof req.files.image !== "undefined") {
          const imagefile = req.files.image[0].filename;
          const imageurl =
            DOMAIN_NAME + PORT + "/" + MEDIA_PATH + "/images/" + imagefile;
          data.image = imageurl;
        } else {
          data.image = body.image;
        }
        if (typeof req.files.video !== "undefined") {
          const videofile = req.files.video[0].filename;
          const videourl =
            DOMAIN_NAME + PORT + "/" + MEDIA_PATH + "/images/" + videofile;
          data.vedio = videourl;
        } else {
          data.video = body.video;
        }
      } else {
        data.image = body.image;
        data.vedio = body.video;
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
module.exports = router;
