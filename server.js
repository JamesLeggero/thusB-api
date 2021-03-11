require('dotenv').config()
const express = require('express')
const path = require ('path')

const app = express()

app.use(express.json( { extended: false } ))

const PORT = process.env.PORT || 3001
const db = require('./config/database')

db.authenticate()
    .then(()=> console.log('Database connected'))
    .catch(err => console.log('Error: ' + err))

app.get('/', (req, res) => res.send('INDEX'))

app.use('/users', require('./controllers/users'))

app.listen(PORT, ()=> {
    console.log('scarem ' + PORT)
})
