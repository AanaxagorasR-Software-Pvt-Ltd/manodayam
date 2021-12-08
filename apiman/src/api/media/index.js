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
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

router.post(
  `/media`,
  imageUpload.single("image"),
  async (req, res) => {
    if(typeof req.file !== "undefined") {
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
            .collection("products")
            .updateOne(
              { _id: ObjectId(pid) },
              { $set: { pic_url: `${url}`, image_id: ObjectId(insertedId) } }
            ).then(su => {
              res
            //  const ll = [db]
              .status(200)
          .json({ status: true, message: "file uploaded done" });
            }) 
            .catch(e => {
              res
              .status(200)
              .json({ status: false, message: "please try again " });
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
      res.status(200).json({ status: false, message: "please try again " });
    }

  },
  (error, req, res, next) => {
    res.status(500).json({ status: false, message: "please try again " });

  }
);

// router.post("/media", (req,res) => { console.log("req",req); res.jon } )
module.exports = router;
