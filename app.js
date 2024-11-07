const express = require("express");
const app = express();
const path = require("node:path");
const boardRouter = require("./routes/boardRouter")
const messageRouter = require("./routes/messageRouter")

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", boardRouter)
app.use("/new", messageRouter)
app.get("*",(req, res) => res.render("./errors/404.ejs") )

const PORT = process.env.PORT || 3000;;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});