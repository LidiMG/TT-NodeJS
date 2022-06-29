import express from 'express'
import { readFile } from 'fs'

const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// Passamos o nome do diretório que será público
app.use(express.static('public'))

// cada get é uma rota
app.get('/', (req, res) => {
    readFile('index.htm', 'utf-8', (err, data) => {
        res.send(data)
    })
})

app.get('/alunos', (req, res) => {
    res.send('Página dos alunos')
})

// Exemplo http://localhost:3030/alunos/99
app.get('/alunos/:id', (req, res) => {
    res.send(req.params)
})

app.listen(3030, () => console.log('Running server'))