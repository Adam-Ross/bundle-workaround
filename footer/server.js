const express = require('express')
const cors = require('cors')
const PORT = 3002
const path = require('path')

const app = express()
app.use(cors())

app.use(express.static(path.resolve(__dirname,'./client/build')))

app.get('/footer', (req, res) => {
    
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  });

app.listen(PORT, () => {
    console.log(`Header running on ${PORT}`)
})