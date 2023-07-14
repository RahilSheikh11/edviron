const { MongoClient } = require('mongodb');

// Once we connect to the database once, we'll store that connection and reuse it so that we don't have to connect to the database on every request.
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const uri = 'mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net/';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB server');
    const db = client.db(); // Access the default database

    cachedDb = db;
    return db;

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

exports.handler = async (event, context) => {
  // By default, the callback waits until the runtime event loop is empty before freezing the process and returning the results to the caller.
  // Setting this property to false requests that AWS Lambda freeze the process soon after the callback is invoked, even if there are events in the event loop.
  // AWS Lambda will freeze the process, any state data, and the events in the event loop. Any remaining events in the event loop are processed when the Lambda function is next invoked, if AWS Lambda chooses to use the frozen process.
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    // Get an instance of our database
    const db = await connectToDatabase();

    // Make a MongoDB MQL Query to list all collections in the database
    // const collections = await db.listCollections().toArray();
    // const collectionNames = collections.map(collection => collection.name);
    // console.log(collectionNames);
  
  
    const transactions = await db.collection("transactions").find({}).limit(5).toArray();
 

    const dues = await db.collection("dues").find({}).toArray();
    const payments = await db.collection("payments").find({}).toArray();

  const defaulters = dues.filter(due => {
    const paymentExists = payments.some(payment => payment.due_date === due.due_date);
    return !paymentExists;
  });
  const studentIds = [...new Set(defaulters.map(defaulter => defaulter.student))];
const students = await db.collection("students").find({ _id: { $in: studentIds } }).toArray();

// const defaultersWithStudents = defaulters.map(defaulter => {
//   const student = students.find(student => student._id === defaulter.student);
//   return {
//     ...defaulter,
//     studentName: student.name,
//     studentRollNo: student.rollNo
//   };
// });

    const response = {
      statusCode: 200,
      body: JSON.stringify({students}),
    };

    return response;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
