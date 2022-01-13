const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectID = require("mongodb").ObjectID;

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
      .find({ status: { $nin: ["booked"] } })
      .sort({ _id: -1 })
      .toArray();
    res.send(dt);
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});

router.get("/booked", async (req, res) => {
  try {
    const db = await getDatabase();
    let dt = await db
      .collection("appointments")
      .find({ status: "booked" })
      .sort({ _id: -1 })
      .toArray();
    res.send(dt);
  } catch (err) {
    console.log("err", err.message);
  }
});

router.post("/status", async (req, res) => {
  const body = req.body;
  console.log(body);
  const db = await getDatabase();
  let appointments = await db.collection("appointments");
  insertedId = await appointments.updateOne(
    { _id: new ObjectID(body._id) },
    { $set: { status: body.status } }
  ).insertedId;

  res.json({
    message: "Update successfull",
  });
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
}),
  router.post("/saveroom", async (req, res) => {
    const db = await getDatabase();
    const body = req.body;
    console.log("data", req.body);

    try {
      let data = {
        room_no: body.room_no,
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
        insertedId = await category.insertOne(data).insertedId;
      }

      res.status(200).json({
        data: {
          _id: insertedId,
          ...req.body,
        },
        status: true,
        message: "Room created successfully!",
      });
    } catch (e) {
      console.log("error", e);
      res.status(500).json({
        message: "server error",
        error: e,
      });
    }
  }),
  router.post("/changecallstatus", async (req, res) => {
    const db = await getDatabase();
    const body = req.body;

    try {
      let data = {
        call_status: body.call_status,
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
        insertedId = await category.insertOne(data).insertedId;
      }
      res.status(200).json({
        data: {
          _id: insertedId,
          ...req.body,
        },
        status: true,
        message: "Call Status Changed successfully!",
      });
    } catch (e) {
      console.log("error", e);
      res.status(500).json({
        message: "server error",
        error: e,
      });
    }
  });


// Display part
const valid = (req, res, next) => {
  console.log("=fgf===", req.body.collectiontypedata);
  if (req.body.collectiontypedata) {
    next();
  } else {
    res.status(400).json({
      status: false,
      message: "bad request",
    });
  }
};

router.post("/booklistshow",valid, async (req, res) => {
  const db = await getDatabase();

  try {
    const { collectiontypedata } = req.body;
    console.log('collectiontypedata', req.body);
    const data = await db.collection(`${collectiontypedata}`).find().toArray();
    console.log('=====jfgjh', data);
    if (Array.isArray(data)) {
      res.status(200).json({
        data: data,
        status: true,
        message: "data fetched sucseccfully",
        id: "lllll",
      });
    } else {
      res.status(200).json({
        data: [],
        status: false,
        message: "no data found",
      });
    }
  } catch (e) {
    res.status(500).json({
      status: false,
      message: "server error",
    });
  }
});


module.exports = router;
