
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

console.log("test")
router.get(`/`, async (req,res) => {
    const db = await getDatabase();
   const data = await db.collection("products").find().toArray();
//    const jjj = await db.collection("auth").find().toArray();
    console.log("hello, world ",data);

    res.json({Js:data})
})
router.use(`/auth`, require("./user/newUser"));
router.use(`/auth`, require("./user/doctor"));
router.use(`/auth`, require("./user/login"));
router.use(`/products`, require("./product/product.list"));
router.use(`/products`, require("./product/addproduct"));
router.use(`/products`, require("./product/update.product"));
router.use(`/products`, require("./product/removeProducts"));
router.use(`/products`, require("./product/productDetails"));
router.use(`/banner`, require("./banner/banner"));

router.use(`/appointments`, require("./appointment/appointments"));
router.use(`/library`, require("./humanLibrary/library"));
router.use(`/category`, require("./category"));
router.use(`/upload`, require("./media"));

module.exports = router;