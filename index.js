const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const app = express()

const { dburl } = require('./config/dbConfig')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Web Scraping</h1>")
})

const UserRouter = require('./routes/router')
const indexRouter = require('./routes/index')

app.use('/', UserRouter)
app.use('/', indexRouter)

mongoose.connect((dburl)
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


const PORT = process.env.PORT

app.listen(PORT, () => console.log(`App running port in ${PORT}`))