const { Router } = require("express");
const boardRouter = Router();
const messageController = require("../controllers/messageController.js")


boardRouter.get("/", messageController.getMessages)

module.exports = boardRouter