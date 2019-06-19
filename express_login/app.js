const express = require('express');
const app = express()
const db = require('./db/list')
const cookieParser = require('cookie-parser')
app.use(cookieParser('123456'))

app.get('/', (req, res) => {
    res.send("Welcome to Express!" + "<hr/><a href='http://localhost:9000/login'>Click to log in.</a>")
})

app.use('/login', (req, res) => {
    // res.cookie('signed','signed cookie',{signed:true})
    // res.cookie('unsigned','unsigned cookie',{signed:false})
    res.cookie('is_login', true)
    res.send('Welcome!' + "<hr/><a href='http://localhost:9000/logout'>Log Out</a>")
})

app.use('/logout', (req, res) => {
    // res.clearCookie('signed')
    // res.clearCookie('unsigned')
    res.clearCookie('is_login')
    res.send('Bye!' + "<hr/><a href='http://localhost:9000/login'>Log In</a>")
})

app.use('/home', (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "Content-Type"
    })
    const ibm = []
    db.forEach((item) => {
        ibm.push({
            id: item.id,
            brand: item.brand,
            model: item.model
        })
    })
    res.json([true, ibm])
})

app.use('/image/:id', (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "Content-Type"
    })
    if (/^\d+$/.test(req.params.id)) {
        res.json([true, db[req.params.id].image])
    } else {
        res.json([false])
    }
})

app.use('/introduction/:id', (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "Content-Type"
    })
    if (/^\d+$/.test(req.params.id)) {
        res.json([true, db[req.params.id].introduction])
    } else {
        res.json([false])
    }
})

app.all('/*', (req, res) => {
    res.send('sorry, unknown URL')
})

app.listen(9000, () => {
    console.log('express app run at port 9000')
})
