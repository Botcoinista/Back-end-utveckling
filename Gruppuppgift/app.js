const express = require('express'); // dra ner express
const app = express() //kör express som app

const cors = require('cors') // dra ner cors, säkerhetsgrej från att tillåta en request från origin.
//Joakim sa att vi kan skriva en app.use(()....) men enklare att bara slänga dra ner cors

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/case', require('./controllers/todoController')) // kör denna för att GET, POST PUT av tasks
app.use('/api/comment', require('./controllers/commentController')) // kör denna för att kommentera mot tasks

module.exports = app;

