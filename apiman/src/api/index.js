
const express = require('express');
const router = express.Router();
const { startDatabase, getDatabase } = require("../db/mongo");

const multer = require('multer');
const path = require('path');
const validate = (req,res,next) => {
    const { query:{ id } } = req;
    if(typeof id === `undefined` | id === ``) {
        res.status(400).json({error:true,ms:`please provide js id`})
    }
    next();
}

console.log("test");
router.get(`/`,  validate,async (req,res) => {
    const db = await getDatabase();
   const data = await db.collection("products").find().toArray();
//    const jjj = await db.collection("auth").find().toArray();
    console.log("hello, world ",data);

    res.json({Js:data})
})
router.use(`/auth`, require("./user/newUser"));
router.use(`/auth`, require("./user/doctor"));
router.use(`/auth`, require("./user/login"));
router.use(`/auth`, require("./user/profile"));
router.use(`/products`, require("./product/product.list"));
router.use(`/products`, require("./product/addproduct"));
router.use(`/products`, require("./product/update.product"));
router.use(`/products`, require("./product/removeProducts"));
router.use(`/products`, require("./product/productDetails"));

router.use(`/addcarts`, require("./addToCart/aaToCarts"));

router.use(`/banner`, require("./banner/banner"));
router.use(`/doctors`, require("./doctorlist/doctorlists"));
router.use(`/mcq`, require("./objectiveMcq/objectiveMcqs"));
router.use(`/appointments`, require("./appointment/appointments"));
router.use(`/library`, require("./humanLibrary/library"));
router.use(`/category`, require("./category"));
router.use(`/upload`, require("./media"));
<<<<<<< HEAD
router.use('/videos', require("./media/video"));
=======
router.use('/videos', 
// (req, res)=>{
//     res.send('111')
// },
require("./media/video")
);

>>>>>>> f2234b26b04abe4facc6c67fbe03ac0fd831a8d6
router.use(`/media-solutions`, require("./media-solutions"));

// shakthi
router.use(`/shakthi-sleep`, require("./shakthi/sleep"));
router.use(`/shakthi-meditate`, require("./shakthi/meditate"));
router.use(`/shakthi-music`, require("./shakthi/music"));
router.use(`/shakthi-masterclass`, require("./shakthi/masterclass"));
router.use(`/shakthi-body`, require("./shakthi/body"));
router.use(`/shakthi-scene`, require("./shakthi/scene"));


module.exports = router;