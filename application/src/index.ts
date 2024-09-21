
import express from "express"
const app = express()

const PORT:number = 3000

app.get("/",(req,res)=>{
   return res.json("server recived the received")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
