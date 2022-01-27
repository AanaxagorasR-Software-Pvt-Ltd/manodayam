const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectID = require("mongodb").ObjectID;
const EmailService = require("../Service/EmailService");
const validate = (req, res, next) => {
  const { fullname, email, phone, date, msg } = req.body;
  if (fullname && email && phone && date && msg) {
    next();
  } else {
    res.status(400).json({ status: false, message: "bad request" });
  }
};

router.post("/library_appoint", validate, async (req, res) => {
  const db = await getDatabase();
  const body = req.body;
  console.log("data", req.body);

  try {
    let data = {
      fullname: body.fullname,
      email: body.email,
      phone: body.phone,
      date: body.date,
      msg: body.msg,
      humanId: body.humanId
    };
    console.log(data);
    if (!body?._id) {
      data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    } else {
      data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    }

    let insertedId = null;
    let library_appoint = await db.collection("library_appoint");
    if (body._id) {
      insertedId = await library_appoint.updateOne(
        { _id: new ObjectID(body._id) },
        { $set: data }
      ).insertedId;
    } else {
      insertedId = await library_appoint.insertOne(data).insertedId;
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

router.get("/library_appoint", async (req, res) => {
  try { 
    const db = await getDatabase();
    let result = await db
      .collection("library_appoint").aggregate([{
        $match: {
          $or: [
            { status: { $in: ["pending"] } },
            { status: { $in: ["canceled"] } },
            { status: { $in: [null] } },
          ],
        }
      },

      {
        $addFields: {
          humanId: {
            $toObjectId: "$humanId",
          },
        },
      },
      {
        $lookup: {
          from: "library_content",
          localField: "humanId",
          foreignField: "_id",
          as: "library",
        },
      },
      {
        $unwind: {
          path: "$library",
          preserveNullAndEmptyArrays: true,
        },
      },
      ])
      .toArray();
    res.json(result);
    console.log(result);

  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});

router.get("/booked", async (req, res) => {
  try {
    const db = await getDatabase();
    let dt = await db
      .collection("library_appoint")
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
  try {
    const db = await getDatabase();
    let library_appoint = await db.collection("library_appoint");
    insertedId = await library_appoint.updateOne(
      { _id: new ObjectID(body._id) },
      { $set: { status: body.status } }
    ).insertedId;
    if (body.status == "booked") {
      let result = await db
        .collection("library_appoint")
        .aggregate([
          {
            $match: { _id: { $eq: new ObjectID(body._id) } },
          },
          {
            $addFields: {
              docid: {
                $toObjectId: "$humanId",
              },
            },
          },
          {
            $lookup: {
              from: "library_content",
              localField: "humanId",
              foreignField: "_id",
              as: "library",
            },
          },
          {
            $unwind: {
              path: "$library",
              preserveNullAndEmptyArrays: true,
            },
          },
        ])
        .toArray();
      res.json(result);
      console.log(result);




    }
  } catch (err) {
    console.log("err", err.message);
  }

  res.json({
    message: "Update successfull",
  });


  // sed email to patient
  // let details = await library_appoint.findOne({ _id: new ObjectID(body._id) });



});
router.delete("/delete/:_id", async (req, res) => {
  const _id = new ObjectID(req.params._id);
  console.log("delete", _id);

  try {
    const db = await getDatabase();
    const body = req.body;
    let dt = await db.collection("library_appoint").deleteOne({ _id: _id });
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
      let library_appoint = await db.collection("library_appoint");
      if (body._id) {
        insertedId = await library_appoint.updateOne(
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
      let library_appoint = await db.collection("library_appoint");
      if (body._id) {
        insertedId = await library_appoint.updateOne(
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
module.exports = router;
