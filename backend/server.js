const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//creating express server
const app = express();
const port = process.env.PORT || 5000;

//creating middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully (:-DDDDD)");
})


const page1Router = require('./routes/page1');
const page2Router = require('./routes/page2');
const page3Router = require('./routes/page3');

app.use('/page1', page1Router);
app.use('/page2', page2Router);
app.use('/page3', page3Router);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

});
