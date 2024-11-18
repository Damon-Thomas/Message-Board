const { Router } = require("express");
const bodyParser = require('body-parser');
const messageRouter = Router();
const db = require("../model/messagedb.js")
const messageController = require("../controllers/messageController.js")

messageRouter.get("/", (req, res) => res.render("form", {links: db.links}))
messageRouter.use(bodyParser.urlencoded({ extended: true }));
messageRouter.post("/", messageController.postMessage)


module.exports = messageRouter