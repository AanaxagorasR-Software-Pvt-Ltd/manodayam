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

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fieldSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
		alert("Please upload a Image");
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});



router.post(
  `/video-uploads`,
  imageUpload.single("image"),
  async (req, res) => {
    if( req.file === "jpg|png") {
      const { filename } = req.file;
      const { pid } = req.query;
      const url = DOMAIN_NAME + PORT + "/" + MEDIA_PATH + "/images/" + filename;
      try {
        const db = await getDatabase();
        const { insertedId }  = await db
        .collection("media")
        .insertOne({
          url: `${url}`,
          pid: ObjectId(pid),
        })
        if(insertedId) {
          await db
            .collection("videos")
            .updateOne(
              { _id: ObjectId(pid) },
              { $set: { pic_url: `${url}`, image_id: ObjectId(insertedId) } },
              {title: body.title},
              {slug: body.slug},
              {video_link: body.video_link},
              {description: body.description},
              {status: body.status},
            ).then(su => {
              res
            //  const ll = [db]
              .status(200)
          .json({ status: true, message: "file uploaded done" });
            }) 
            .catch(e => {
              res
              .status(200)
              .json({ status: false, message: "please try again1 " });
            })
        } else {
          res
          .status(200)
          .json({ status: false, message: "please try again later" });
        }
          
      } catch(e2) {
      res
        .status(400)
        .json({ status: false, message: "please try again later " }); 
      }
      
    } else {
      res.status(500).json({ status: false, message: "please try again2 " });
    }

  },
  (error, req, res, next) => {
    res.status(500).json({ status: false, message: "please try again3 " });

  }
);

router.get('/', async (req, res) => {

	try {
		const db = await getDatabase();
		let dt = await db
			.collection("videos")
			.find().toArray()
		res.send(dt)
	} catch (err) {
		console.log('err', err.message);
	}

	// res.send('hello')
})

// router.post("/media", (req,res) => { console.log("req",req); res.jon } )
module.exports = router;
