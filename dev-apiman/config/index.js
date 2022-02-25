const path  =  require('path')
const dotenv = require('dotenv');
console.log(process.env,"env")
dotenv.config({
    path : path.resolve(process.cwd(), `${process.env.NODE_ENV}.env`),
    debug: process.env.DEBUG
});

module.exports = {
  email     : process.env.SUPPORT_EMAIL,
  password  : process.env.EMAIL_PASSWORD,
  db        : process.env.DB_URL,
  fbTokenURL      : process.env.FB_ACCESS_TOKEN_URL
};