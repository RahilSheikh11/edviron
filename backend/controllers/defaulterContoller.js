const { connectToDatabase } = require("../config");

async function getDefaulters(req, res) {
  try {
    // Get an instance of our database
    const db = req.db;
    const dues = await db.collection("dues").find({}).toArray();
    const payments = await db.collection("payments").find({}).toArray();

    const defaulters = dues.filter((due) => {
      const paymentExists = payments.some(
        (payment) => payment.due_date === due.due_date
      );
      return !paymentExists;
    });
    const response = {
      statusCode: 200,
      count: defaulters.length,
      body: defaulters,
    };
    res.send(response);
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error:Getting deafulters",
      }),
    };
  }
}

async function getDefaultersLast30days(req, res) {
  try {
    // Get an instance of our database
    const db = req.db;
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const dues = await db
      .collection("dues")
      .find({ due_date: { $lte: thirtyDaysAgo } })
      .toArray();
    const payments = await db.collection("payments").find({}).toArray();

    const defaulters = dues.filter((due) => {
      const paymentExists = payments.some(
        (payment) => payment.due_date === due.due_date
      );
      return !paymentExists;
    });

    const response = {
      statusCode: 200,
      count: defaulters.length,
      body: defaulters,
    };

    res.send(response);
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error: Getting defaulters",
      }),
    };
  }
}


module.exports = {
  getDefaulters,
  getDefaultersLast30days
};
