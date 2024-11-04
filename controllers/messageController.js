const asyncHandler = require("express-async-handler");
const db = require("../model/messagedb.js");

const postMessage = asyncHandler(async (req, res) => {
    db.messages.push({
        text: req.body.messageInput,
        user: req.body.nameInput,
        added: new Date()
    })
    res.redirect("/")
    
})



module.exports = {postMessage}