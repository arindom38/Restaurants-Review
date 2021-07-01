import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

//configure environment
dotenv.config()

//mongodb client
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

//DB connection
MongoClient.connect(
    process.env.RESTREVIEW_DB_URI, //DB connection end point
    {
        poolSize: 50, // maxumum 50 client can connect
        wtimeout: 2500, //after 2 second request will time out
        useNewUrlParser: true
    }
)
.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{
    app.listen(port,()=>{
        console.log(`Listening to port: ${port}`)
    })
})