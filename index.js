const express = require('express')
const app = express()
const port = 3000
const db=require("./db/db")
var cors = require('cors')

app.use(cors())
db();

app.use(express.json())



app.use('/upload',require('./routes/uploader'))

app.listen(port, () => {
  console.log(`File uploader listening on port ${port}`)
})
