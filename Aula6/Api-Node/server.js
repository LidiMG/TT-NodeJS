import express from 'express'
// import mockDepartamentos from './Mock/departamentos.mock.json' assert {type: "json"} [Este é um recurso experimental]
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const mockDepartamentos = require("./mock/departamentos.mock.json") // use the require method

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('rota barra')
})

app.post('/', (req, res) => {
    res.send('request feita via post')
})

// Lista os departamentos
app.get('/departamentos', (req, res) => {
    res.send(mockDepartamentos)
})

// Lista um departamento específico
app.get('/departamentos/:idDepartamento', (req, res) => {
    // Implementar um filtro dentro do mock para encontrar o departamento pelo ID
    console.log(req.params.idDepartamento)
    res.send(mockDepartamentos)
})

app.listen(3030, () => console.log('Running server'))

// Mock do resultado (fiel ao que vai vir mas com dados estáticos [versão beta])