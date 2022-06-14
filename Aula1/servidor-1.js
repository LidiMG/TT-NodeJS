const http = require('http');

http.createServer((req, res) => {
    // Retorna código 200 => requisição feita com sucesso
    // Informa que o tipo de conteúdo é HTML e usa UTF-8
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});

    res.end('<h1>Isso é um servidor HTTP da aula 01!</h1>');
}).listen(3030, () => {
    console.log('Running server!');
})