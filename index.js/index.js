var express = require('express')

var app = express()

var port = 3000

app.get('/b', (req, res) => res.send('Hello World!'))

app.get('/home', (req, res) => res.send('Brayan'))

app.get('/about', (req, res) => res.send('Cifuentes'))

app.get('/contact', (req, res) => res.send('Angel'))

app.get('/', (req, res) => res.sendStatus('401'))


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
