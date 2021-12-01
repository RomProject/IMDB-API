const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())



app.use('/movies',require('./movies'))




app.listen(2323,()=>{console.log("Port 2323")})