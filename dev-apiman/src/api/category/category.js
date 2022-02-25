// const express = require("express");
// const router = express.Router();
// const { getDatabase } = require("../../db/mongo");
// const ObjectID = require("mongodb").ObjectID;
// const axios = require("axios");

// router.post("/new", async (req, res) => {
//   const db = await getDatabase();
//   const body = req.body;
//   console.log("data", req.body);

//   try {
//     let resp = await db
//       .collection("mental_health_data")
//       .findOne({ heading: body.heading });
//     if (resp) {
//       if (resp._id == body._id) {
//         resp = null;
//       }
//     }
//     if (!resp) {
//       let data = {
//         // img: body.img,
//         // name: body.name,
//         slug: body.slug,
//         heading: body.heading,
//         ques: body.ques,
//         symptoms: body.symptoms,
//         sym_1: body.sym_1,
//         sym_2: body.sym_2,
//         sym_3: body.sym_3,
//         sym_4: body.sym_4,
//         sym_5: body.sym_5,
//         para_1: body.para_1,
//         para_2: body.para_2,
//         thumbnail_image: body.thumbnail_image,
//         para_2: body.para_2,

//         status: body.status,
//       };
//       if (!body?._id) {
//         data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
//       } else {
//         data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
//       }

//       let insertedId = null;
//       let aboutCategory = await db.collection("mental_health_data");
//       if (body._id) {
//         insertedId = await aboutCategory.updateOne(
//           { _id: new ObjectID(body._id) },
//           { $set: data }
//         ).insertedId;
//       } else {
//         insertedId = await aboutCategory.insertOne(data).insertedId;
//       }

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

// router.get("/", async (req, res) => {
//   try {
//     const db = await getDatabase();
//     let dt = await db.collection("mental_health_data").find().toArray();
//     res.send(dt);
//   } catch (err) {
//     console.log("err", err.message);
//   }

//   // res.send('hello')
// });

// router.delete("/delete/:_id", async (req, res) => {
//   const _id = new ObjectID(req.params._id);
//   console.log("delete", _id);
//   try {
//     const db = await getDatabase();
//     const body = req.body;
//     let dt = await db.collection("mental_health_data").deleteOne({ _id: _id });
//     res.send({
//       message: "data deleted",
//     });
//   } catch (err) {
//     console.log("err", err.message);
//   }
//   // res.send('hello')
// });
const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const { getDatabase } = require("../../db/mongo");
const multer = require("multer");
const path = require("path");
const { env } = process;
const { DOMAIN_NAME, PORT, MEDIA_PATH } = require("../../config");

const imageStorage = multer.diskStorage({
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
    cb(undefined, true);
  },
});

router.post(
  `/new`,
  imageUpload.fields([
    { name: "video", maxCount: 1 },
    { name: "thumbnail_image", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const db = await getDatabase();
      const body = req.body;
      let data = {
        slug: body.slug,
        heading: body.heading,
        ques: body.ques,
        symptoms: body.symptoms,
        sym_1: body.sym_1,
        sym_2: body.sym_2,
        sym_3: body.sym_3,
        sym_4: body.sym_4,
        sym_5: body.sym_5,
        para_1: body.para_1,
        para_2: body.para_2,
        thumbnail_image: body.thumbnail_image,
        status: body.status,
      };
      if (typeof req.files !== "undefined") {
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
        data.video = body.video;
        data.thumbnail_image = body.thumbnail_image;
      }

      console.log(data);
      if (!body?._id) {
        data.created = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let insertedId = null;
      let vedios = await db.collection("mental_health_data");
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

    // } else {
    // 	res.status(200).json({ status: false, message: "please try again1 " });
    // }
  },
  (error, req, res, next) => {
    console.log(error);
    res.status(500).json({ status: false, message: "please try again2 " });
  }
);

router.get("/", async (req, res) => {
  try {
    const db = await getDatabase();
    let dt = await db.collection("mental_health_data").find().toArray();
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
    let dt = await db.collection("mental_health_data").deleteOne({ _id: _id });
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

// category display

const validate = (req, res, next) => {
  console.log("=cate===", req.body.collectiontypedata);
  if (req.body.collectiontypedata) {
    next();
  } else {
    res.status(400).json({
      status: false,
      message: "bad request",
    });
  }
};
router.post("/category/item", validate, async (req, res) => {
  const db = await getDatabase();

  try {
    const { collectiontypedata } = req.body;
    console.log("collectiontypedata", req.body);
    const data = await db.collection(`${collectiontypedata}`).find().toArray();
    console.log("===category===", data);
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

// mentalHealthData

router.post("/:slug", async (req, res) => {
  const slug = req.params.slug;
  const db = await getDatabase();
  try {
    const { collectiontypedata } = req.body;
    console.log("collectiontypedata", req.body);
    const data = await db
      .collection("mental_health_data")
      .find({ slug: slug })
      .toArray();
    console.log("===category===", data);
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
