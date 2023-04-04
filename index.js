const express = require("express");
const app = express();
const cors = require("cors");

const { APIResponse } = require("./model");
const database = require("./configurations/databaseConfig");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

database.connectToAtlas("APIResponse");
// database.connectToCompass("APIResponse");

app.post("/api/data", async (req, res) => {
  const apiResponse = new APIResponse({ ...req.body });

  try {
    await apiResponse.save();
    res.send(apiResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/", (req, res) => {
  res.send("Express");
});

app.listen(port, () => console.log("server started"));
