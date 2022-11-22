const express = require('express')
const app = express()
const port = 3000

const customerRoute = require('./customerRoute')
require('./connection')


app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.json())
app.use('/cust', customerRoute)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))