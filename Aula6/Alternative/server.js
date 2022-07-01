import express from 'express'
import { readFile } from 'fs'
import dirName from './dirname.js'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${dirName()}/index.html`)
})

app.get('/contato', (req, res) => {
    res.sendFile(`${dirName()}/contato.html`)
})

app.listen(3030, () => console.log('Running server'))