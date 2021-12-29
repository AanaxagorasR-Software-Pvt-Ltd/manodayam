const path  =  require('path')
const dotenv = require('dotenv');
dotenv.config({
    path : path.resolve(process.cwd(), '.env'),
    debug: process.env.DEBUG
});
console.log(process.env)
module.exports = {
  email     : process.env.SUPPORT_EMAIL,
  password  : process.env.EMAIL_PASSWORD,
  db        : process.env.DB_URL

};