const express = require("express")
const multer = require("multer")

const { convertFile } = require("../controller/controller.js")

const router = express.Router()

const upload = multer({ dest: "uploads/" })

router.post("/:tool", upload.single("file"), convertFile)

module.exports = router