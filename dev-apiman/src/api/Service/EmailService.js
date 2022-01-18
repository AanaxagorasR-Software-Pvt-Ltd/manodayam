const nodemailer = require("nodemailer");
const env = require('../../config')
class EmailService {

    constructor() {
        this.configure();
    }

    configure() {

        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `yogitanegi888`,
                pass: `mirabunny1998`
            }
        });
    }
    async sendEmailToDoctor(email, details) {
        try {
            let info = await this.transporter.sendMail({
                to: email,
                from: "yogitanegi888@gmail.com",
                subject: 'Your appointment has been booked.',
                html: `
                    Dear your Patient name is ${details.name} ${details.disorder} Patient ,
                    Your appointment has been booked on ${details.created}. Please check your zoom link
                    


                    `
            })

        } catch (err) {
            console.log(err);

        }





    }

    async sendEmailToPatient(email, details) {


        let info = await this.transporter.sendMail({
            to: email,
            from: `yogitanegi888@gmai.com`,
            subject: 'Your appointment has been booked.',
            html: `
                    Dear  your Docter name is ${details.name}
                    Your appointment has been booked on ${details.schedule}. Please visit the Manodayam site
                   
                `
        }); console.log(info);


    }

}
module.exports = new EmailService();
// var nodemailer = require('nodemailer');
// class EmailService {

//     async sendEmailToPatient() {


//         var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'yogitanegi888@gmail.com',
//                 pass: 'mirabunny1998'
//             }
//         });

//         var mailOptions = {
//             from: 'yogitanegi776@gmail.com',
//             to: 'yogitanegi888@gmail.com',
//             subject: 'Test Email',
//             text: `Test passed`
//         };

//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log('Email sent: ' + info.response);
//             }

//         });
//     }
// }
// module.exports =new EmailService();