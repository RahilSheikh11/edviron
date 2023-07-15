
	
const serverless = require('serverless-http');
const express = require('express');
const { connectToDatabase } = require('./config');

const app = express()

app.use(async (req, res, next) => {
  try {
    const db = await connectToDatabase();
    req.db = db;
    next();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


const defaulterRoutes = require("./routes/defaulterRoutes")
app.use("/api/defaulters", defaulterRoutes);
 

const studentsRoutes = require("./routes/studentRoutes")
app.use("/api/students", studentsRoutes);
 



module.exports.handler = serverless(app);
