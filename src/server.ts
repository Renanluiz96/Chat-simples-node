import express, { Request, Response } from 'express'
import path from 'path'
import http from 'http'

//Criando o servidor
const server = express();


// Usando o html da pasta public .
server.use(express.static(path.join(__dirname, '../public'))) // Como o server.ts esta fora da pasta public , voce tem que voltar uma pasta(../ ) e depois ir na pasta onde esta o html que seria a pasta public
server.use(express.urlencoded({ extended: true }));

server.use((req: Request, res: Response) => {
    res.status(404).send('Pagina não encontra!')
})

server.listen(3000);