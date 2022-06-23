import { createServer } from 'http';
import getClientsByCity from './clients.js'

createServer((req, res) => {
    
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});

    console.log(getClientsByCity('Porto Alegre'))
    
    res.write('<h1>Clientes de Porto Alegre:</h1>')

    getClientsByCity('Porto Alegre').map(clients => {
        res.write(`Nome: ${clients.name} - Cidade: ${clients.city} <br>`)
    })

    res.end();
}).listen(3030, () => {
    console.log('Running server!');
})