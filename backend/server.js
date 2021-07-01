import express from "express"
import cors from "cors"
import restaurants from "./api/restaurant.route.js"

const app = express()

//Middle Ware
app.use(cors()) //cross platform/origin resource sahring
app.use(express.json()) // parses incoming requests with JSON payloads , a body-parser

//routes
app.use("/api/v1/restaurants",restaurants)
app.use("*",(req,res)=> res.status(404).json({error: "Pages Not Found"}))

export default app