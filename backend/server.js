require("dotenv").config()

const express = require("express")
const cors = require("cors")

const convertRoutes = require("./router/router.js")

const app = express()

app.use(cors())
app.use(express.json())



app.use("/api", convertRoutes)

const port =process.env.PORT ||5000

app.listen(port, () => {
  console.log("Server running on port " + process.env.PORT)
})