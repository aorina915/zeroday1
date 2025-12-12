const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb://127.0.0.1:27017/zeroday1";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },

  password: { 
    type: String, 
    required: true, 
  },
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password needed!" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error in /signup:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("You made it man!!!");
});

app.get("/signup", (req, res) => {
  res.send("This is the signup page");
});

app.get("/contacts", (req, res) => {
  res.send("This is the contacts page");
});

app.listen(3000, () => {
  console.log("Server is running");
});
