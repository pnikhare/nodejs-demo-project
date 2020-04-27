const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors())
//var router = require("./router");
// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.sendFile('index.html',{root: __dirname }))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))