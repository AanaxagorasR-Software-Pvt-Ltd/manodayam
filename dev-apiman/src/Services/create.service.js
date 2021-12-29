const PatientModal  = require('../Models/Patient')
const validate      = require('../utill/validator')
const message       = require('../../constants/messages')
const sendEmail     = require('../Services/sendEmail')
async function create(req,res) {
    try {
        const { params } =  req;
        const { body   } =  req;
        if(params.usertype === "patient") {
            const userDoc =  new PatientModal(body)
            const { email,mobile } = body
            await PatientModal.find({
                $and :[{email: email}, {mobile:mobile} ]   
            })
            .then(async data=>{
                if(data.length===0) {
                    await userDoc.save(body)
                    .then(status=>{
                        res.json({
                            Error : false,
                            msg:  message.user.new
                        })
                        const name  = body.name + " " + body.lastname

                        sendEmail(name,email)
                    })
                    .catch(error=>{console.log("err",error)
                    res.json({
                        Error: true,
                        msg : message.internal.modify
                    })    
                })
                } else {
                    res.json({
                        Error : true,
                        msg : message.user.exist,
                    })
                }
            })
            .catch(erro=>{
                res.json({
                    Error :true,
                    msg:message.internal.getData
                })
            })
        }

    } catch( er) { 
       return  res.json({
            Error: 'internal error'
        })
    }
    
}
module.exports = create;