import express from "express"
import bodyParser from "body-parser";

import practiceRouter from "./routing/practice.js"
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/practice",practiceRouter)

const port = 1004
app.listen(port, console.log("server start"))