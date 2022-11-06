// mock-data.json daki datayı mongo db ye yükleyeceğiz
// kodu yazdıktan sonra terminale aşağıdaki ifadeyi yaz
//  node populate

require('dotenv').config();

const mockData = require('./mock-data.json');

const Job = require('./models/Job');

const connectDB = require('./db/connect');


const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.create(mockData);
    console.log('success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start()