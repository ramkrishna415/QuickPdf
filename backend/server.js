require("dotenv").config()

const express = require("express")
const cors = require("cors")

const convertRoutes = require("./router/router.js")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

app.use("/api", convertRoutes)

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT)
})