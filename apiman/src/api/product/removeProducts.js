const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;

const { getDatabase } = require("../../db/mongo");

const validate = (req,res,next) => {
	console.log("data",req)
    if(req.body.id && req.body.collectiontype) {
        next()
    } else {
        res.status(400).json({
            status: false,
            message: "Bad request"
        })
    }
}
router.post("/del",validate, async (req, res) => {
  const db = await getDatabase();
  const { collectiontype="products" } = req.body  
try {
    await db
    .collection(`${collectiontype}`)
    .findOne({_id: ObjectId(req.body.id) })
    .then(async response => {
        if(response) {
            let resp,{deletedCount} = await db
            .collection(`${collectiontype}`)
            .deleteOne({_id: ObjectId(req.body.id) });
            await db.collection("media")
            .deleteOne({_id: ObjectId(response.image_id)});
            if (deletedCount) {
                res.status(200).json({
                  status: true,
                  message: "data removed"
                }); 
              } else {
                res.status(200).json({
                  message: "document no found.",
                  data: [],
                });
              }
        } else {
            res.status(200).json({
                message: "document no found.",
                data: [],
              });
        }
     
    })
    .catch(error => {
        res.status(500).json({
            message: "server error",
            error: e,
          }); 
    })
   
  } catch (e) {
    res.status(500).json({
      message: "server error",
      error: e,
    });
  }
});
module.exports = router;
