const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());

require("./config/passport")(passport);

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database connected successfully ${db}`))
  .catch((err) => console.log(`Unable to connect with the database ${err}`));

const users = require("./routes/api/users");
app.use("/api/users", users);

const products = require("./routes/api/products");
app.use("/api/products", products);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
