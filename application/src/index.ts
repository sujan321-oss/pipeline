
import express from "express"
const app = express()

const PORT:number = 3000

app.get("/",(req,res)=>{
   return res.json("request is received")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
