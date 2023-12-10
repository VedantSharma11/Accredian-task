const bcrypt = require("bcrypt");
const db = require("../database/connection");
const saltRounds = 10;


const handleLogin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required" });
    return;
  }
  const query = "SELECT * FROM users_table WHERE username = ?";
  db.query(query, [username], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Server error , Please Try Again" });
    }
    if (result.length === 0) {
      res.status(400).json({ message: "Invalid username or password" });
      return;
    }
    const passwordHash = result[0].Password;
    bcrypt.compare(password, passwordHash, function (err, result) {
      if (err) {
        console.error(err.message);
        res.status(500).send("Server error");
        return;
      }
      if (result) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(400).json({ message: "Invalid username or password" });
      }
    });
  });
};

const handleRegister = (req, res) => {
  const { email, username, password, c_password } = req.body;
  if (!username || !password || !email) {
    res.status(400).json({ message: "Username and password are required" });
    return;
  }
  if (password !== c_password) {
        res.status(400).json({ message: "Passwords do not match" });
        return;
  }
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
      return;
    }
    const query = "INSERT INTO users_table (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username,email,hash], (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          res.status(400).json({ message: "Username already exists" });
        } else {
          console.error(err.message);
          res.status(500).json({ message: "Server error , Please Try Again" });
        }
      } else {
        res.status(201).json({ message: "Users added successfully" });
      }
    });
  });
};


module.exports = {handleLogin, handleRegister};