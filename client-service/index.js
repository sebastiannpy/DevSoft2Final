const express = require('express');
const mongoose = require('mongoose');
const app = express();

const clientRoutes = require('./routes/clientRoutes');

app.use(express.json());

const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
  .then(() => console.log("MongoDB connected for CLIENT SERVICE"))
  .catch(err => console.error("Mongo connection error:", err));

app.use('/clients', clientRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Client Service running on port ${PORT}`);
});
