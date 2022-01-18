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
  //console.log(json.stringify(req.body))
  //const { media_type, parent_id, image } = req.body;
  //console.log("image media",media_type, parent_id, image);
  console.log("data", query);
  // next()
};

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
    // if (typeof req.files !== "undefined") {
    // const { filename } = req.files;
    // const imagefile = req.files.image[0].filename;
    // const videofile = req.files.video[0].filename
    // // const { pid } = req.query;
    // const imageurl = DOMAIN_NAME + PORT + "/" + MEDIA_PATH + "/images/" + imagefile;
    // const videourl = DOMAIN_NAME + PORT + "/" + MEDIA_PATH + "/images/" + videofile;

    try {
      const db = await getDatabase();
      const body = req.body;
      let data = {
        video_type: body.video_type,
        title: body.title,
        video_link: body.video_link,
        description: body.description,
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
      let vedios = await db.collection("videos");
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
    let dt = await db.collection("videos").find().toArray();
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
    let dt = await db.collection("videos").deleteOne({ _id: _id });
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
		let dt = await db.collection("videos").deleteOne({ _id: _id });
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
