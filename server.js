const mongoose = require("mongoose");
const express = require('express')
const app = express()
const route = require("./routes/route")
// const auth = require("./middleware/auth");

app.use(express.json())

const port = 3000


mongoose
  .connect(
    `mongodb://localhost:27017/myapp34`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));


app.use("/api",route);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
