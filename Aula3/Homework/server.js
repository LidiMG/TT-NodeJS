import { readFile } from 'fs';
import { createServer } from 'http';

createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'})
    let page = 'index.html'
  console.log(req.url);
    switch(req.url) {
      case '/':
        page = 'index.html'
      break;
      case '/contato':
        page = 'contato.html'
      break;
      case '/clientes':
        page = 'clientes.html'
      break;
    }

    readFile(page, 'utf-8', (err, data) => {
      res.write(data)
      res.end()
    })
    
}).listen(3030, () => {
    console.log('Running server!');
})