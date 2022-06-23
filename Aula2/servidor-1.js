import { createServer } from 'http';
import { currentDate } from './currentDate.js';
import myName from './myName.js';

createServer((req, res) => {
    // Retorna código 200 => requisição feita com sucesso
    // Informa que o tipo de conteúdo é HTML e usa UTF-8
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});

    const anoAtual = currentDate().getFullYear()
    const hora = currentDate().getHours()
    const min  = currentDate().getMinutes()
    const seg  = currentDate().getSeconds()
    const horaFull = `${hora}:${min}:${seg}`
    

    res.end(`<h1>Isso é um servidor HTTP da aula 02!</h1> ${anoAtual} - ${horaFull} <br> ${myName()}`);
}).listen(3030, () => {
    console.log('Running server!');
})