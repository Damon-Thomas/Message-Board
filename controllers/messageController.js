const asyncHandler = require("express-async-handler");
const db = require("../model/messagedb.js");
const { insertMessage, getAllMessages } = require("../model/queries.js");


const postMessage = asyncHandler(async (req, res) => {
    insertMessage(req.body.nameInput, req.body.messageInput, new Date())
    res.redirect("/")
    
})

const getMessages = asyncHandler(async (req, res) => {
    let messages = await getAllMessages()
    console.log('messages', messages)
    res.render("index", {links: db.links, messages: messages})
    res.end()
})


module.exports = {postMessage, getMessages}