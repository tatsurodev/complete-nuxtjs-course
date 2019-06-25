const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('this is express')
    res.end()
})

app.use('/retrieve', (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "Content-Type"
    })
    res.json({
        msg: "hello from Express",
        id: 1984
    })
})

app.get('/404', (req, res) => {
    res.send('sorry, unknown URL')
    res.send()
})

app.all('/*', (req, res) => {
    res.redirect('/404')
})

app.listen(9000, () => {
    console.log('express app run at port 9000')
})
