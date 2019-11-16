const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
let mainRoutes = require("./routes/main")

//mongodb://localhost/yelp_camp
mongoose.connect("mongodb://localhost/article1", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log("Database connected"))
.catch(err => console.log("Error: " + err.Message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(mainRoutes);

let port = 3000;
app.listen(port, () => {
    console.log("Server started on port: " + port);
});