const express = require("express")
const router = express.Router()
const whatsappCrontroller = require("../crontrollers/whatsappCrontrollers")


router
.get("/", whatsappCrontroller.VerifyToken)
.post("/", whatsappCrontroller.ReceivedMessage)

module.exports = router