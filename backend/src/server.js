const express = require("express");
const route = require("./route/routes.js");

const app = express();

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
    res.json({ message: "it nihongo backend." });
});

// require("./route/routes.js")(app);
route(app);

// set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

app.listen(8081, () => {
    console.log("Server is running on port 8081.");
});
