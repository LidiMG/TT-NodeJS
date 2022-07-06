import express from 'express'
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

app.get('/departamentos', (req, res) => {
    res.send(mockDepartamentos)
})

app.get('/departamentos/:idDepartamento', (req, res) => {
    const { idDepartamento } = req.params
    
    const resultado = mockDepartamentos.filter((depto) => {
        return depto.id == idDepartamento
    })

    res.send(resultado)
})

app.listen(3030, () => console.log('Running server'))

