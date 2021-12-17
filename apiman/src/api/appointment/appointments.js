const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectID = require("mongodb").ObjectID;

const appointment = require("../../Model/appointment");
const validate = (req, res, next) => {
  const { fullname, email, mobileNmb, schedule, disorder, msg } = req.body;
  if (fullname && email && mobileNmb && disorder && schedule && msg) {
    next();
  } else {
    res.status(400).json({ status: false, message: "bad request" });
  }
};
router.post("/appoint", async (req, res) => {
  const db = await getDatabase();
  const body = req.body;
  console.log("data", req.body);

  try {
    let data = {
      fullname: body.fullname,
      email: body.email,
      mobileNmb: body.mobileNmb,
      disorder: body.disorder,
      schedule: body.schedule,
      msg: body.msg,
      status: body.status,
    };
    console.log(data);
    if (!body?._id) {
      data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    } else {
      data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    }

    let insertedId = null;
    let appointments = await db.collection("appointments");
    if (body._id) {
      insertedId = await appointments.updateOne(
        { _id: new ObjectID(body._id) },
        { $set: data }
      ).insertedId;
    } else {
      insertedId = await appointments.insertOne(data).insertedId;
    }

    res.status(200).json({
      data: {
        _id: insertedId,
        ...req.body,
      },
      status: true,
      message: "data inserted",
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      message: "server error",
      error: e,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const db = await getDatabase();
    let dt = await db
      .collection("appointments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.send(dt);
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});

router.delete("/delete/:_id", async (req, res) => {
  const _id = new ObjectID(req.params._id);
  console.log("delete", _id);

  try {
    const db = await getDatabase();
    const body = req.body;
    let dt = await db.collection("appointments").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});

module.exports = router;
