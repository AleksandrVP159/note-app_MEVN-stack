// mongodb+srv://dbAlexandr:<password>@cluster0.jomrbjb.mongodb.net/?retryWrites=true&w=majority

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "auth-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const url =
  "mongodb+srv://dbAlexandr:2Xg-Uqp-zui-QqH@cluster0.jomrbjb.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connect");
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json());

/* app.get("/", (req, res) => {
  res.send("home page");
}); */

const NotesRoute = require("./routes/notes");
app.use("/notes", NotesRoute);

app.listen(3000, () => {
  console.log("listening");
});
