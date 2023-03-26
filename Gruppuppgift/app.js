const express = require('express'); // dra ner express
const app = express() //kör express som app

const cors = require('cors') // dra ner cors, säkerhetsgrej från att tillåta en request från origin.
//Joakim sa att vi kan skriva en app.use(()....) men enklare att bara slänga dra ner cors

app.use(cors());
app.use(express.json());
app.use('/api/groupseventodo', require('./controllers/todoController'))

module.exports = app;

