import express from 'express'
import { readFile } from 'fs'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    readFile('index.html', 'utf-8', (err, data) => {
        res.send(data)
    })
})

app.get('/contato', (req, res) => {
    readFile('contato.html', 'utf-8', (err, data) => {
        res.send(data)
    })
})

app.listen(3030, () => console.log('Running server'))