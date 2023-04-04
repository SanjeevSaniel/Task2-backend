const mongoose = require("mongoose");

function connectToAtlas(database) {
  const credentials = {
    username: "sanjeev",
    password: "sanjeev77",
  };
  mongoose
    .connect(
      `mongodb+srv://${credentials.username}:${credentials.password}@cluster0.tl5agnc.mongodb.net/${database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Couldn't connect to MongoDB...", err));
}

function connectToCompass(database) {
  mongoose
    .connect(
      `mongodb://127.0.0.1:27017/${database}?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0/`,
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("Connected to MongoDB Compass.");
    })
    .catch((err) => {
      console.error("MongoDB connection error: %s \n", err);
    });
}

module.exports = { connectToAtlas, connectToCompass };
