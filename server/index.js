const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require('./handlers/error')
const searchRoutes = require('./routes/search')
const viewRoutes = require('./routes/viewed')

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', searchRoutes)
app.use('/api',viewRoutes)

app.use((req, res, next) => {
  let error = new Error("Not Found");
    error.code = 404
  next(error);
});

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(PORT);
});