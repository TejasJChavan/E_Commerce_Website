import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const port = 8080;
const saltRounds = 10;
const server = express();
server.use(cors());

const db = new pg.Client({
  database: "vendora",
  host: "localhost",
  user: "postgres",
  password: "tEj@ 5",
  port: 5432,
});
db.connect();

server.use(bodyParser.json()); // To parse JSON bodies
server.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies

server.get("/", (req, res) => {
  res.status(200).send();
});

server.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email and Password cannot be empty!" });
  }
  try {
    const response = (
      await db.query("SELECT * FROM users WHERE user_email=$1", [email])
    ).rows;
    if (response.length > 0) {
      const { user_email: email, password: check_password } = response[0];
      bcrypt.compare(password, check_password, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          if (result) {
            res.status(201).json({ message: "Logged in successfully!" });
          } else if (!result) {
            res.status(400).json({ error: "Invalid login or password. Please try again." });
          } else {
            res.status(500).json({ error: "Something went" });
          }
        }
      });
    } else {
        res.status(400).json({error:"User not found. Try registering."});
    }
  } catch (err) {
    console.log(err);
  }
});

server.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ error: "Email and Password fields cannot be empty!" });
  }

  try {
    const response = await db.query("SELECT * FROM users WHERE user_email=$1", [
      email,
    ]);
    if (response.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "User already exists! Try logging in." });
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          return console.log("Error hashing password.");
        } else {
          const response = await db.query(
            "INSERT INTO users (user_email, password) VALUES ($1, $2)",
            [email, hash]
          );
          return res.status(201).json({ message: "Successfully Registered." });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

server.get("/data", async (req, res) => {
  const response = (await db.query("SELECT * FROM users")).rows;
  res.send(response);
});

server.listen(port, () => {
  console.log(`Server live at http://localhost:${port}`);
});
