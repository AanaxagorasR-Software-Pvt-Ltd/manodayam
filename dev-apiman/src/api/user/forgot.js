const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const bcrypt = require("bcrypt");

const sendEmail = require("../Service/EmailService")

const { sendEmailToPatient, sendEmailForotp } = require("../Service/EmailService");
const EmailService = require("../Service/EmailService");


router.get("/user/forgot", async (req, res) => {
    const email = req.query.email
    const db = await getDatabase();
    try {
        // const { collectiontype } = req.body;
        const data = await db.collection("user").findOne({ email: email })
        console.log('|||||||||', data);
        console.log("data email", data);
        var seq_otp = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
        console.log(seq_otp);
        if (data) {
            let obj = {
                email: email,
                seq_otp: seq_otp,
                status: true,
                created: new Date()
            };
            let result = await db.collection("Forgot_Password")
                .insertOne(obj);
            EmailService.sendEmailForotp(email, seq_otp)
            res.json({ message: "mail sent", status: true });
        } else {
            return res.status(200).json({ message: "no data found", status: false });
        }
    } catch (e) {
        res.status(500).json({ message: "server error", status: false, e: e });
    }

});
router.post("/user/reset", async (req, res) => {
    const db = await getDatabase();
    try {
        const { password, otp, email } = req.body;
        const encryptedPassword = await bcrypt.hash(password, 10);
        const data = await db.collection("Forgot_Password").findOne({ email: email, seq_otp: otp })
        if (data) {
            let result = await db.collection("user").updateOne({ email: email }, { $set: { password: encryptedPassword } },);

            res.json({ message: "Password reset successfully", status: true });
        } else {
            return res.status(200).json({ message: " otp is incorrect", status: false });
        }

    } catch (error) {
        return res.status(500).json({ message: " Server error", status: false });

    }
})
module.exports = router;

//     if (Array.isArray(data)) {
//       res.status(200).json({
//         data: data,
//         status: true,
//         message: "data  sucseccfully",
//         id: "kkkkk",
//       });
//     } else {
//       res.status(200).json({
//         data: [],
//         status: false,
//         message: "no data found",
//       });
//     }
//   } catch (e) {
//     res.status(500).json({
//       status: false,
//       message: "server error",
//     });
//   }
// });



