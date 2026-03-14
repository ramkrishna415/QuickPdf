require("dotenv").config()

const express = require("express")
const cors = require("cors")

const convertRoutes = require("./router/router.js")

const app = express()

app.use(cors())
app.use(express.json())




app.use("/api", convertRoutes)


app.get("/", (req, res) => {
  res.send("QuickPDF API running");
});


const port =process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port} `)
})