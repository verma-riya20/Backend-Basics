const express = require('express')
const fs=require('fs')
const app = express()
const port = 3000
//Middleware 1
app.use((req, res, next) => {
    fs.appendFileSync("log.txt",`${Date.now()} is a ${req.method}`)
    next()
  })
  //Middleware2
  app.use((req,res,next)=>{
    console.log("middleware2")
    next() 
  }
 
)

app.get('/', (req, res) => {
  res.send('Hello World4!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})