{/**const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Vincent:Oetm6fI0WRLYkM3c@evahelduser.xxwlfsl.mongodb.net/user_profile?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to database');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = { connectToDatabase, client }; */}