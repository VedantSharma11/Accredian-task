const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const authRoute = require("./routes/authRoutes");

app.use(express.json());
app.use(cors());
app.use("/auth", authRoute);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
