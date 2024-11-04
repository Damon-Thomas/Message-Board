const { Router } = require("express");
const boardRouter = Router();
const db = require("../model/messagedb.js")



boardRouter.get("/", (req, res) => res.render("index", {links: db.links, messages: db.messages}))


module.exports = boardRouter