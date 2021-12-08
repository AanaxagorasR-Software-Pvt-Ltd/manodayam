const PatientModal = require("../Models/Patient");

async function ListData(req, res) {
  const { params } = req;
  switch (params.usertype) {
    case "patient":
      await PatientModal.find({})
        .then((list) => {
          res.json(list);
        })
        .catch((erro) => console.log("error", erro));
      break;
    case "doctor":
      return;
    case "lab":
      return;
    case "medicaltore":
      return;
    default:
      return;
  }
}

module.exports = ListData;
