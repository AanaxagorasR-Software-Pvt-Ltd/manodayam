
const express = require('express');
const router = express.Router();
const { startDatabase, getDatabase } = require("../db/mongo");

const multer = require('multer');
const path = require('path');
const { request } = require('http');
const validate = (req,res,next) => {
    const { query:{ id } } = req;
    if(typeof id === `undefined` | id === ``) {
        res.status(400).json({error:true,ms:`please provide js id`})
    }
    next();
}

// console.log("test");
router.get(`/`,  validate,async (req,res) => {
    const db = await getDatabase();
   const data = await db.collection("products").find().toArray();
//    const jjj = await db.collection("auth").find().toArray();
    console.log("hello, world ",data);

    res.json({Js:data})
})
router.use(`/auth`, require("./user/newUser"));
// router.use(`/auth`, require("./user/doctor"));
router.use(`/auth`, require("./user/login"));
router.use(`/auth`, require("./user/profile"));
router.use(`/products`, require("./product/product.list"));
router.use(`/products`, require("./product/addproduct"));
router.use(`/products`, require("./product/productDetails"));
router.use(`/addtocarts`, require("./addToCart/aaToCarts"));

// router.use(`/products`,require("./product/productDetails"))
router.use(`/banner`, require("./banner/banner"));
router.use(`/mastercategory`, require("./mastercategory/MasterCategory"));
router.use(`/subscription`, require("./subscription/subscription"));
router.use(`/doctors`, require("./doctorlist/doctorlists"));
router.use(`/appointments`, require("./appointment/appointments"));
router.use(`/library`, require("./humanLibrary/library"));
router.use(`/library-singlecall`, require("./humanLibrary/libraryAppoint"));
router.use(`/library-group`, require("./humanLibrary/libraryGroupAppoint"));
router.use(`/category`, require("./category"));
router.use(`/spirituality`, require("./category/spirituality"));
router.use(`/aboutCategory`, require("./category/category"));
router.use(`/category-item`, require("./category/category"));
router.use(`/category-data`, require("./category/category"));
router.use(`/question`, require("./Mcq/objectiveMcq"));
router.use(`/yesNo`, require("./Mcq/objectiveYesNo"));
router.use(`/shakthi-ques`, require("./Mcq/shakthiQuestion"));
router.use(`/appointed`, require("./appointment/appointments"));
router.use(`/upload`, require("./media"));
router.use('/otp',require("./user/forgot"));
router.use(`/audios`,require("./media/Audio"))
// router.use(`/chat`,require("./chatbot/chatbot"))

// router.use(`/audios`,require("./media/Audio"))
router.use(`/media-solutions`, require("./media-solutions"));
router.use(`./profile`,require("./user/profile"))
router.use(`/about`,require("./media/aboutus"))
router.use(`/voicechat`,require("./voicechat/voicechat"))
router.use(`/voice-assessment-question`,require("./voicechat/voiceAssessmentQuestion"))

// shakthi
router.use(`/shakthi-all`,require("./media/Audio"))
router.use('/videos', require("./media/video"));
router.use(`/shakthi-body`, require("./shakthi/body"));
router.use(`/shakthi-ott-music`, require("./shakthi/musicData"));


module.exports = router;