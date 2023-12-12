const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;


const dbConnect = require("./connect/db");
dbConnect();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
