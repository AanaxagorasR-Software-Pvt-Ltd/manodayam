const express = require("express");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;
// var ObjectId = require('mongodb').ObjectID;
const EmailService = require("../Service/EmailService");
const { getDatabase } = require("../../db/mongo");
const moment = require('moment')
const schedule = require('node-schedule');

schedule.scheduleJob('* * * * *', async function () {
    let now = new Date();
    let matchDate = moment(now).add(1, 'week').toDate().toJSON().slice(0, 10).replace(/-/g, "-");
    const db= await getDatabase();
    let schedule = await db.collection("Subscription_Book").aggregate([
        {
          '$addFields': {
            'subId': {
              '$toObjectId': '$id'
            }
          }
        }, {
          '$lookup': {
            'from': 'Subscription_Plan', 
            'localField': 'subId', 
            'foreignField': '_id', 
            'as': 'subscription'
          }
        }, {
          '$lookup': {
            'from': 'user', 
            'localField': 'email', 
            'foreignField': 'email', 
            'as': 'user'
          }
        }, {
          '$match': {
            'endDate': '2023-01-04'
            //'endDate': matchDate
          }
        }, {
          '$unwind': {
            'path': '$subscription'
          }
        }, {
          '$unwind': {
            'path': '$user'
          }
        }
      ]).toArray();
      for (let item of schedule) {
        console.log("item", item);
        EmailService.sendEmailToscheduler(item);
        
      }
    console.log(schedule);
    // email.send(config)
})
module.exports = schedule;