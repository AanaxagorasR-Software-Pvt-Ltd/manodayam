const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectID = require("mongodb").ObjectID;

router.post("/new", async (req, res) => {
  const db = await getDatabase();
  const body = req.body;
  console.log("data", req.body);

  try {
    let resp = await db.collection("voice_assessment_question").findOne({ ans1: body.ans1 });
    if (resp) {
      if (resp._id == body._id) {
        resp = null;
      }
    }
    if (!resp) {
      let data = {
        ques: body.ques,
        ans1: body.ans1,
        ans2: body.ans2,
        ans3: body.ans3,
        ans4: body.ans4,
        rytAns: body.rytAns,
        category: body.category,
        // type: body.type
      };
      if (!body?._id) {
        data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      } else {
        data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      }

      let insertedId = null;
      let voice_assessment = await db.collection("voice_assessment_question");
      if (body._id) {
        insertedId = await voice_assessment.updateOne(
          { _id: new ObjectID(body._id) },
          { $set: data }
        ).insertedId;
      } else {
        insertedId = await voice_assessment.insertOne(data).insertedId;
      }

      res.status(200).json({
        data: {
          _id: insertedId,
          ...req.body,
        },
        status: true,
        message: "data inserted",
      });
    } else {
      res.status(200).json({
        message: "data already exist.",
        data: [],
      });
    }
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
    let dt = await db.collection("voice_assessment_question").find().toArray();
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
    let dt = await db.collection("voice_assessment_question").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});

// Display part
const validate = (req, res, next) => {
  console.log("=cate===", req.body.collectiontypedata);
  if (req.body.collectiontypedata) {
    next();
  } else {
    res.status(400).json({
      status: false,
      message: "bad request",
    });
  }
};
router.post("/voice-assessmentques", validate, async (req, res) => {
  const db = await getDatabase();

  try {
    const { collectiontypedata } = req.body;
    console.log("collectiontypedata", req.body);
    const data = await db.collection(`${collectiontypedata}`).find().toArray();
    console.log("===question-mcq===", data);
    if (Array.isArray(data)) {
      res.status(200).json({
        data: data,
        status: true,
        message: "data fetched sucseccfully",
        id: "kkkkk",
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
