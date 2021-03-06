const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

let database = null;
// let db = "mongodb://localhost:27017/fitness";
let db = "mongodb+srv://fitness:Su100$Br@cluster0.hotl0.mongodb.net/fitness?retryWrites=true&w=majority";
// let db = "mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb";

async function startDatabase() {
  const mongo = new MongoMemoryServer();
  //   const mongoDBURL = await mongo.getConnectionString();

  try {
    const connection = await MongoClient.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    database = connection.db();
    console.log('Database connected', database);
  } catch (err) {
    
    console.log('Database not connected');
  }
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};
