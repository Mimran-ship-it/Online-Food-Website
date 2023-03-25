const express=require("express")
const app=express()
res.writeHead(200,{"content-type":"text/html"})
app.get("/",(req,res)=>{

    res.end()
})
app.listen(80,()=>{
    console.log("server is running")
})