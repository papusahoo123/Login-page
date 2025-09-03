import express from 'express'
import cors from 'cors'
import authRouter  from './routes/auth.js'
import connectioToMongoDB from './db/db.js'



const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/auth",authRouter )



app.listen(5000, () =>{
    connectioToMongoDB()
    console.log("Server is running ")
})