const express = require("express");
const router = express.Router();
const { getDatabase } = require("../../db/mongo");
const ObjectID = require("mongodb").ObjectID;
const EmailService = require("../Service/EmailService");
const validate = (req, res, next) => {
  const { fullname, email, mobileNmb, schedule, disorder, msg, docid } =
    req.body;
  if (fullname && email && mobileNmb && disorder && schedule && msg && docid) {
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
      docid: body.docid,
	  userId:body.userId

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

    // let dt = await db
    // 	.collection("appointments")
    // 	.find({ status: { $nin: ["booked"] } })
    // 	.sort({ _id: -1 })
    // 	.toArray();
    // res.send(dt);
    let result = await db
      .collection("appointments")
      .aggregate([
        {
          $match: {
            $or: [
              { status: { $in: ["pending"] } },
              { status: { $in: ["canceled"] } },
              { status: { $in: [null] } },
            ],
          },
        },
        {
          $addFields: {
            docid: {
              $toObjectId: "$docid",
            },
          },
        },
        {
          $lookup: {
            from: "doctorListing",
            localField: "docid",
            foreignField: "_id",
            as: "doctor",
          },
        },
        {
          $unwind: {
            path: "$doctor",
            preserveNullAndEmptyArrays: true,
          },
        },
      ])
      .toArray();
    res.json(result);
  } catch (err) {
    console.log("err", err.message);
  }

  // res.send('hello')
});

router.get("/booked", async (req, res) => {
  try {
	  let filter = {
		status: "booked"
	  };
	  if (req.query.userId)  {
		filter.userId = req.query.userId
	  } 
	// ('id: ' + req.query.id);
    const db = await getDatabase();
    let dt = await db
      .collection("appointments")
      .find(filter)
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
		let appointments = await db.collection("appointments");
		insertedId = await appointments.updateOne(
			{ _id: new ObjectID(body._id) },
			{ $set: { status: body.status } }
		).insertedId;

		// sed email to patient
		// let details = await appointments.findOne({ _id: new ObjectID(body._id) });
		if (body.status == "booked") {
			let result = await db
				.collection("appointments")
				.aggregate([
					{
						$match: { _id: { $eq: new ObjectID(body._id) } },
					},
					{
						$addFields: {
							docid: {
								$toObjectId: "$docid",
							},
						},
					},
					{
						$lookup: {
							from: "doctorListing",
							localField: "docid",
							foreignField: "_id",
							as: "doctor",
						},
					},
					{
						$unwind: {
							path: "$doctor",
							preserveNullAndEmptyArrays: true,
						},
					},
				])
				.toArray();
			res.json(result);
			console.log(result);
			var dat = new Date(result[0].schedule)
			var datess=dat.toLocaleString('en-IN');
			EmailService.sendEmailToPatient(result[0].email, {
				name: result[0].doctor.name,
				schedule: datess,email: result[0].doctor.email
			});
			EmailService.sendEmailToDoctor(result[0].doctor.email, {
				name: result[0].fullname,
				schedule: datess,
				disorder: result[0].disorder,email: result[0].email
			});
		}
	} catch (err) {
		console.log("err", err.message);
	}

	// res.json({
	// 	message: "Update successfull",
	// });
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
			let appointments = await db.collection("appointments")

			if (body._id) {
				insertedId = await appointments.updateOne(
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

			
			
			let appointmentdata = await db
				.collection("doctorListing").findOne({_id: new ObjectID(body.docid)})
				var date = new Date(body.schedule)
				var dates=date.toLocaleString('en-IN');
				

			EmailService.sendEmailToDoctorbooked(appointmentdata.email, { name: body.fullname, created: dates, disorder: body.disorder ,email:body.email,room_no:body.room_no});
			EmailService.sendEmailToPatientbooked(body.email, { name: appointmentdata.name, created:dates, disorder: body.disorder, email: appointmentdata.email })
		}

		catch (e) {
			console.log("error", e);
			res.status(500).json({
				message: "server error",
				error: e,
			});
		}
	}),

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
			let appointments = await db.collection("appointments");
			if (body._id) {
				insertedId = await appointments.updateOne(
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
