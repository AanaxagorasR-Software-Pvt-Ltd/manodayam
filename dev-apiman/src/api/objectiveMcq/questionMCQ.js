const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectID = require('mongodb').ObjectID;



router.post("/mcq", async (req, res) => {
  const db = await getDatabase();
  const body = req.body;
  console.log("data", req.body);

  try {
    let data = {
      ques: body.ques,
      ans1: body.ans1,
      ans2: body.ans2,
      ans3: body.ans3,
      ans4: body.ans4,
      rytAns: body.rytAns,
      datetime: body.datetime,
    };
    console.log(data);
    if (!body?._id) {
      data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    } else {
      data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    }

    let insertedId = null;
    let question_mcq = await db.collection("question_mcq");
    if (body._id) {
      insertedId = await question_mcq.updateOne(
        { _id: new ObjectID(body._id) },
        { $set: data }
      ).insertedId;
    } else {
      insertedId = await question_mcq.insertOne(data).insertedId;
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
      .collection("question_mcq")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.send(dt);
  } catch (err) {
    console.log("err", err.message);
  }

	// res.send('hello')
})

router.get('/booked', async (req, res) => {

	try {
		const db = await getDatabase();
		let dt = await db
			.collection("question_mcq")
			.find({status:'booked'}).sort({ '_id': -1 }).toArray()
		res.send(dt)
	} catch (err) {
		console.log('err', err.message);
	}

	// res.send('hello')
})

router.delete("/delete/:_id", async (req, res) => {
  const _id = new ObjectID(req.params._id);
  console.log("delete", _id);

  try {
    const db = await getDatabase();
    const body = req.body;
    let dt = await db.collection("question_mcq").deleteOne({ _id: _id });
    res.send({
      message: "data deleted",
    });
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});

router.post('/saveroom', async (req, res) => {
	const db = await getDatabase();
	const body = req.body;
	console.log('data', req.body);

	try {
		
		let data = {
			room_no: body.room_no,
		}
		console.log(data);
		if (!body?._id) {
			data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
		} else {
			data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
		}

		let insertedId = null;
		let question_mcq = await db.collection("question_mcq");
		if (body._id) {
			insertedId = await question_mcq.updateOne(
				{ _id: new ObjectID(body._id) },
				{ $set: data },
			).insertedId;
		}
    else {
      insertedId = await category.insertOne(data).insertedId;
    }

		res.status(200).json({
			data: {
				_id: insertedId,
				...req.body
			},
			status: true,
			message: "Room created successfully!"
		});
	}

catch (e) {
	console.log("error", e);
	res.status(500).json({
		message: "server error",
		error: e,
	});
}
});

router.post('/changecallstatus', async (req, res) => {
	const db = await getDatabase();
	const body = req.body;

	try {
		
		let data = {
			call_status: body.call_status,
		}
		console.log(data);
		if (!body?._id) {
			data.createdAt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
		} else {
			data.updatedAt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
		}

		let insertedId = null;
		let question_mcq = await db.collection("question_mcq");
		if (body._id) {
			insertedId = await question_mcq.updateOne(
				{ _id: new ObjectID(body._id) },
				{ $set: data },
			).insertedId;
		}
    else {
      insertedId = await category.insertOne(data).insertedId;
    }
		res.status(200).json({
			data: {
				_id: insertedId,
				...req.body
			},
			status: true,
			message: "Call Status Changed successfully!"
		});
	}

catch (e) {
	console.log("error", e);
	res.status(500).json({
		message: "server error",
		error: e,
	});
}
});
module.exports = router;
