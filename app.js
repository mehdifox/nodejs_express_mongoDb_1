const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://ayoubramic50:3SeP86bFnODHfWnv@mongodb.e0oau.mongodb.net/?retryWrites=true&w=majority&appName=mongodb')
    .then(() => { 
        app.listen(port, () => {
            console.log(`http://localhost:${port}`)
        })
     })
    .catch((err) => { console.log(err) })

app.get('/', (req,res) => {
    res.sendFile("./views/home.html", {root: __dirname})
})
