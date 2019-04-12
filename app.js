// const express = require('express')
// const path = require('path')
// const bodyParser = require('body-parser')
// const session = require('express-session')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const errorHandler = require('errorhandler')

// mongoose.promise = global.Promise

// const app = express()

// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(session({ secret: '', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


const express = require('express')
const mongoose = require('mongoose')

const app = express()

//db config
const db = require('./config/keys').MongoURI

//mongo connect
mongoose.connect(db, { useNewUrlParser: true })
    .then(console.log('successfully connected to mongo db'))
    .catch(err => console.log(err))

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`backend running on port ${PORT}`))