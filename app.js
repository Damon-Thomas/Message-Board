const express = require("express");
const app = express();
const path = require("node:path");
const boardRouter = require("./routes/boardRouter")
const messageRouter = require("./routes/messageRouter")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", boardRouter)
app.use("/new", messageRouter)

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});