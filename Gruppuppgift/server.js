const app = require('./app')

const mongoose = require('mongoose') // dra ner mongoose
const { config } = require('dotenv') // dra ner dotenv
config() //sätt igång .env


const PORT = process.env.PORT || 9999 //PORT från .env eller 9999
const SERVER_URI = `http://localhost:${PORT}` //deklarera för att slippa skriva länken, släng in port i måsvingar som vi deklarera tidigare
const MONGO_URI = process.env.MONGO_URI // länka till mongoDB från .env

app.listen(PORT, () => console.log('This server is running on ' + SERVER_URI)) // anropa och logga


//slänger en funktion för att koppla oss mot dB
const dbConnecter = () => {
  mongoose.connect(MONGO_URI) // MONGO_URI är min personliga länk mot db deklarerad i .env filen
    .then(() => {
      console.log('Connected to db')
    })
    .catch(err => { //byt lösenord-input i .env för att kontrollera om den kopplar upp mot db 
      console.log('Could not connect to db ' + err)
    })
}

dbConnecter()