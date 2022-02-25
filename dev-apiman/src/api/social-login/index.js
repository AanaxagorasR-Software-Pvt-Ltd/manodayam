const express = require("express");
const Axios = require("axios");
const router = express.Router();
const bcrypt = require("bcrypt");
const config =  require('../../config/');
const jwt = require("jsonwebtoken");
const { getDatabase } = require("../../db/mongo");
const validate = (req,res,next) => {
    const { token } = req.body
    console.log("====req",req)
    if(token) {

        next()
    } else {
    res.status(400).json({ status: false, message: "Bad request" });

    }
}
router.post("/", validate, async (req, res) => {
    const db = await getDatabase();
    // console.log("process",config)
    const { token } = req.body
    
    try {
        
        if(token) {
            const {data} = await Axios({
                url: 'https://graph.facebook.com/me',
                method: 'get',
                params: {
                  fields: ['id', 'email', 'first_name', 'last_name'].join(','),
                  access_token: token,
                },
              });
            //   console.log(UserData);
            if(data && typeof data.email !== "undefined" ) {
                const encryptedPassword = await bcrypt.hash(data.id, 10);
                const user = await db.collection("users").findOne({ email: data.email });
                console.log("====user",user)
                if(!user) {
                    db.collection("users")
                    .insertOne({
                    name: data.name,
                    email: data.email,
                    password: encryptedPassword,
                    // type: type,
                    })
                    .then((resp) => {
                    
                        const token = jwt.sign( {
                            email: data.email,
                            password: data.id,
                          },
                          "STERETE8998858JUJFHKJ*8",
                          { expiresIn: 9860 }
                        );
                  
                        res.send({ message: "login sucessfully", status: true, token: token });
                    
                    // alert('New user created')

                    })
                    .catch((e) => {
                        res.status(200).json({
                            message: "please try again later ",
                            status: false,
                            data: [],
                        });
                    });
                } else {
                    const token = jwt.sign( {
                        email: data.email,
                        password: data.id,
                      },
                      "STERETE8998858JUJFHKJ*8",
                      { expiresIn: 9860 }
                    );
              
                    res.send({ message: "login sucessfully", status: true, token: token });
                }
               
            } else {
                res.status(200).json({
                    data: data,
                    status: false
                })
            }
              
        }

     
    } catch (e) {
        console.log("e error",e)
      res
        .status(500)
        .json({ message: "please try again later!", status: false, e: e });
    }
  });
  module.exports = router;
  