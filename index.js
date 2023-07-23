const express = require('express')
const app = express()
const port = 3000
const db=require("./db/db")

db();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/user',require('./routes/user'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
