const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

const cardRoutes = require("./routes/cards");
const mtgCardRoutes = require("./routes/mtgCards");

// MongoDB Connection
const MONGO_URL = "mongodb://localhost:27017/etherEchoDB";

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Connected to MongoDB");
  })
  .on("error", (error) => {
    console.log("Connection error:", error);
  });

// Middleware and Routes
app.use(cors());
app.use(express.json());
app.use("/api/cards", cardRoutes);
app.use("/api/mtg", mtgCardRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to EtherEcho API!");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
